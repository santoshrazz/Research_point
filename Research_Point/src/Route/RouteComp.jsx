import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Login from '../Login/Login'
import FooterMain from '../Footer/FooterMain'
import Service from '../Services/Service'
import About from '../AboutComp/About'
import CallSection from '../CallSection/CallSection'
import DashBoard from '../DashBoard/DashBoard'
import PostJob from '../PostJob/PostJob'
function RouteComp() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/service' element={<Service />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<CallSection />} />
                <Route path='/admin/postjob' element={<PostJob />} />
                <Route path='/admin/Dashboard' element={<DashBoard />} />
            </Routes>
            <FooterMain />
        </div>
    )
}

export default RouteComp
