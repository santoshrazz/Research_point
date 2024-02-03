import React from 'react'
import Service_Card from './Service_Card'
import JobSearch from '../Images/job-searching.svg'
import TrainTicket from '../Images/high-speed-train-front.svg'
import mobileRecharge from '../Images/phone-ringing-1.svg'
import PcImage from '../Images/screen-curve.svg'
import { Link } from 'react-router-dom'
const Service = () => {
    return (
        <section className="service_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Our Services
                    </h2>
                    <p>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="row">
                    <Service_Card heading={"Latest Job"} image={JobSearch} />
                    <Service_Card heading={"Train Ticket"} image={TrainTicket} />
                    <Service_Card heading={"Mobile Recharge"} image={mobileRecharge} />
                    <Service_Card heading={"Software Installing"} image={PcImage} />
                </div>
                <div className="btn-box">
                    <Link to="/service">
                        View More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Service
