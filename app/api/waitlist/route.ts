import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.csv");

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as Record<string, unknown>).email !== "string"
  ) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const email = ((body as Record<string, unknown>).email as string).trim().toLowerCase();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    const dir = path.dirname(WAITLIST_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const exists = fs.existsSync(WAITLIST_FILE);
    const existing = exists ? fs.readFileSync(WAITLIST_FILE, "utf-8") : "";

    if (existing.includes(email)) {
      return NextResponse.json({ message: "Already on the waitlist" }, { status: 200 });
    }

    const timestamp = new Date().toISOString();
    const line = exists ? `\n${email},${timestamp}` : `email,joined_at\n${email},${timestamp}`;
    fs.appendFileSync(WAITLIST_FILE, line, "utf-8");

    return NextResponse.json({ message: "Joined waitlist" }, { status: 200 });
  } catch (err) {
    console.error("Waitlist write error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
