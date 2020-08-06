import {
    connect
} from 'react-redux'

import DoneTodoList from '../components/DoneToDoList'

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todoTextList.filter(t => t.completed)
    }
}
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DoneTodoList)