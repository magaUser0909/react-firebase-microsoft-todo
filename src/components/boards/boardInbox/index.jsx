import React, { Fragment } from 'react';
import "./BoardInbox.scss";

import { Loader } from '../../Loader';

import Title from '../../common/typografy';
import Sort from '../../sort';
import Form from '../../form';
import TodosList from '../../common/todos/todosList';
import CompletedTodos from '../../ui/completedTodos';

const BoardInbox = ({ todos, completedTodos, isLoading, onAdd, onAddToCompleted, onAddToImportant, onOpen }) => {
  return (
    <Fragment>
      <div className='d-flex justify-content-between'>
        <Title title="Мой день" type="myday" />
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

export default BoardInbox