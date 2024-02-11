import { addTask } from "../actions/tasks";
import FormStatusButton from "./FormStatusButton";
const AddTaskForm = () => {
  return (
    <form className="join mb-5 w-full" action={addTask}>
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
