import React from 'react';
import "./Boards.scss";

import BoardMyDay from "./boardMyDay";
import BoardImportant from "./boardImportant";
import BoardInbox from './boardInbox';

const Boards = ({
  todos, completedTodos, importantTodos, inboxTodos,
  isLoading, typeTodo, getTypeTodo, isShowMenu, removeTodoToImportant, addTodoToImportantFromForm, openModalWindow,
  addTodoToImportantFromMyday, addTodoToCompleted, addTodoToTodosFromForm, addTodoToInboxFromForm
}) => {
  return (
    <main>
      {
        typeTodo === "myday" ? (
          <BoardMyDay
            todos={todos}
            completedTodos={completedTodos}
            isLoading={isLoading}
            isShowMenu={isShowMenu}
            onAdd={addTodoToTodosFromForm}
            onAddToCompleted={addTodoToCompleted}
            onAddToImportant={addTodoToImportantFromMyday}
            onOpen={openModalWindow}
          />
        ) : typeTodo === "important" ? (
          <BoardImportant
            todos={importantTodos}
            isLoading={isLoading}
            isShowMenu={isShowMenu}
            getTypeTodo={getTypeTodo}
            onAdd={addTodoToImportantFromForm}
            onAddToImportant={removeTodoToImportant}
            onOpen={openModalWindow}
          />
        ) : <div className='mx-5'>Данная страница пока в процессе разработки!</div>
        // typeTodo === "inbox" && (
        //   <BoardInbox
        //     inboxTodos={inboxTodos}
        //     todos={todos}
        //     completedTodos={completedTodos}
        //     isLoading={isLoading}
        //     getTypeTodo={getTypeTodo}
        //     onAdd={addTodoToInboxFromForm}
        //     onAddToCompleted={addTodoToCompleted}
        //     onAddToImportant={addTodoToImportantFromMyday}
        //     onOpen={openModalWindow}
        //   />
        // )
      }
    </main>
  )
}

export default Boards