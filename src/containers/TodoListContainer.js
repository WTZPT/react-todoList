import TodoList from '../components/TodoList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todoTextList 
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps,null)(TodoList);