# worker/index.js

The Worker that serves the whole app in production: static assets (the built React app) for normal routes, and a small `/sync/*` JSON API — backed by Workers KV — for the cross-device progress sync feature. No accounts, no personal data; just a code-linked JSON blob.

Wired up via `@cloudflare/vite-plugin` and the root `wrangler.jsonc`, so `npm run dev` runs the app and this Worker together locally, and `npm run deploy` builds and deploys both as one Cloudflare Worker.

## One-time setup (already done for this project)

1. `npx wrangler login` — authorizes the Cloudflare CLI.
2. `npx wrangler kv namespace create PROGRESS` — creates the KV store; its `id` goes in `wrangler.jsonc` under `kv_namespaces`.

## Commands

```bash
npm run dev       # app + worker together, hot reload
npm run preview   # production build + wrangler dev (closer to real deploy)
npm run deploy    # production build + wrangler deploy (goes live)
```

## API

- `GET /sync/:code` — returns the stored progress JSON for that code (`{}` if none yet)
- `PUT /sync/:code` — stores the request body (JSON, must be under 200KB) under that code, overwriting any previous value

Codes are 4-12 alphanumeric characters, case-insensitive (normalized to uppercase).
