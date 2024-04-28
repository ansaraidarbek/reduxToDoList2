import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo, toggleTodoStatus } from './todosSlice';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const isRegistered = useSelector(state => state.user.isRegistered);

  useEffect(() => {
    isRegistered && dispatch(fetchTodos());
  }, [dispatch]);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <div>
        {isRegistered ?
              <ul>
              {todos.elems.map(todo => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodoStatus(todo.id)}
                  />
                  <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.title}
                  </span>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
                </li>
              ))}
            </ul> :
             <>
            <p>Sign up, to see todo list</p>
            <Link to="/">
              <button>Sign up</button>
            </Link>
            </>
        }
    
    </div>
  );
}

export default TodoList;

