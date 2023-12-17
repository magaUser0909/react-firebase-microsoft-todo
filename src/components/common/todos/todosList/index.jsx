import React from 'react';
import "./TodosList.scss";

import Todo from "../todo";

const TodosList = ({ todos, onOpen, onAddToCompleted, onAddToImportant, getTypeTodo }) => {
  return (
    <div className='todos_list'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onOpen={onOpen} onAddToCompleted={onAddToCompleted} onAddToImportant={onAddToImportant} getTypeTodo={getTypeTodo} />
      ))}
    </div>
  )
}

export default TodosList