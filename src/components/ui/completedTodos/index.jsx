import React, { useState } from 'react';
import "./CompletedTodos.scss";

import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";

import TodosList from '../../common/todos/todosList';

const CompletedTodos = ({ todos, onOpen, onAddToCompleted, onAddToImportant }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='completed_todos'>
      <h3 onClick={() => setOpen(!open)} className={`completed_title ${!open ? "no_active" : ""}`}>
        <span className='icon'>{open ? <LiaAngleDownSolid /> : <LiaAngleRightSolid />}</span>
        <span className='label'>Завершенные</span>
        <span className='quantity_todos'>{todos.length}</span>
      </h3>
      <div className={`todos ${open ? "show" : "hide"}`}>
        <TodosList todos={todos} onOpen={onOpen} onAddToCompleted={onAddToCompleted} onAddToImportant={onAddToImportant} />
      </div>
    </div>
  )
}

export default CompletedTodos