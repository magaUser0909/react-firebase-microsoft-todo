import { useState, useEffect } from 'react';

import { importantTodosService } from "../services/todos.service";

import { toast } from "react-toastify";

const useImportantTodos = (toggleImportant) => {
  const [importantTodos, setImportantTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isBlocking, setBlocking] = useState(true);

  function errorCatcher(error) {
    const { message } = error;
    setError(message);
  }

  async function transformId(id) {
    try {
      const content = await importantTodosService.fetchAll();
      for (const key in content) {
        if (content[key].id === id) {
          return key;
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getTodos() {
    try {
      const content = await importantTodosService.fetchAll();

      if (content) {
        const data = Object.keys(content).map(key => content[key]);
        setImportantTodos(data);
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function addTodoToImportantFromForm(data) {
    const todo = {
      ...data,
      isImportant: true
    }

    try {
      await importantTodosService.add(todo);
      setImportantTodos(prev => [...prev, todo]);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function removeTodoToImportant(data) {
    try {
      const key = await transformId(data.id);
      if (isBlocking) {
        setBlocking(false);
        await toggleImportant(data);
        setBlocking(true);
      }
      await importantTodosService.remove(key);
      setImportantTodos(prev => prev.filter(todo => todo.id !== data.id));
    } catch (error) {
      errorCatcher(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return { importantTodos, setImportantTodos, addTodoToImportantFromForm, removeTodoToImportant };
}

export default useImportantTodos