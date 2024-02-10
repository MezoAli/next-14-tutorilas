import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TasksList";
const TasksPage = () => {
  return (
    <div className="max-w-lg flex flex-col justify-start gap-4">
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
