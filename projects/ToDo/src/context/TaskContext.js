import { createContext, useState } from "react";
import tasksArray from "./../data/tasksData"

const TaskContext = createContext()

export const TaskProvider = ({children}) => {

    const [task, setTask] = useState(tasksArray)

    return <TaskContext.Provider
    value={{
        task
    }}
    >
        {children}
    </TaskContext.Provider>
}

export default TaskContext