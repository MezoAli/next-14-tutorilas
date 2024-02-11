"use client";
import { addTask } from "../actions/tasks";
import FormStatusButton from "./FormStatusButton";
import { useFormState } from "react-dom";

const initialState = {
  message: null,
};
const AddTaskForm = () => {
  const [state, formAction] = useFormState(addTask, initialState);

  return (
    <>
      {state.message && state.message === "success" ? (
        <div className="toast toast-top toast-start">
          <div className="alert alert-success">
            <span>{state.message}</span>
          </div>
        </div>
      ) : (
        <div className="toast toast-top toast-start">
          <div className="alert alert-error">
            <span>{state.message}</span>
          </div>
        </div>
      )}
      <form className="join mb-5 w-full" action={formAction}>
        <input
          type="text"
          name="content"
          className="input w-full input-bordered join-item"
        />
        <FormStatusButton />
      </form>
    </>
  );
};

export default AddTaskForm;
