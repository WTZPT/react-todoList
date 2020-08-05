import React from 'react'
import { Link } from 'react-router-dom'
import './menu-style.css'

const Menu = () => (
    <div className='sty2'>
        <Link to='/'>TODO page</Link>
        {" |"}
        <Link to='/finish'>DONE page</Link>
    </div>
)

export default Menu

