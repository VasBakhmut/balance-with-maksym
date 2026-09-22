import { NextRequest, NextResponse } from "next/server";
import { siteContent } from "@/content/site-content";

export const runtime = "nodejs";

const allowedServices = new Set<string>(siteContent.services.map((service) => service.title));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  return clean && clean.length <= maxLength ? clean : null;
}

function htmlSafe(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char] ?? char);
}

export async function POST(request: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = [...new Set((process.env.TELEGRAM_CHAT_ID ?? "").split(",").map((id) => id.trim()).filter(Boolean))];
  if (!token || !chatIds.length || chatIds.some((id) => !/^-?\d+$/.test(id))) {
    console.error("Appointment delivery is not configured.");
    return NextResponse.json({ error: "Online requests are temporarily unavailable. Please call Maksym instead." }, { status: 503 });
  }

  if (Number(request.headers.get("content-length") ?? 0) > 10_000) {
    return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // A hidden field catches basic form spam without inconveniencing clients.
  if (body.website) return NextResponse.json({ ok: true });

  const appointmentType = field(body.appointmentType, 10);
  const service = field(body.service, 80);
  const date = field(body.date, 10);
  const time = field(body.time, 5);
  const name = field(body.name, 100);
  const phone = field(body.phone, 40);
  const email = field(body.email, 150);
  const suburb = appointmentType === "mobile" ? field(body.suburb, 100) : null;
  const concern = typeof body.concern === "string" ? body.concern.trim() : "";
  const consent = body.consent === true;

  const todayInSydney = new Intl.DateTimeFormat("en-CA", { timeZone: "Australia/Sydney", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const validDate = date && /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    !Number.isNaN(Date.parse(`${date}T00:00:00Z`)) &&
    new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) === date && date >= todayInSydney;
  const validTime = time && /^([01]\d|2[0-3]):[0-5]\d$/.test(time);
  if (
    !(["clinic", "mobile"].includes(appointmentType ?? "")) ||
    !service || !allowedServices.has(service) || !validDate || !validTime ||
    !name || !phone || phone.replace(/\D/g, "").length < 8 ||
    !email || !emailPattern.test(email) || (appointmentType === "mobile" && !suburb) ||
    concern.length > 500 || !consent
  ) {
    return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
  }

  const lines = [
    "<b>New appointment request</b>",
    `Type: ${htmlSafe(appointmentType!)}`,
    `Service: ${htmlSafe(service)}`,
    `Preferred: ${htmlSafe(date!)} at ${htmlSafe(time!)}`,
    ...(suburb ? [`Suburb: ${htmlSafe(suburb)}`] : []),
    `Name: ${htmlSafe(name)}`,
    `Phone: ${htmlSafe(phone)}`,
    `Email: ${htmlSafe(email)}`,
    ...(concern ? [`Client note: ${htmlSafe(concern)}`] : []),
    "Appointment has not been confirmed.",
  ];

  const deliveries = await Promise.allSettled(chatIds.map(async (chatId) => {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n"), parse_mode: "HTML" }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    if (!telegramResponse.ok) throw new Error(`Telegram returned ${telegramResponse.status}`);
  }));
  const delivered = deliveries.filter((result) => result.status === "fulfilled").length;
  if (delivered === chatIds.length) return NextResponse.json({ ok: true });

  console.error(`Appointment delivery failed for ${chatIds.length - delivered} of ${chatIds.length} chats.`);
  return NextResponse.json({
    error: delivered
      ? "Your request may have reached some recipients. Please call Maksym to confirm it was received."
      : "We could not send your request. Please call Maksym instead.",
  }, { status: 502 });
}
