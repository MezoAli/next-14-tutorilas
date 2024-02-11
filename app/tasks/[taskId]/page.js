import React from "react";
import { getSingleTask } from "../../../actions/tasks";
import EditForm from "../../../components/EditForm";
import Link from "next/link";

const EditTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.taskId);
  return (
    <div>
      <Link href="/tasks" className="btn btn-accent my-8">
        Back to Tasks
      </Link>
      <EditForm task={task} />
    </div>
  );
};

export default EditTaskPage;
