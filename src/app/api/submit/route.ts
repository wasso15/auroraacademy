import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const SCRIPT_URL ="https://script.google.com/macros/s/AKfycbzElIocLQxkATBCxfWtb0fJZONpsJXV6u-Vm8mOPcMlEhvUt--6TEYMcfgKQFRuGgOVJA/exec";
    if (!SCRIPT_URL) {
      return NextResponse.json({ error: "Missing server GOOGLE_SCRIPT_URL" }, { status: 500 });
    }

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    const status = res.ok ? 200 : res.status;

    return NextResponse.json({ ok: res.ok, remote: text }, { status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
