import { createContext, useState } from "react";
import tasksArray from "../data/tasksData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksArray);

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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        checkTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
