### GSF SYSTEM — Digital Sovereign Framework

*Building autonomous, non-custodial systems that outlive their operators.*  
No custody. No central control. No excuses. Just **signals, rules, and coordination logic**.

---

### 🌐 Overview

GSF is a **monorepo** for a decentralized digital ecosystem, combining:  

- Wallets & subscription APIs  
- QR access system  
- AI governance & city dispatch  
- Event engines (birthdays, disasters)  
- Automation & monitoring  

The system is designed for **scalability, modularity, and privacy-first operation**.

---

### 📂 Structure

```text
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


---

⚡ Quickstart

# 1. Clone repo
git clone <repo-url>

# 2. Backend setup
cd apps/core-api
npm install
cp .env.example .env
npm run dev

# 3. Frontend setup
cd ../web-frontend
npm install
npm run dev

# 4. Cron & automation
# city-ai-auto runs automatically


---

🔑 Notes & Endpoints

AI dispatch: /api/city-ai/dispatch

QR access: /api/qr-access/generate & /api/qr-access/validate

Wallet top-up: /api/wallet/topup

Birthday events: triggerBirthday(user)

Disaster autopilot: placeholder modules


> Secrets, keys, and sensitive configuration never pushed. .env handles all private credentials.




---

🧩 Philosophy

Autonomous: the system runs without central authority.

Modular: plug-and-play engines, AI brains, and automation.

Secure: all sensitive operations are non-custodial.

Elegant: minimalistic code, maximum impact.


> GSF is more than code. It's a digital sovereign ecosystem, scalable from single cities to national autopilot.

---
_mikatoshi
