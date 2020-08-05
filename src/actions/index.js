import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    ADD_MOCK_TODO
} from '../reducers/constants'

let uuid = 0
const generaterAddToDoAction = (todoText) => ({
    type: ADD_TODO,
    id: uuid++,
    value: todoText
})

const generaterToggleTodoAction = id => ({
    type: TOGGLE_TODO,
    id
})

const generaterDeleteClickAction = id => ({
    type: DELETE_TODO,
    id
})

const TodoListFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const generateAddMockToDoAction = todo => ({
    id: uuid++,
    type: ADD_MOCK_TODO,
    todo
})

export {
    generaterAddToDoAction,
    generateAddMockToDoAction,
    generaterToggleTodoAction,
    generaterDeleteClickAction,
    TodoListFilter
}