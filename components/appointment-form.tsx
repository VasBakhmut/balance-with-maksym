"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/content/site-content";
import { Check } from "./icons";

type AppointmentType = "clinic" | "mobile";

export function AppointmentForm() {
  const [type, setType] = useState<AppointmentType>("clinic");
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    window.setTimeout(() => {
      setBusy(false);
      setSubmitted(true);
      document.getElementById("form-status")?.focus();
    }, 450);
    // TODO: Connect the appointment request form to the approved backend service.
  }

  if (submitted) {
    return (
      <div className="form-success" id="form-status" role="status" aria-live="polite" tabIndex={-1}>
        <span className="success-icon"><Check /></span>
        <p className="eyebrow">Request received</p>
        <h3>Thank you. Maksym will be in touch.</h3>
        <p>Your appointment request has been received. Maksym will contact you to confirm the date, time and final details.</p>
        <button type="button" className="text-button" onClick={() => setSubmitted(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <fieldset className="form-span">
        <legend>Appointment type</legend>
        <div className="segmented-control">
          <label><input type="radio" name="appointmentType" value="clinic" checked={type === "clinic"} onChange={() => setType("clinic")} /><span>Clinic</span></label>
          <label><input type="radio" name="appointmentType" value="mobile" checked={type === "mobile"} onChange={() => setType("mobile")} /><span>Mobile</span></label>
        </div>
      </fieldset>

      <label>Service<span aria-hidden="true">*</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a treatment</option>
          {siteContent.services.map(service => <option key={service.title}>{service.title}</option>)}
        </select>
      </label>

      {type === "mobile" && (
        <label>Your suburb<span aria-hidden="true">*</span>
          <input name="suburb" autoComplete="address-level2" required placeholder="e.g. Bondi" />
        </label>
      )}

      <label>Preferred date<span aria-hidden="true">*</span>
        <input type="date" name="date" required />
      </label>

      <label>Preferred time<span aria-hidden="true">*</span>
        <input type="time" name="time" required />
      </label>

      <label>Full name<span aria-hidden="true">*</span>
        <input name="name" autoComplete="name" required />
      </label>

      <label>Phone number<span aria-hidden="true">*</span>
        <input type="tel" name="phone" autoComplete="tel" inputMode="tel" required />
      </label>

      <label className="form-span">Email address<span aria-hidden="true">*</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>

      <label className="form-span">What would you like help with?<span aria-hidden="true">*</span>
        <textarea name="concern" rows={4} required placeholder="A brief description is enough. Please do not include urgent or highly sensitive medical information." />
      </label>

      <label className="checkbox form-span">
        <input type="checkbox" name="consent" required />
        <span>I agree to be contacted by Maksym about this appointment request.</span>
      </label>

      <div className="form-submit form-span">
        <button className="button" type="submit" disabled={busy}>{busy ? "Sending request…" : "Request appointment"}</button>
        <p>Your appointment is confirmed only after Maksym contacts you.</p>
      </div>
    </form>
  );
}
