import { useState, useEffect } from 'react';

import { completedTodosService } from '../services/todos.service';

import { toast } from "react-toastify";

const useCompletedTodos = (addTodo, removeTodoFromTodos) => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isBlocking, setBlocking] = useState(true);

  function errorCatcher(error) {
    const { message } = error;
    setError(message);
  }

  function audioAlerts() {
    const audio = new Audio();
    audio.src = './audio/notificationMusic.mp3';
    audio.autoplay = true;
  }

  async function transformId(service, id) {
    try {
      const content = await service.fetchAll();
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
      const content = await completedTodosService.fetchAll();

      if (content) {
        const data = Object.keys(content).map(key => content[key]);
        setCompletedTodos(data);
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function removeTodoFromCompleted(data) {
    try {
      const key = await transformId(completedTodosService, data.id);
      await completedTodosService.remove(key);
      await addTodo(data);
      setCompletedTodos(prev => prev.filter(todo => todo.id !== data.id));
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function addTodoToCompleted(data) {
    const todo = {
      ...data,
      isCompleted: !data.isCompleted
    }

    try {
      if (!completedTodos.includes(data)) {
        if (isBlocking) {
          setBlocking(false);
          await completedTodosService.add(todo);
          await removeTodoFromTodos(data.id);
          setCompletedTodos(prev => [...prev, todo]);
          audioAlerts();
          setBlocking(true);
        }
      } else {
        if (isBlocking) {
          setBlocking(false);
          await removeTodoFromCompleted(todo);
          setBlocking(true);
        }
      }
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


  return { completedTodos, setCompletedTodos, addTodoToCompleted };
}

export default useCompletedTodos