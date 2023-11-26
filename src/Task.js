export const Task = (props) => {
    return <div className='listDiv'>
          <p>{props.taskName}</p>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
          </div>
}