import TODO from '../DoneTodo'
import React from 'react'

class DoneTodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <TODO key={todo.id}
                        {...todo}
                    ></TODO>
                )}
            </ul>
        )
    }
}

export default DoneTodoList