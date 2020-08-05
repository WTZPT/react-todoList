import React from 'react'

const Todo = ({ onClick, text, completed, deleteClick }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
        <button onClick={deleteClick}>删除</button>
    </li>
)

export default Todo;