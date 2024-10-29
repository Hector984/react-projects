import "./App.css";
import "./corner.css";
import { Header } from "./components/Header";
import { GithubIcon } from "./components/GithubIcon";
import { TasksList } from "./components/TasksList";
import { Modal } from "./components/Modal";
import { TaskProvider } from "./context/TaskContext";
import { TaskForm } from "./components/TaskForm";

function App() {
  
  return (
    <TaskProvider>
      <Header />

      <TaskForm/>

      <GithubIcon />

      <TasksList />

      <Modal/>

    </TaskProvider>
  );
}

export default App;
