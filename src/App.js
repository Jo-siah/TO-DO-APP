import { useState } from 'react';
import './Todo.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const todoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const todoObj = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTodo,
        completed: false,
      };
      setTodoList([...todoList, todoObj]);
      setNewTodo(''); // Clear the input field
    }
  };

  const clearList = () => {
    setTodoList([]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='addTask'>
          <h1>Add Task</h1>
         <form onSubmit={addTodo}>
         <input
            type='text'
            id='input'
            placeholder='Enter task here...'
            value={newTodo}
            onChange={todoInput}
          />
         </form>
          <div className='btns'>
            <button onClick={addTodo}>+</button>
            <button onClick={clearList}>Clear</button>
          </div>
        </div>
        <section className='dashed'></section>
        <div className='Todos'>
          {todoList.map((todo) => (
            <div className='listDiv' key={todo.id}>
              <p>{todo.taskName}</p>
              <button onClick={() => deleteTask(todo.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
