import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const authorization = request.headers.get("authorization");

    if (!authorization?.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Token tidak ditemukan." },
        { status: 401 }
      );
    }

    const token = authorization.replace("Bearer ", "");
    const user = await verifyToken(token);

    return NextResponse.json({
      authenticated: true,
      user
    });
  } catch {
    return NextResponse.json(
      { authenticated: false, message: "Token tidak valid atau sudah expired." },
      { status: 401 }
    );
  }
}
