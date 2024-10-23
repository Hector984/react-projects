import { CheckTaskIcon } from "./CheckTaskIcon";
import { EditMark } from "./icons/EditMark";
import { DeleteMark } from "./icons/DeleteMark";
import {Modal} from "./Modal"
import { useState } from "react";

export const TaskItem = ({
  children,
  deleteTask,
  checkTask,
  editTask,
  index,
  isCheck
}) => {
  const finishedTask = isCheck ? "completed" : "";

  const handleClick = () => {
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

      <button onClick={handleClick} className="delete-btn">
        <DeleteMark />
      </button>
    </>
  );
};
