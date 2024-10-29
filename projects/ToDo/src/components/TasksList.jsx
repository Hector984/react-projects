import { TaskItem } from "./TaskItem";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export const TasksList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {tasks.map((t) => {
          return (
            <div className="todo" key={t.id}>
              <TaskItem index={t.id} task={t}>
                {t.task}
              </TaskItem>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
