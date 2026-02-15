### GSF — Digital Sovereign System

No custody.
No central control.
No excuses.

──────────────────────────────
Repository Layout
──────────────────────────────
apps/
├── core-api/            wallet, QR, IB, subscription
└── web-frontend/        Next.js / React

packages/
├── gsf-city-ai/         AI governance brain
├── gsf-city-ai-auto/    Cron + automation + monitoring
├── gsf-birthday-engine/ Event engine
└── gsf-disaster-autopilot/ National disaster autopilot

docs/
└── README.md            Master framework documentation
──────────────────────────────
Setup
──────────────────────────────

$ git clone <repo>
$ cd apps/core-api
$ npm install
$ cp .env.example .env

# backend
$ npm run dev

# frontend
$ cd ../../apps/web-frontend
$ npm run dev

# cron jobs auto-run in city-ai-auto
──────────────────────────────
Core Endpoints
──────────────────────────────

AI Dispatch        → /api/city-ai/dispatch
QR Access          → /api/qr-access/generate | validate
Wallet Top-up      → /api/wallet/topup
Birthday Event     → triggerBirthday(user)
Disaster Autopilot → internal modules

──────────────────────────────
Philosophy
──────────────────────────────

Autonomous   → Functions without central intervention
Immutable    → Deterministic logs & events
Non-custodial→ No sensitive secrets in live systems
Evolving     → Modular. Replace. Expand. Survive.

──────────────────────────────
License
──────────────────────────────

© 2026 GSF-001 — All Rights Reserved.

Reference, study, internal dev only.
Production use requires explicit authorization.

──────────────────────────────
Notes / Hidden
──────────────────────────────

> Each package is sovereign.  
> Log everything. Secrets exist elsewhere.  
> Patterns may repeat.  
> Look for signals between the lines.
