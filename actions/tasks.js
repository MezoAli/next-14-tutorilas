"use server";
import { revalidatePath } from "next/cache";
import prisma from "../utils/db";
import { redirect } from "next/navigation";

export const allTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return tasks;
};

export const addTask = async (prevState, formData) => {
  const content = formData.get("content");

  try {
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/tasks");
    return { message: "Successfully Added Task" };
  } catch (error) {
    return { message: "Error Occured!!!" };
  }
};

export const getSingleTask = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  return task;
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/tasks");
};

export const editTask = async (formData) => {
  const content = formData.get("content");
  const completed = formData.get("completed");
  const id = formData.get("id");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: completed === "on" ? true : false,
      content,
    },
  });

  redirect("/tasks");
};
