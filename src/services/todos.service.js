import { httpService } from "./http.service";

const todosEndpoint = "todos/";
const completedTodosEndpoint = "completedTodos/";
const importantTodosEndpoint = "importantTodos/";
const inboxTodosEndpoint = "inboxTodos/";

export const todosService = {
    fetchAll: async () => {
        const { data } = await httpService.get(todosEndpoint + ".json");
        return data;
    },
    add: async (content) => {
        const { data } = await httpService.post(todosEndpoint + ".json", content);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(todosEndpoint + id + ".json");
        return data;
    },
    change: async (id, content) => {
        const { data } = await httpService.put(todosEndpoint + id + ".json", content);
        return data;
    }
}

export const completedTodosService = {
    fetchAll: async () => {
        const { data } = await httpService.get(completedTodosEndpoint + ".json");
        return data;
    },
    add: async (content) => {
        const { data } = await httpService.post(completedTodosEndpoint + ".json", content);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(completedTodosEndpoint + id + ".json");
        return data;
    },
    change: async (id, content) => {
        const { data } = await httpService.put(completedTodosEndpoint + id + ".json", content);
        return data;
    },
}

export const importantTodosService = {
    fetchAll: async () => {
        const { data } = await httpService.get(importantTodosEndpoint + ".json");
        return data;
    },
    add: async (content) => {
        const { data } = await httpService.post(importantTodosEndpoint + ".json", content);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(importantTodosEndpoint + id + ".json");
        return data;
    },
    change: async (id, content) => {
        const { data } = await httpService.put(importantTodosEndpoint + id + ".json", content);
        return data;
    },
}

export const inboxTodosService = {
    fetchAll: async () => {
        const { data } = await httpService.get(inboxTodosEndpoint + ".json");
        return data;
    },
    add: async (content) => {
        const { data } = await httpService.post(inboxTodosEndpoint + ".json", content);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(inboxTodosEndpoint + id + ".json");
        return data;
    },
    change: async (id, content) => {
        const { data } = await httpService.put(inboxTodosEndpoint + id + ".json", content);
        return data;
    },
}