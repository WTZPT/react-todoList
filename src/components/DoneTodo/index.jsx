import React from 'react'
import './DonToDoStyle.css'

const DoneTodo = ({ text, completed }) => (
    <div className="fontStyle">
        <p className="lineStyle"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <span className="spanStyle">
                {text}
            </span>
        </p>
    </div>
   
)

export default DoneTodo;