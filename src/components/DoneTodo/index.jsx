import React from 'react'

const DoneTodo = ({ text, completed  }) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

export default DoneTodo;