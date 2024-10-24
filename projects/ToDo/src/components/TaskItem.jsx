import { CheckTaskIcon } from "./CheckTaskIcon";
import { EditMark } from "./icons/EditMark";
import { DeleteMark } from "./icons/DeleteMark";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export const TaskItem = ({
  children,
  editTask,
  index,
  isCheck
}) => {
  const finishedTask = isCheck ? "completed" : "";
  const {deleteTask, checkTask} = useContext(TaskContext)

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckTask = () => {
    checkTask(index);
  };

  const handleEditTask = () => {
    editTask(index)
  }

  return (
    <>
      <button onClick={handleCheckTask} className="check-btn">
        <CheckTaskIcon isCheck={isCheck} />
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
