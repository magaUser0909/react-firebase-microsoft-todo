import React from 'react';
import "./Todo.scss";

import { FiCircle } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { PiStarDuotone } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
import { CiCircleRemove } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

const Todo = ({ todo, onOpen, onAddToCompleted, onAddToImportant, getTypeTodo }) => {
  return (
    <div className='todo'>
      <div className='description'>
        <button onClick={() => onAddToCompleted?.(todo)} className='icon circle'>
          {todo.isCompleted ? <FaCircleCheck /> : <FiCircle />}
        </button>

        <button className='btn_title'>
          <span className={`title ${todo.isCompleted ? "no_active" : ""}`}>{todo.title}</span>
          <span className='info_title'>
            Задачи
            {getTypeTodo?.(todo) === "myday" && (
              <span>
                <span className='icon'>
                  <IoSunnyOutline />
                </span>
                Мой день
              </span>
            )}
          </span>
        </button>
      </div>
      <div className='btns'>
        <button onClick={() => onAddToImportant(todo)} className='icon star'>
          {todo.isImportant ? <PiStarFill /> : <PiStarDuotone />}
        </button>
        <button onClick={() => onOpen(todo)} className='icon remove'><CiCircleRemove /></button>
      </div>
    </div >
  )
}

export default Todo