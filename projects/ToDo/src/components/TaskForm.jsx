import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";

export const TaskForm = () => {

  const {addTask} = useContext(TaskContext)
  const [task, setTask] = useState("");

    const captureTask = (e) => {
        setTask(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        addTask(task)
        setTask("");
    }

    return (
        <div id="form">
        <form onSubmit={handleFormSubmit}>
          <input
            className="standard-input"
            type="text"
            placeholder="Add a task."
            onChange={captureTask}
            value={task}
          />
          <button className="todo-btn" type="submit">
            I Got This!
          </button>
        </form>
      </div>
    )
}