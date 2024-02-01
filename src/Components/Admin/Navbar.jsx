import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="main">
            <Sidebar />
            <Topbar />
            <Outlet/>
        </div>
    )
}

export default Navbar