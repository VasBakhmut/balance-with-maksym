# Balance With Maksym

Next.js website for Maksym's therapeutic massage practice in Sydney.

## Appointment requests

The form sends a request to `app/api/appointment/route.ts`. Maksym still confirms the appointment personally. No booking is confirmed by the website.

Set these server-side environment variables in Vercel before using the form:

```text
TELEGRAM_BOT_TOKEN=<token from BotFather>
TELEGRAM_CHAT_ID=<one chat ID or several IDs separated by commas>
```

Start a conversation with the bot from each private account, then use Telegram's `getUpdates` method to find each chat ID. For multiple recipients, use a value such as `123456789,987654321` in the single `TELEGRAM_CHAT_ID` variable. The server sends the request to each ID. Telegram account access is still controlled by Telegram, not by this list. Keep the token in Vercel environment variables. Do not put it in `NEXT_PUBLIC_*`, commit it to Git, or share it in a screenshot. Redeploy after adding the variables. Submit one test request and confirm that every recipient receives it before announcing the form as available.

If Telegram is not configured or fails, the form shows an error and the phone number. It never shows a success message for an undelivered request. The client note is optional; the form asks clients not to include sensitive medical information. Review the privacy wording before launch because the form sends contact details and any client note through Telegram.

## SEO content

Two guides live in `content/guides.ts` and appear in the footer and sitemap. Business details, prices and service names live in `content/site-content.ts`. Review the guides with Maksym before deploying them.

The current canonical domain is `https://balance-with-maksym.vercel.app`. If the site moves to a custom domain, set `NEXT_PUBLIC_SITE_URL` in Vercel and update the canonical URL in `content/site-content.ts` and the site's Google Business Profile.

## Local checks

```bash
npm run lint
npm run build
```
