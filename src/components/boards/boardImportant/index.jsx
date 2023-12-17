import React, { Fragment } from 'react';
import "./BoardImportant.scss";

import { Loader } from '../../Loader';

import Title from '../../common/typografy';
import Sort from '../../sort';
import Form from '../../form';
import TodosList from '../../common/todos/todosList';

const BoardImportant = ({ todos, isLoading, getTypeTodo, isShowMenu, onAdd, onAddToCompleted, onAddToImportant, onOpen, }) => {
  return (
    <Fragment>
      <div className='board_important d-flex justify-content-between'>
        <Title title="Важно" color="blue" type="important" isShowMenu={isShowMenu} />
        <Sort color="blue" />
      </div>
      <div className='mb-3'>
        <Form onAdd={onAdd} />
      </div>
      {
        isLoading
          ? <Loader />
          : (
            <div className='block_todos pb-3'>
              <TodosList todos={todos} onOpen={onOpen} onAddToCompleted={onAddToCompleted} onAddToImportant={onAddToImportant} getTypeTodo={getTypeTodo} />
            </div>
          )
      }
    </Fragment>
  )
}

export default BoardImportant