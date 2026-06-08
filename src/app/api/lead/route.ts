import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  business?: string;
  website?: string;
  email?: string;
  phone?: string;
  industry?: string;
  leadVolume?: string;
  currentTool?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Form submissions are not configured yet." },
      { status: 503 },
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const required: Array<keyof LeadPayload> = [
    "name",
    "business",
    "email",
    "phone",
    "industry",
  ];

  for (const field of required) {
    if (!isNonEmpty(body[field])) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 },
      );
    }
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    source: "job-to-close-website",
    name: body.name!.trim(),
    business: body.business!.trim(),
    website: body.website?.trim() ?? "",
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    industry: body.industry!.trim(),
    leadVolume: body.leadVolume?.trim() ?? "",
    currentTool: body.currentTool?.trim() ?? "",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Google Sheets webhook failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach Google Sheets webhook." },
      { status: 502 },
    );
  }
}
