import { NextResponse } from "next/server";
import prisma from "../../../utils/db";

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(
    { message: "get tasks successfully", data: tasks },
    {
      status: 200,
    }
  );
}
