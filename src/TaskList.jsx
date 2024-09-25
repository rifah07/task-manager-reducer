import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList(props) {
  const {state, dispatch} = useContext(TaskContext);
  const {tasks} = state;
    return (
      <ul>
        {tasks.length === 0 ? (
          <p className="NoTask">No Tasks</p>
        ) : (
          tasks.map((task, index) => {
            return(
              <li className="showTask" key={index} style={{textDecoration : task.completed? 'line-through':'none'}} >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch({type: 'TOGGLE_TASK', payload: index})}
                />
                {task.text}
                <button className="listButton" onClick={() => dispatch({type: 'REMOVE_TASK', payload: index})}>
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    );
  }
  export default TaskList;