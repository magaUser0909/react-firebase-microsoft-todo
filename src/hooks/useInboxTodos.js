import { useState, useEffect } from 'react';

import { inboxTodosService } from "../services/todos.service";

import { toast } from "react-toastify";

const useInboxTodos = () => {
    const [inboxTodos, setInboxTodos] = useState([]);
    const [error, setError] = useState(null);
    const [isBlocking, setBlocking] = useState(true);

    function errorCatcher(error) {
        const { message } = error;
        setError(message);
    }

    async function transformId(id) {
        try {
            const content = await inboxTodosService.fetchAll();
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
            const content = await inboxTodosService.fetchAll();

            if (content) {
                const data = Object.keys(content).map(key => content[key]);
                setInboxTodos(data);
            }
        } catch (error) {
            errorCatcher(error);
        }
    }

    async function addTodoToInboxFromForm(data) {
        const todo = {
            ...data,
            isImportant: true
        }

        try {
            await inboxTodosService.add(todo);
            setInboxTodos(prev => [...prev, todo]);
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

    return { inboxTodos, setInboxTodos, addTodoToInboxFromForm }
}

export default useInboxTodos;