# GSF MONOREPO

## Structure

apps/
├── core-api/                 ← Backend API (wallet, QR, IB, subscription)
├── web-frontend/             ← Frontend UI (Next.js / React)
packages/
├── gsf-city-ai/              ← AI governance brain
├── gsf-city-ai-auto/         ← Cron + automation + monitoring
├── gsf-birthday-engine/      ← Event engine
├── gsf-disaster-autopilot/   ← National disaster autopilot
docs/
├── README.md                 ← Master framework documentation

## Setup

1. Clone repo
2. `cd apps/core-api && npm install`
3. `cp .env.example .env`
4. Run backend: `npm run dev`
5. Run frontend: `npm run dev` (web-frontend)
6. Cron jobs in city-ai-auto run automatically

## Notes

- All AI dispatches go via `/api/city-ai/dispatch`
- QR access: `/api/qr-access/generate` & `/api/qr-access/validate`
- Wallet top-up: `/api/wallet/topup`
- Birthday events: `triggerBirthday(user)`
- Disaster autopilot: placeholder modules for now
