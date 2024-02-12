"use client";
import { useEffect } from "react";
import { addTask } from "../actions/tasks";
import FormStatusButton from "./FormStatusButton";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  message: null,
};
const AddTaskForm = () => {
  const [state, formAction] = useFormState(addTask, initialState);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form className="join mb-5 w-full" action={formAction}>
      <input
        type="text"
        name="content"
        className="input w-full input-bordered join-item"
      />
      <FormStatusButton />
    </form>
  );
};

export default AddTaskForm;
