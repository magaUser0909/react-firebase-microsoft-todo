import React, { Fragment } from 'react';
import "./BoardMyDay.scss";

import { Loader } from '../../Loader';

import Title from '../../common/typografy';
import Form from '../../form';
import TodosList from '../../common/todos/todosList';
import Sort from '../../sort';
import CompletedTodos from '../../ui/completedTodos';

const BoardMyDay = ({ todos, completedTodos, isLoading, isShowMenu, onAdd, onAddToCompleted, onAddToImportant, onOpen }) => {
  return (
    <Fragment>
      <div className='d-flex justify-content-between'>
        <Title title="Мой день" type="myday" isShowMenu={isShowMenu} />
        <Sort />
      </div>
      <div className='mb-3'>
        <Form onAdd={onAdd} />
      </div>
      {
        isLoading
          ? <Loader />
          : (
            <div className='block_todos pb-3'>
              <div className='mb-3'>
                <TodosList todos={todos} onOpen={onOpen} onAddToCompleted={onAddToCompleted} onAddToImportant={onAddToImportant} />
              </div>
              {completedTodos.length !== 0 &&
                <CompletedTodos todos={completedTodos} onOpen={onOpen} onAddToCompleted={onAddToCompleted} />}
            </div>
          )
      }
    </Fragment>
  )
}

export default BoardMyDay