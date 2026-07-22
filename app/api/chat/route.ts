import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK =
  "https://n8n.srv1843309.hstgr.cloud/webhook/7d57fe53-108c-4532-8765-085d020330ab/chat";

export async function POST(request: NextRequest) {
  const action = request.nextUrl.searchParams.get("action");
  const targetUrl = action ? `${N8N_WEBHOOK}?action=${action}` : N8N_WEBHOOK;

  const body = await request.text();

  const n8nResponse = await fetch(targetUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const data = await n8nResponse.json();
  return NextResponse.json(data, { status: n8nResponse.status });
}
