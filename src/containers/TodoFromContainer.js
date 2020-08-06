import TodoForm from '../components/TodoForm'
import {
    connect
} from 'react-redux'
import {
    generateRefreshStoreTodosAction,
    generateUpdateTodosAction
} from '../actions/index'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    refreshStoreTodos: () => dispatch(generateRefreshStoreTodosAction()),
    updateTodos: todos => dispatch(generateUpdateTodosAction(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)