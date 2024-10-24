import "./App.css";
import "./corner.css";
import { Header } from "./components/Header";
import { GithubIcon } from "./components/GithubIcon";
import { TaskItem } from "./components/TaskItem";
import { useState } from "react";
import { Modal } from "./components/Modal";
import {TaskList} from "./components/TaskList"
import { TaskProvider } from "./context/TaskContext";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function App() {
  
  const {captureTask} = useContext(TaskContext)

  const [task, setTask] = useState("");
  const [taskToEdit, setTaskToEdit] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (event) => {
    event.preventDefault();
    const taskId = tasks.length + 1;

    const newTask = {
      id: taskId,
      task: task,
      isEdited: false,
      done: false,
    };

    const newTasks = [...tasks, newTask];
    setTask("");
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const newTasks = [...tasks];
    const findTask = newTasks.find((t) => t.id === index);
    setTaskToEdit(findTask);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TaskProvider>
      <Header />

      <div id="form">
        <form onSubmit={addTask}>
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

      <GithubIcon />

      <div id="myUnOrdList">
        <ul className="todo-list">
          {tasks.map((val) => {
            return (
              <div className="todo" key={val.id}>
                <TaskItem
                  index={val.id}
                  deleteTask={deleteTask}
                  checkTask={checkTask}
                  editTask={editTask}
                  task={val}
                  isCheck={val.done}
                  isEdited={val.isEdited}
                >
                  {val.task}
                </TaskItem>
              </div>
            );
          })}
        </ul>
      </div>

      <Modal text={taskToEdit} isOpen={isModalOpen} onClose={closeModal} />
    </TaskProvider>
  );
}

export default App;
