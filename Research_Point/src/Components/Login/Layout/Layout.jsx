import React from 'react'
import Nav from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import FooterMain from '../Footer/FooterMain'

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <FooterMain />
        </>
    )
}

export default Layout
