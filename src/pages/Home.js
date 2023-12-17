import React, { Fragment, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useTodos } from '../hooks/useTodos';

import { AiOutlineMenu } from "react-icons/ai";

import Header from '../components/header';
import Menu from '../components/menu';
import ModalRemoveWindow from '../components/ui/modalRemoveWindow';
import Boards from '../components/boards';

const Home = () => {
  const {
    todos, importantTodos, inboxTodos, isLoading, isRemove, getTypeTodo, setRemove, removeTodoThroughModalWindow, addTodoToImportantFromMyday,
    addTodoToTodosFromForm, addTodoToInboxFromForm, openModalWindow, completedTodos, addTodoToCompleted, handleChange,
    addTodoToImportantFromForm, removeTodoToImportant
  } = useTodos();
  const { typeTodo } = useParams();
  const [isShowMenu, setShowMenu] = useState(false);

  const hideMenu = () => setShowMenu(false);

  return (
    <Fragment>
      {isRemove.isOpen && <ModalRemoveWindow setRemove={setRemove} onRemove={removeTodoThroughModalWindow} />}
      <Header onChange={handleChange} />

      <div className='d-flex'>
        <button onClick={() => setShowMenu(!isShowMenu)} className="btn btn_menu"><AiOutlineMenu /></button>

        <Menu
          todosQuantity={todos.length}
          importantTodosQuantity={importantTodos.length}
          typeTodo={typeTodo}
          isShowMenu={isShowMenu}
          onHide={hideMenu}
        />

        <Boards
          {...{
            todos, completedTodos, importantTodos, inboxTodos,
            isLoading, typeTodo, isShowMenu, getTypeTodo, removeTodoToImportant, addTodoToImportantFromForm,
            openModalWindow, addTodoToCompleted, addTodoToTodosFromForm, addTodoToInboxFromForm, addTodoToImportantFromMyday
          }}
        />
      </div>
    </Fragment>
  )
}

export default Home