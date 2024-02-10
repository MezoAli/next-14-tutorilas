import React from "react";
import prisma from "../../utils/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const createTask = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "Task 🕋",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  // revalidatePath("/prisma-example");

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await createTask();
  return (
    <div className="max-w-xl">
      <ul className="flex-col gap-4 max-w-xl flex justify-start ">
        {tasks?.map((task, index) => {
          return (
            <li
              className="text-2xl font-bold flex justify-between items-center bg-white p-6 shadow-lg rounded-md"
              key={task.id}
            >
              <p>
                {index + 1} : {task.content}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PrismaExample;
