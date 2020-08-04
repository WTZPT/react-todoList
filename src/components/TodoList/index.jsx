import TODO from '../Todo'
import React from 'react'

class TodoList extends React.Component {
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