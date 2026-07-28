const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function isValidCode(code) {
  return /^[A-Z0-9]{4,12}$/.test(code);
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const match = url.pathname.match(/^\/sync\/([A-Za-z0-9]+)$/);
    if (!match) {
      return new Response("Not found", { status: 404, headers: CORS_HEADERS });
    }

    const code = match[1].toUpperCase();
    if (!isValidCode(code)) {
      return new Response("Invalid code", { status: 400, headers: CORS_HEADERS });
    }

    if (request.method === "GET") {
      const data = await env.PROGRESS.get(code);
      return new Response(data ?? "{}", {
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    if (request.method === "PUT") {
      const body = await request.text();
      if (body.length > 200_000) {
        return new Response("Payload too large", { status: 413, headers: CORS_HEADERS });
      }
      try {
        JSON.parse(body);
      } catch {
        return new Response("Invalid JSON", { status: 400, headers: CORS_HEADERS });
      }
      await env.PROGRESS.put(code, body);
      return new Response("OK", { headers: CORS_HEADERS });
    }

    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  },
};
