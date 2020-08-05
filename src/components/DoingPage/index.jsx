import React from 'react'
import TodoFromContainer from '../../containers/TodoFromContainer'
import TodoListContainer from '../../containers/TodoListContainer'
import Menu from '../menu'

class DoingPage extends React.Component {

    render() {
        return (
            <div>
                <Menu></Menu>
                <br />
                <TodoListContainer></TodoListContainer>
                <TodoFromContainer></TodoFromContainer>
            </div>

        )
    }

}

export default DoingPage