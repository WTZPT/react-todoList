import TodoList from '../components/TodoList'
import {
    connect
} from 'react-redux'
import {
    generaterToggleTodoAction,
    generaterDeleteClickAction,
    generateAddMockToDoAction
} from '../actions'

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todoTextList
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(generaterToggleTodoAction(id)),
    deleteClick: id => dispatch(generaterDeleteClickAction(id)),
    addTodoAction: todo => dispatch(generateAddMockToDoAction(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);