# Masdoor (مزدور) — Daily Wage Labour Marketplace

A Next.js + Tailwind CSS v4 prototype connecting daily-wage workers (mazdoor)
directly with clients, designed for low-literacy users.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's included (frontend prototype, mock data)

- **/** — Home page: role selection (Worker / Client), big icon buttons, language switcher placeholder
- **/signup** — Labour signup flow: phone number, icon-based skill picker, daily wage, availability toggle (the most important screen)
- **/client/search** — Client browse page: filter by skill + availability, call/WhatsApp buttons, ratings, distance
- **/jobs** — Job board: clients post one-time jobs (icon skill picker, workers needed, wage, urgent flag), workers browse and apply
- `src/data/skills.js` — Skill categories (icon + Urdu/Punjabi/English labels) — edit this to add/remove trades
- `src/data/mock.js` — Sample labour & job data (replace with Supabase queries)

## Design choices for accessibility

- Bilingual (Urdu/English) labels everywhere, large tap targets (min 56px)
- Icon-first navigation (bottom nav bar with icons + short labels)
- Phone number instead of email for signup; no passwords
- Voice-record placeholder for name/intro (illiterate-friendly)
- Direct `tel:` and WhatsApp `wa.me` links — no chat system required
- Big green/red availability toggle — single most important worker action

## Next steps (not yet built)

1. **Supabase integration** — connect the schema we designed (profiles, labour_details,
   skills, job_posts, reviews, etc.) and replace mock data with real queries
2. **Phone OTP auth** — via Supabase Auth (phone provider) or Twilio
3. **Geolocation** — auto-detect `current_lat/lng`, calculate distance with Haversine/PostGIS
4. **Map view** — Leaflet/Mapbox showing nearby available workers as pins
5. **CNIC verification** — basic identity check, "Verified" badge
6. **Auto-expire availability** — scheduled function to set `is_available = false`
   after N hours of inactivity
7. **Multi-language toggle** — wire up the language switcher (ur/en/pa) with real
   translation strings (consider `next-intl`)
8. **Audio onboarding** — first-launch voice tutorial in Urdu/Punjabi
9. **Reviews & ratings** — submit review after job completion
10. **Reports/blocks** — safety feature for fake/abusive profiles

## Tech stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- lucide-react (icons)
- Supabase (planned: auth, database, storage)
