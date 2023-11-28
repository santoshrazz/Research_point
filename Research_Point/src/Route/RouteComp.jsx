import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import Login from '../Login/Login'
import AllJobs from '../AllJobs/AllJobs'
import Service from '../Services/Service'
import About from '../AboutComp/About'
import CallSection from '../CallSection/CallSection'
import PostJob from '../PostJob/PostJob'
import DashBoard from '../DashBoard/DashBoard'
import FooterMain from '../Footer/FooterMain'
import View_Customers from '../View_Customers/View_Customers'
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
                <Route exact path='/customer/viewCustomer' element={<View_Customers />} />
            </Routes>
            <FooterMain />
        </div>
    )
}

export default RouteComp
