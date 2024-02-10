const AddTaskForm = () => {
  return (
    <form className=" mb-5">
      <input type="text" className="border p-3 mr-3 rounded-md w-[75%]" />
      <button className="btn btn-primary">Create Task</button>
    </form>
  );
};

export default AddTaskForm;
