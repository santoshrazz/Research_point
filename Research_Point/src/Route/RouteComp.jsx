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
import AllJobs from '../AllJobs/AllJobs'
function RouteComp() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/allJobs' element={<AllJobs />} />
                <Route exact path='/service' element={<Service />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<CallSection />} />
                <Route exact path='/admin/postjob' element={<PostJob />} />
                <Route exact path='/admin/dashboard' element={<DashBoard />} />
            </Routes>
            <FooterMain />
        </div>
    )
}

export default RouteComp
