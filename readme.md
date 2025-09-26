# Guest Book (Express + Vite)

## Prereqs

- Node 20+
- Postgres (local) or Supabase connection string

## Install & Run

- **Server**: `cd server && npm i && cp .env.example .env` → fill `DATABASE_URL` → `npm run dev`
- **Client**: `cd ../client && npm i` (if created via Vite) → `npm run dev`
- Open http://localhost:5173

## What to Demo

- **Form works**: Submit a new entry → appears under Recent entries (and in DB)
- **Responsive**: Resize viewport / open on phone → mobile‑friendly layout
- **API**: `GET /api/entries` and `POST /api/entries`
- **Seeded DB**: show `seed.js` or Supabase SQL insert screenshot
