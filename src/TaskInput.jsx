import { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskInput(props) {
  const [newTask, setNewTask] = useState('');
  const {dispatch}= useContext(TaskContext);
  const handleAddTask = () => {
    if(newTask.trim()){
      dispatch({type: 'ADD_TASK', payload: newTask});
      setNewTask("");
    }

  };

    return (
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  }
  export default TaskInput;