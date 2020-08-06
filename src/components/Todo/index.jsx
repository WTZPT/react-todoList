import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import './todoStyle.css'

const Todo = ({ onClick, text, completed, deleteClick }) => (
    <div className="fontStyle">
        <p  className="lineStyle" style={{ textDecoration: completed ? 'line-through' : 'none' } }>
            <span className="spanStyle" onClick={onClick}>
                {text}
            </span>   
            <DeleteOutlined className="deleteButtonStyle" onClick={deleteClick} />
        </p>       
        
    </div>

)

export default Todo;