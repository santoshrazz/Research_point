// import profileImage from '../Images/uttam.jpg'
import GovtJob from '../Images/Govt_Job2.jpg'
import KisanImage from '../Images/Kisan_Registration.png'
import BannerImage from '../Images/Csc.jpeg'
import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
    return (
        <section className="slider_section " style={{ backgroundColor: "#7335b7", borderRadius: "0 0 350px 0" }}>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={GovtJob} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Government Job
                                        </h1>
                                        <p>
                                            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                        </p>
                                        <div className="btn-box">
                                            <Link to="/contact" className="btn1">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={KisanImage} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Kisan Registration
                                        </h1>
                                        <p>
                                            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                        </p>
                                        <div className="btn-box">
                                            <Link to="/contact" className="btn1">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={BannerImage} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Common Service Center (CSC)
                                        </h1>
                                        <p>
                                            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                        </p>
                                        <div className="btn-box">
                                            <Link to="/contact" className="btn1">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#customCarousel1" data-slide-to="1"></li>
                    <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
            </div>

        </section>
    )
}

export default Slider
