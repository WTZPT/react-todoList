import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import{generaterToggleTodoAction,generaterDeleteClickAction} from '../actions'

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todoTextList 
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(generaterToggleTodoAction(id)),
    deleteClick: id => dispatch(generaterDeleteClickAction(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);