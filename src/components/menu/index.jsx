import React from 'react';
import "./Menu.scss";

import { IoSunnyOutline } from "react-icons/io5";
import { CiStar, CiCalendarDate, CiUser } from "react-icons/ci";
import { CgHome } from "react-icons/cg";

import { Link } from 'react-router-dom';

const Menu = ({ todosQuantity, importantTodosQuantity, typeTodo, isShowMenu, onHide }) => {
  return (
    <div className={`menu ${isShowMenu ? "show" : "hide"}`}>
      <aside className={`phone`}>
        <nav>
          <ul>
            <Link to="/myday" onClick={onHide} className={typeTodo === "myday" ? "active" : ""}>
              <li>
                <div>
                  <div className='icon'><IoSunnyOutline /></div>
                  Мой день
                </div>
                <span></span>
                <div className='number_tasks'>{todosQuantity}</div>
              </li>
            </Link>
            <Link to="/important" onClick={onHide} className={typeTodo === "important" ? "active" : ""}>
              <li>
                <div>
                  <div className='icon'><CiStar /></div>
                  Важно
                </div>
                <span></span>
                <div className='number_tasks'>{importantTodosQuantity}</div>
              </li>
            </Link>
            <Link to="/planned" onClick={onHide} className={typeTodo === "planned" ? "active" : ""}>
              <li>
                <div>
                  <div className='icon'><CiCalendarDate /></div>
                  Запланировано
                </div>
                <span></span>
                <div className='number_tasks'>0</div>
              </li>
            </Link>
            <Link to="/assigned_to_me" onClick={onHide} className={typeTodo === "assigned_to_me" ? "active" : ""}>
              <li>
                <div>
                  <div className='icon'><CiUser /></div>
                  Назначен мне
                </div>
                <span></span>
                <div className='number_tasks'>0</div>
              </li>
            </Link>
            <Link to="/inbox" onClick={onHide} className={typeTodo === "inbox" ? "active" : ""}>
              <li>
                <div>
                  <div className='icon'><CgHome /></div>
                  Задачи
                </div>
                <span></span>
                <div className='number_tasks'>0</div>
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Menu