import {ADD_TODO} from '../reducers/constants'

const generaterAddToDoAction = (todoText) => ({
    type: ADD_TODO,
    value:todoText
})

export {generaterAddToDoAction}