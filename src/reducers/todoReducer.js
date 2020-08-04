import {
    ADD_TODO
} from './constants'

const defaultState = {
    todoTextList: []
}

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newState = JSON.parse(JSON.stringify(state))
            newState.todoTextList.push(action.value)
            return newState;
        default:
            return state;
    }
}

export default todoReducer