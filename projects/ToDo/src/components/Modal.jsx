import "../modal.css"
import { useContext, useState, useEffect } from "react";
import TaskContext from "../context/TaskContext";

export const Modal = () => {

  const {isModalOpen, closeModal, taskToEdit, updateTask} = useContext(TaskContext)
  const [task, setTask] = useState("")

  useEffect(() => {
    if (taskToEdit.edit === true) {
      setTask(taskToEdit.item.task)
    }
  }, [taskToEdit])

  if (!isModalOpen) {
    return null;
  }

  const handleOnchange = (e) => {
    // const newEditTask = modalTask
    // newEditTask.task = e.target.value
    setTask(e.target.value)
  }

  const handleOnClick = () => {
    // const newEditTask = taskToEdit.item
    // newEditTask.task = task
    updateTask(taskToEdit.item.id, task)
    closeModal()
    setTask("")
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-div">
        <input type="text" value={task} onChange={handleOnchange} />
        <button className="light-button" onClick={handleOnClick}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};
