import TodoForm from '../components/TodoForm'
import { connect } from 'react-redux' 
import { generaterAddToDoAction } from '../actions/index'
import todoReducer from '../reducers/todoReducer'
const mapStateToProps = (state) => ({
    todoTextList : state.todoTextList
})

const mapDispatchToProps = (dispatch) => ({
    addTodo : (todoText) => {dispatch(generaterAddToDoAction(todoText))}
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)