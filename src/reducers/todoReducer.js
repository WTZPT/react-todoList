import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    ADD_MOCK_TODO,
    UPDATE_STORE_TODOS,
    REFRESH_STORE_TODOS
} from './constants'
import {
    patchTodoStatus,
    addTodo,
    deleteTodo,
    refreshStoreTodos
} from '../API/index'
const defaultState = {
    todoTextList: []
}

const todoReducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_MOCK_TODO:
            let mockTodo = {
                id: action.id,
                text: action.todo.content,
                completed: action.todo.status
            }
            newState.todoTextList.push(mockTodo)
            return newState
        case ADD_TODO:
            let todo = {
                id: action.id,
                text: action.value,
                completed: false
            }
            addTodo({
                text: action.value
            }).then(response => {
                console.log(response.data)
            })
            newState.todoTextList.push(todo)
            return newState
        case TOGGLE_TODO:
            patchTodoStatus(action.id).then(response => {
                console.log(response)
            })
            newState.todoTextList = newState.todoTextList.map(todo => (todo.id === action.id) ? {
                ...todo,
                completed: !todo.completed
            } : todo)
            return newState
        case DELETE_TODO:
            deleteTodo(action.id).then(response => {
                console.log(response.data)
            })
            newState.todoTextList = newState.todoTextList.filter(todo => todo.id !== action.id);
            return newState
        case UPDATE_STORE_TODOS:
            console.log("entry update syore todos ",action)
            newState.todoTextList = action.todos;
            return newState;
        case REFRESH_STORE_TODOS:
            console.log("entry REFRESH_STORE_TODOS")
            let todoTextList;
            refreshStoreTodos().then(response => {
                console.log("secone", response)
                console.log(response)
                todoTextList = response.data.data;
            })
            //Object.assign(state,todoTextList)

            console.log("========", todoTextList)
            return {
                todoTextList
            };
        default:
            return state
    }
}

export default todoReducer