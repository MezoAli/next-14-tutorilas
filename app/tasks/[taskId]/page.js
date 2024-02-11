import React from "react";
import { getSingleTask } from "../../../actions/tasks";

const EditTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.taskId);
  return <div>{task.content}</div>;
};

export default EditTaskPage;
