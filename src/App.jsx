import "./App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { TaskProvider } from "./TaskContext";
function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
