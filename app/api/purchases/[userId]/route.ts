import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } } // 修正された型定義
) {
  const userId = params.userId;

  try {
    const purchases = await prisma.purchase.findMany({
      where: { userId },
    });
    console.log(purchases);

    return NextResponse.json(purchases);
  } catch (err) {
    console.error("Failed to fetch purchases:", err);
    return NextResponse.json(
      { error: "Failed to fetch purchases" },
      { status: 500 }
    );
  }
}
