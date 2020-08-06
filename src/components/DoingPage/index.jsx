import React from 'react'
import TodoFromContainer from '../../containers/TodoFromContainer'
import TodoListContainer from '../../containers/TodoListContainer'
import Menu from '../menu';

const DoingPage = () => (
    <div>
        <Menu></Menu>
        <br />
        <TodoListContainer></TodoListContainer>
        <TodoFromContainer></TodoFromContainer>
    </div>
)

export default DoingPage