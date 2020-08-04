import {
    ADD_TODO
} from './constants'

const defaultState = {
    todoTextList: []
}

const todoReducer = (state = defaultState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_TODO:
            let todoTextList = state.todoTextList;
            todoTextList.push(action.value) 
            return Object.assign({},state,todoTextList);
        default:
            return state;
    }
}

export default todoReducer