import TODO from '../DoneTodo'
import React from 'react'
import 'antd/dist/antd.css'
import './DoneToDoListStyle.css'
import { List, Typography, Divider } from 'antd';

class DoneTodoList extends React.Component {
    render() {
        return (
            <div>
                <Divider orientation="left"> <span className="fontStyle"> DONE TODO List</span></Divider>
                <List
                    size="small"
                    bordered
                    dataSource={this.props.todos}
                    renderItem={todo =>
                        <List.Item>
                            <TODO
                                {...todo}
                                onClick={() => this.props.toggleTodo(todo.id)}
                                deleteClick={() => this.props.deleteClick(todo.id)} >
                            </TODO>
                        </List.Item>}
                ></List>
            </div>
        )
    }
}

export default DoneTodoList