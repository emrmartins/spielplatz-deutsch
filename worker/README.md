# spielplatz-deutsch-sync

A tiny Cloudflare Worker that stores progress JSON blobs in Workers KV, keyed by a short sync code. Used by the app's "cross-device sync" feature — no accounts, no personal data, just a code-linked JSON blob.

## Deploy (one-time setup)

1. Create a free Cloudflare account at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) if you don't have one.
2. From this `worker/` directory, log in:
   ```bash
   npx wrangler login
   ```
   (opens a browser tab to authorize)
3. Create the KV namespace:
   ```bash
   npx wrangler kv namespace create PROGRESS
   ```
   This prints an `id`. Copy it into `wrangler.toml`, replacing `REPLACE_WITH_KV_NAMESPACE_ID`.
4. Deploy:
   ```bash
   npx wrangler deploy
   ```
   This prints your Worker's URL, e.g. `https://spielplatz-deutsch-sync.<your-subdomain>.workers.dev`.
5. Paste that URL into `SYNC_URL` in `../src/hooks/useSync.ts`, then rebuild and redeploy the app.

## Local testing

```bash
npx wrangler dev --port 8787
```

Runs a local simulation (miniflare) with local KV — no Cloudflare account or real deployment needed for this.

## API

- `GET /sync/:code` — returns the stored progress JSON for that code (`{}` if none yet)
- `PUT /sync/:code` — stores the request body (JSON) under that code, overwriting any previous value

Codes are 4-12 alphanumeric characters, case-insensitive (normalized to uppercase).
