import TODO from '../Todo'
import React from 'react'
import { todoList } from '../../API/index'
import 'antd/dist/antd.css'
import './ToDoListStyle.css'
import { List, Typography, Divider } from 'antd';
class TodoList extends React.Component {

    componentWillMount() {
        todoList().then(response => {
            this.props.updateTodos(response.data.data);
        })
    }

    render() {
        return (
            <div>
                <Divider orientation="left"> <span className="fontStyle"> TODO List </span></Divider>
                <List
                    size="small"
                    bordered
                    dataSource={this.props.todos}
                    renderItem={todo =>
                        <List.Item>
                            <TODO
                                {...todo}
                                onClick={() => this.props.toggleTodo(todo.id)}
                                updateTodos={(todos) => this.props.updateTodos(todos)}
                                refreshStoreTodos={() => this.props.refreshStoreTodos()} >
                            </TODO>
                        </List.Item>}
                ></List>
            </div>


        )
    }
}

export default TodoList