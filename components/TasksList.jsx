import Link from "next/link";
import prisma from "../utils/db";
const TasksList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <ul className="flex-col gap-4 max-w-xl flex justify-start ">
      {tasks?.map((task) => {
        return (
          <li
            className="text-2xl font-bold flex justify-between items-center bg-white p-6 shadow-lg rounded-md"
            key={task.id}
          >
            <div className="flex gap-4 justify-center items-center">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={task.completed}
              />
              <h2
                className={`text-2xl font-bold ${
                  task.completed ? "line-through" : undefined
                }`}
              >
                {task.content}
              </h2>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Link
                className="btn btn-success font-semibold"
                href={`/tasks/${task.id}`}
              >
                Edit
              </Link>
              <button className="btn btn-error font-semibold">Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
