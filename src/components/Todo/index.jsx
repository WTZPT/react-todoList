import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import './todoStyle.css'
import { deleteTodo, todoList } from '../../API'
class Todo extends React.Component {

    deleteTodo = () => {
        deleteTodo(this.props.id).then(response => {
            console.log("entry deleTodo function",response)
            if (response.data.code === "200") {
                alert("删除成功!")
                this.props.updateTodos(response.data.data)
            } else {
                alert(response.data.msg)
            }
        })
    }

    render() {
        return (
            <div className="fontStyle">
                <p className="lineStyle" style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
                    <span className="spanStyle" onClick={this.props.onClick}>
                        {this.props.text}
                    </span>
                    <DeleteOutlined className="deleteButtonStyle" onClick={this.deleteTodo} />
                </p>

            </div>
        )
    }
}

export default Todo;