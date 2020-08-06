import {
    MethodType,
    request
} from './promise'

const basicUrl = "http://localhost:8004/todos";

// GET : /todos
export const todoList = async () => {
    return await request(basicUrl, MethodType.GET)
}

//PUT： /todos/{id}
export const updateTodo = async (id, body) => {
    let requestBody = JSON.stringify(body)
    return await request(basicUrl + "/" + id, MethodType.PUT, requestBody)
}

//PATCH: /todos/{id}
export const patchTodoStatus = async (id) => {
    return await request(basicUrl + "/" + id, MethodType.PATCH)
}

//POST： /todos
export const addTodo = async (body) => {
    let requestBody = JSON.stringify(body)
    return await request(basicUrl, MethodType.POST, requestBody)
}

//delete： /todos/id
export const deleteTodo = async (id) => {
    return await request(basicUrl + "/" + id, MethodType.DELETE)
}