"use server";
import { revalidatePath } from "next/cache";
import prisma from "../utils/db";

export const allTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return tasks;
};

export const addTask = async (formData) => {
  const content = formData.get("content");

  await prisma.task.create({
    data: {
      content,
    },
  });

  revalidatePath("/tasks");
};

export const getSingleTask = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  return task;
};
