import { createContext, useState } from "react";
import tasksArray from "../data/tasksData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksArray);
  const [taskToEdit, setTaskToEdit] = useState({item: {}, edit: false});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    const taskId = tasks.length + 1;

    const newTask = {
      id: taskId,
      task: task,
      done: false,
    };

    const newTasks = [...tasks, newTask];
    
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const newTasks = [...tasks];
    const findTask = newTasks.find((t) => t.id === index);
    setTaskToEdit({
      item: findTask, 
      edit: true
    });
    openModal();
  };

  const updateTask = (id, task) => {
    const newTasks = [...tasks];
    const findTask = newTasks.find((t) => t.id === id);

    findTask.task = task
    setTasks(newTasks)
    setTaskToEdit({
      item: {},
      edit: false
    })

  }

  const deleteTask = (index) => {
    const filterTasks = tasks.filter((t) => t.id !== index);
    setTasks(filterTasks);
  };

  const checkTask = (index) => {
    const newTasks = [...tasks];
    const findTask = newTasks.find((t) => t.id === index);
    findTask.done = !findTask.done;

    setTasks(newTasks);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        taskToEdit,
        setTaskToEdit,
        isModalOpen,
        setIsModalOpen,
        addTask,
        editTask,
        updateTask,
        deleteTask,
        checkTask,
        openModal,
        closeModal
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
