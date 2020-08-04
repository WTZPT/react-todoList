import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO
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

export {
    generaterAddToDoAction,
    generaterToggleTodoAction,
    generaterDeleteClickAction
}