import "./App.css";
import "./corner.css";
import { Header } from "./components/Header";
import { GithubIcon } from "./components/GithubIcon";
import { TaskItem } from "./components/TaskItem";
import { useState } from "react";
import {Modal} from "./components/Modal"

function App() {
  const tasksArray = [
    {
      id: 1,
      task: "Aprender React",
      isEdited: false,
      done: false,
    },
    {
      id: 2,
      task: "Finalizar este proyecto",
      isEdited: false,
      done: false,
    },
    {
      id: 3,
      task: "Conseguir otro trabajo",
      isEdited: false,
      done: false,
    },
  ];

  const [tasks, setTasks] = useState(tasksArray);
  const [task, setTask] = useState("");
  const [taskToEdit, setTaskToEdit] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const deleteTask = (index) => {
    const filterTasks = tasks.filter(t => t.id !== index)
    setTasks(filterTasks)
  }

  const checkTask = (index) => {
    const newTasks = [...tasks]
    const findTask = newTasks.find(t => t.id === index)
    findTask.done = !findTask.done

    setTasks(newTasks)
  }

  const captureTask = (event) => {
    const newTask = event.target.value
    setTask(newTask)
  }

  const addTask = (event) => {
    event.preventDefault()
    const taskId = tasks.length + 1

    const newTask = {
      id: taskId,
      task: task,
      isEdited: false,
      done: false
    }

    const newTasks = [...tasks, newTask]
    setTask("")
    setTasks(newTasks)
  }

  const editTask = (index) => {
    const newTasks = [...tasks]
    const findTask = newTasks.find(t => t.id === index)
    setTaskToEdit(findTask)
    openModal()
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header/>

      <div id="form">
        <form onSubmit={addTask}>
          <input className="standard-input" type="text" 
          placeholder="Add a task." 
          onChange={captureTask}
          value={task}
          />
          <button className="todo-btn" type="submit">
            I Got This!
          </button>
        </form>
      </div>

      <GithubIcon/>

      <div id="myUnOrdList">
        <ul className="todo-list">
          {tasks.map((val) => {
            return (
              <div className="todo" key={val.id} >
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

      <Modal text={taskToEdit} isOpen={isModalOpen} onClose={closeModal}/>
    </>
  );
}

export default App;
