import { addTask } from "../actions/tasks";
const AddTaskForm = () => {
  return (
    <form className="join mb-5 w-full" action={addTask}>
      <input
        type="text"
        name="content"
        className="input w-full input-bordered join-item"
      />
      <button type="submit" className="btn join-item btn-primary">
        Create Task
      </button>
    </form>
  );
};

export default AddTaskForm;
