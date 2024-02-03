import React, { useEffect } from 'react'
import Slider from '../NavBar/Slider'
import About from '../AboutComp/About'
import CallSection from '../CallSection/CallSection'
import Service from '../Services/Service'
import Feedback from '../Feedback/Feedback'
const Home = () => {
    return (
        <div>
            <Slider />
            <Service />
            <About />
            <CallSection />
            <Feedback />
        </div>
    )
}

export default Home
