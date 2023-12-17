import { createContext, useContext, useEffect, useState } from "react";

import { completedTodosService, importantTodosService, todosService } from "../services/todos.service";

import { toast } from "react-toastify";

import useCompletedTodos from "./useCompletedTodos";
import useImportantTodos from "./useImportantTodos";
import useInboxTodos from "./useInboxTodos";

const TodosContext = createContext();

export const useTodos = () => {
  return useContext(TodosContext);
}

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isRemove, setRemove] = useState({ data: {}, isOpen: false });
  const [isBlocking, setBlocking] = useState(true);
  const [value, setValue] = useState("");

  const { completedTodos, setCompletedTodos, addTodoToCompleted } = useCompletedTodos(addTodoToTodosFromForm, removeTodoFromTodos);
  const { importantTodos, setImportantTodos, addTodoToImportantFromForm, removeTodoToImportant } = useImportantTodos(toggleImportant);
  const { inboxTodos, addTodoToInboxFromForm } = useInboxTodos();

  const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(value.trim().toLowerCase()));

  function handleChange(val) {
    setValue(val);
  }

  function errorCatcher(error) {
    const { message } = error;
    setError(message);
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
      const content = await todosService.fetchAll();

      if (content) {
        const data = Object.keys(content).map(key => content[key]);
        setTodos(data);
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function addTodoToTodosFromForm(data) {
    try {
      await todosService.add(data);
      setTodos(prev => [...prev, data]);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function removeTodoThroughModalWindow() {
    try {
      if (todos.includes(isRemove.data)) {
        const key = await transformId(todosService, isRemove.data.id);
        await todosService.remove(key);
        setTodos(prev => prev.filter(todo => todo.id !== isRemove.data.id));
      }
      else {
        const key = await transformId(completedTodosService, isRemove.data.id);
        await completedTodosService.remove(key);
        setCompletedTodos(prev => prev.filter(todo => todo.id !== isRemove.data.id));
      }
      setRemove({ data: {}, isOpen: false });
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function removeTodoFromTodos(id) {
    try {
      const key = await transformId(todosService, id);
      await todosService.remove(key);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function openModalWindow(data) {
    setRemove({ data: data, isOpen: true });
  }

  async function toggleImportant(data) {
    try {
      const key = await transformId(todosService, data.id);
      const content = await todosService.change(key, data);
      setTodos(prev => prev.map(todo => todo.id === data.id ? { ...todo, isImportant: !todo.isImportant } : todo));
      return content;
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function addTodoToImportantFromMyday(data) {
    const todo = {
      ...data,
      isImportant: true
    }

    try {
      if (isBlocking) {
        setBlocking(false);
        await toggleImportant(data);
        setBlocking(false);
      }

      const isValid = todos.some(todo => {
        if (todo.id === data.id) return todo.isImportant;
      });


      if (!isValid) {
        if (isBlocking) {
          setBlocking(false);
          await importantTodosService.add(data);
          setImportantTodos(prev => [...prev, todo]);
          setBlocking(true);
        }
      } else {
        if (isBlocking) {
          setBlocking(false);
          const key = await transformId(importantTodosService, data.id);
          await importantTodosService.remove(key);
          setImportantTodos(prev => prev.filter(todo => todo.id !== data.id));
          setBlocking(true);
        }
      }
    } catch (error) {
      errorCatcher(error);
    }
  }

  function getTypeTodo(data) {
    const isInTodos = todos.find(todo => JSON.stringify(todo) === JSON.stringify(data));
    const isInImportantTodos = importantTodos.find(todo => JSON.stringify(todo) === JSON.stringify(data));

    if (isInTodos) {
      return "myday";
    } else if (isInImportantTodos) {
      return "important";
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

  return (
    <TodosContext.Provider value={{
      todos: filteredTodos, completedTodos, isRemove, importantTodos, inboxTodos,
      setRemove, getTypeTodo, addTodoToTodosFromForm, addTodoToInboxFromForm, addTodoToCompleted,
      addTodoToImportantFromMyday, addTodoToImportantFromForm, handleChange,
      removeTodoThroughModalWindow, removeTodoToImportant,
      openModalWindow,
    }}>
      {children}
    </TodosContext.Provider >
  )
}