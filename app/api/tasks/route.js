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

export async function POST(request) {
  const data = await request.json();
  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  });

  return NextResponse.json(
    { message: "created task successfully", data: task },
    {
      status: 201,
    }
  );
}
