# LockedIn - Waitlist Launch

Pre-order platform for LockedIn accountability app launching December 31st, 2025.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📋 Current Status

**Waitlist Mode Active** - Users can join waitlist and view pricing ($5 early bird / $9 regular)

### Completed Features
- ✅ Landing page with countdown to Dec 31st
- ✅ Waitlist signup page (`/waitlist`)
- ✅ Pricing/checkout page (`/checkout`) 
- ✅ Email collection flow
- ✅ Smooth animations (Framer Motion)
- ✅ Dark mode design
- ✅ Mobile responsive

### Coming After Deployment
- ⏳ DoDo Payments integration
- ⏳ Resend email automation
- ⏳ Early bird counter (database)
- ⏳ Success page with confirmation email

## 🔑 Environment Variables

Create `.env.local` file:

```env
# Resend API (Already provided)
RESEND_API_KEY=re_3e18eeWn_35eiCbSrsMByfpeD2NYPDQip

# DoDo Payments (Add after deployment)
DODO_API_KEY=your_key_here
DODO_SECRET_KEY=your_secret_here
DODO_WEBHOOK_SECRET=your_webhook_secret_here

# App URL
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📁 Key Files

- `/src/app/waitlist/page.tsx` - Email collection
- `/src/app/checkout/page.tsx` - Pricing selection
- `/src/components/LandingPage.tsx` - Main landing page
- `/src/components/landing/CountdownTimer.tsx` - Dec 31st countdown

## 🚢 Deployment (Vercel)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Post-Deployment Steps
1. Get DoDo Payments API credentials
2. Add DoDo credentials to Vercel env vars
3. Create payment integration API routes:
   - `/app/api/create-payment/route.ts`
   - `/app/api/webhook/dodo/route.ts`
4. Setup Resend email templates
5. Test payment flow
6. Update early bird counter logic

## 🎯 Launch Plan

- **Dec 26-30:** Deploy waitlist, collect pre-orders
- **Dec 31:** Launch full app (enable dashboard features)
- **Jan 1+:** Send access emails to all waitlist users

## 📊 Pricing

- Early Bird: $5 (first 100 spots)
- Regular: $9 
- Lifetime access, no subscriptions

## 🔒 Disabled Features (Until Launch)

- Dashboard (`/dashboard`) - Redirects to home
- Login page - Shows waitlist message
- All backend features preserved in code, just commented out

## 📧 Contact

Questions? Add your contact info here.
