import TodoForm from '../components/TodoForm'
import { connect } from 'react-redux' 
import { generaterAddToDoAction } from '../actions/index'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    addTodo : (todoText) => {dispatch(generaterAddToDoAction(todoText))}
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)