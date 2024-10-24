import { TaskItem } from "./components/TaskItem";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  {
    tasks.map((val) => {
      return (
        <div id="myUnOrdList">
          <ul className="todo-list">
            {tasks.map((val) => {
              return (
                <div className="todo" key={val.id}>
                  <TaskItem
                    index={val.id}
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
      );
    });
  }
};
