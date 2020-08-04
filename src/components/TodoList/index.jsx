import TODO from '../Todo'
import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <TODO text={todo}></TODO>
                )}
            </ul>
        )
    }
}

export default TodoList