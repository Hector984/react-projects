import { CheckTaskIcon } from "./CheckTaskIcon";
import { EditMark } from "./icons/EditMark";
import { DeleteMark } from "./icons/DeleteMark";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export const TaskItem = ({
  children,
  task
}) => {
  const finishedTask = task.done ? "completed" : "";
  const {deleteTask, checkTask, editTask} = useContext(TaskContext)

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCheckTask = () => {
    checkTask(task.id);
  };

  const handleEditTask = () => {
    editTask(task.id)
  }

  return (
    <>
      <button onClick={handleCheckTask} className="check-btn">
        <CheckTaskIcon isCheck={task.done} />
      </button>

      <li className={finishedTask}>{children}</li>

      <button className="edit-btn" onClick={handleEditTask}>
        <EditMark />
      </button>

      <button onClick={handleDelete} className="delete-btn">
        <DeleteMark />
      </button>
    </>
  );
};
