# Forgemark

A digital products marketplace (courses, source code, templates, AI prompts, ebooks) built as a personal project to work through a real microservices setup end to end: API gateway, a separate auth service, session-based auth backed by Redis, and a React frontend.

The marketplace itself (product listings, checkout, seller payouts) is not built yet. What's actually wired up right now is the harder infrastructure part: Google sign-in through Firebase, session cookies stored in Redis, and a gateway proxying requests to the right service. See [Current state](#current-state) below for exactly what works.

## Stack

**Frontend**: React 19, TypeScript, Vite, Tailwind v4, shadcn (`base-ui` primitives), Framer Motion (`motion`), React Router, Redux Toolkit, Firebase Auth (client).

**Backend**: Node.js, TypeScript, Express 5, MongoDB (Mongoose), Redis (`ioredis`), Firebase Admin SDK, Zod for env validation. Split into an API gateway and independent services, wired together as npm workspaces.

## Architecture

```
gateway (:8000)  →  proxies /api/auth/*  →  auth service (:8001)  →  MongoDB
                                                     ↓
                                                   Redis  (session store)
```

The gateway doesn't do anything auth-aware itself. It's a thin `express-http-proxy` in front of the actual services, which is the point: each service is independently runnable and only the gateway knows about all of them.

```
backend/
  gateway/                 # API gateway, proxies to services
  services/
    auth/                  # Firebase-verified login, session issuing
  shared/
    redis/                 # shared Redis client, consumed as a local npm workspace package (@pixelpeti/redis)

frontend/
  src/
    pages/                 # route-level composition (thin, no business logic inline)
    components/
      home/, partner/, admin/   # page-specific sections
      layout/, auth/            # shared across pages (nav/footer, route guard)
      ui/                       # shadcn-generated primitives
    redux/                 # store + slices
    data/                  # static/mock content, typed
    lib/, utils/, hooks/   # shared helpers, axios/firebase clients, hooks
```

## Current state

Working end to end:
- Google sign-in via Firebase, verified server-side with the Firebase Admin SDK
- Session issuing/cleanup through Redis, session ID stored in an httpOnly cookie
- Gateway to auth service proxying
- Role-based route protection on the frontend (`/partner`, `/admin`)

Not built yet:
- Actual product catalog, checkout, payments, seller payouts (Partner/Admin dashboards are real UI wired to placeholder data, not live APIs)
- Server-side authorization on any admin/partner-specific endpoint (none exist yet)

## Running it locally

You'll need Node 22+, MongoDB (Atlas or local), Redis, and a Firebase project with Google auth enabled.

```bash
# Redis, if you don't already have it running
docker compose -f backend/docker-compose.yml up -d

# backend (installs gateway + all services as workspaces)
cd backend
npm install
cp gateway/.env.example gateway/.env
cp services/auth/.env.example services/auth/.env
# fill in the real values in both .env files, then:
npm run dev --workspace=gateway
npm run dev --workspace=services/auth

# frontend
cd frontend
npm install
cp .env.example .env
# fill in VITE_FIREBASE_API_KEY, then:
npm run dev
```

Frontend runs on `:5173`, gateway on `:8000`, auth service on `:8001`.

## Why this exists

Built to get hands-on with the parts of backend engineering that don't show up in tutorials as often: service-to-service auth, session storage separate from the app database, and structuring a monorepo so services stay independently deployable instead of one big Express app.
