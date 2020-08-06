import TodoList from '../components/TodoList'
import {
    connect
} from 'react-redux'
import {
    generaterToggleTodoAction,
    generaterDeleteClickAction,
    generateAddMockToDoAction,
    generateUpdateTodosAction,
    generateRefreshStoreTodosAction
} from '../actions'

const mapStateToProps = (state) => {
    return {todos: state.todoReducer.todoTextList}
}

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(generaterToggleTodoAction(id)),
    refreshStoreTodos: () => dispatch(generateRefreshStoreTodosAction()),
    addTodoAction: todo => dispatch(generateAddMockToDoAction(todo)),
    updateTodos: todos => dispatch(generateUpdateTodosAction(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);