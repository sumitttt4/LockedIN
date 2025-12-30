# DoDo Payments Integration

This checkout system is integrated with **DoDo Payments** for processing the $9 lifetime access fee.

## Setup Instructions

### 1. Environment Variables

Add these to your `.env.local`:

```bash
# DoDo Payments Configuration
DODO_SECRET_KEY=your_dodo_secret_key_here
NEXT_PUBLIC_USE_DODO_PAYMENTS=true

# Application URL (for payment redirects)
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### 2. Development Mode

For testing **without** real payment processing:
```bash
NEXT_PUBLIC_USE_DODO_PAYMENTS=false
```

This will use simulated payments so you can test the flow.

### 3. Production Mode

For live payments:
```bash
NEXT_PUBLIC_USE_DODO_PAYMENTS=true
DODO_SECRET_KEY=sk_live_xxxxxxxxxxxxx
```

## Payment Flow

1. **User claims username** on landing page
2. **Redirected to `/login`** with username parameter
3. **Signs in** via Magic Link or OAuth
4. **Auth callback** redirects to `/checkout` (payment gate)
5. **Checkout page** shows invoice for $9.00
6. **Clicks "Pay $9.00"** → DoDo checkout session created
7. **Redirected to DoDo** payment page (external)
8. **User completes payment** on DoDo's secure page
9. **DoDo redirects back** to `/checkout/success?session_id=xxx`
10. **Payment verified** via DoDo API
11. **Profile updated** with `has_paid = true`
12. **Redirected to `/dashboard`** - full access granted

## API Endpoints Used

### Create Checkout Session
```
POST https://api.dodo.co/v1/checkout/sessions
Authorization: Bearer {DODO_SECRET_KEY}
```

### Verify Payment
```
GET https://api.dodo.co/v1/checkout/sessions/{session_id}
Authorization: Bearer {DODO_SECRET_KEY}
```

## Testing

### Local Testing (Simulated)
```bash
npm run dev
# Visit http://localhost:3000
# Claim username → Login → Checkout → Click "Pay" → Instant access
```

### Production Testing (Real Payments)
1. Set `NEXT_PUBLIC_USE_DODO_PAYMENTS=true`
2. Add real `DODO_SECRET_KEY`
3. Test with DoDo's test credit cards (check DoDo docs)

## Security Notes

- ✅ All payment processing happens on DoDo's servers (PCI compliant)
- ✅ API keys are server-side only (never exposed to client)
- ✅ Payment verification happens server-side before granting access
- ✅ Checkout redirects are signed and validated

## Support

For DoDo Payments API issues, visit: https://docs.dodo.co
