import TODO from '../Todo'
import React from 'react'
import { todoList } from '../../API/index'

class TodoList extends React.Component {

    componentWillMount() {
        todoList().then(response => {
            for (let todo of response.data) {
                this.props.addTodoAction(todo)
            }
        })
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <TODO key={todo.id}
                        {...todo}
                        onClick={() => this.props.toggleTodo(todo.id)}
                        deleteClick={() => this.props.deleteClick(todo.id)}
                    ></TODO>
                )
                }
            </ul>
        )
    }
}

export default TodoList