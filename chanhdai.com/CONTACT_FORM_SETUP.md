# Contact Form Setup Guide

The contact form now sends emails directly instead of opening your email client.

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [Resend](https://resend.com/) and sign up for a free account
2. Once logged in, navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the generated API key

### 2. Add API Key to Environment Variables

Add the Resend API key to your `.env.local` file:

```bash
RESEND_API_KEY=re_your_api_key_here
```

### 3. Verify Your Domain (Optional but Recommended)

For production, you should verify your domain with Resend:

1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Follow the DNS setup instructions
4. Once verified, update the `from` field in `/src/app/api/contact/route.ts`:

```typescript
from: "Portfolio Contact Form <noreply@yourdomain.com>",
```

### 4. Test the Contact Form

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to the contact section
3. Fill out the form and click "Send Message"
4. Check your email (prathameshmedage7@gmail.com) for the message

## Free Tier Limits

Resend's free tier includes:
- 100 emails per day
- 3,000 emails per month
- Perfect for portfolio contact forms

## Troubleshooting

### "Failed to send email" error
- Verify your `RESEND_API_KEY` is set correctly in `.env.local`
- Check the console for detailed error messages
- Make sure you restarted your dev server after adding the API key

### Emails not arriving
- Check your spam folder
- Verify the recipient email in `/src/app/api/contact/route.ts`
- If using a custom domain, ensure DNS records are properly configured

## Features Implemented

✅ Direct email sending (no email app popup)
✅ Form validation
✅ Loading state while sending
✅ Success/error notifications
✅ Form reset after successful submission
✅ Reply-to field set to sender's email
