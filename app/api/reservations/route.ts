import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://n8n.srv1843309.hstgr.cloud/webhook/make_reservation";

export async function POST(request: NextRequest) {
  const { name, phone, guests, date, time } = await request.json();

  if (!name || !phone || !guests || !date || !time) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios." },
      { status: 400 }
    );
  }

  const secret = process.env.RESERVATION_WEBHOOK_SECRET;
  if (!secret) {
    console.error("RESERVATION_WEBHOOK_SECRET no está configurado.");
    return NextResponse.json(
      { error: "Error de configuración del servidor." },
      { status: 500 }
    );
  }

  const webhookResponse = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": secret,
    },
    body: JSON.stringify({
      name,
      phone,
      guests,
      date,
      time,
      datetime: `${date}T${time}:00`,
    }),
  });

  if (!webhookResponse.ok) {
    console.error("Error del webhook:", webhookResponse.status);
    return NextResponse.json(
      { error: "No se pudo registrar la reserva. Inténtalo de nuevo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
