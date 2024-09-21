function TaskList(props) {
    return (
      <ul>
        {props.tasks.length === 0 ? (
          <p className="NoTask">No Tasks</p>
        ) : (
          props.tasks.map((task, index) => {
            return(
              <li className="showTask" key={index}style={{textDecoration : task.completed? 'line-through':'none'}} >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => props.handleToggleComplete(index)}
                />
                {task.text}
                <button className="listButton" onClick={() => props.handleDeleteTasks(index)}>
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