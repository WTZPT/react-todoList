import React from 'react'
import TodoFromContainer from '../../containers/TodoFromContainer'
import TodoListContainer from '../../containers/TodoListContainer'

class DoingPage extends React.Component {
    
    render() {
        return(
            <div>
                <TodoListContainer></TodoListContainer> 
                <TodoFromContainer></TodoFromContainer> 
            </div>
         
        )
    }
    
}

export default DoingPage