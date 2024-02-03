import React from 'react'

const About = () => {
    return (
        <section className="about_section layout_padding">
            <div className="container  ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    About Us
                                </h2>
                            </div>
                            <p>
                                Welcome to Research Online Centre, your one-stop destination for convenience and efficiency. At our virtual cafe, we blend technology with comfort , offering a wide array of services tailored to your needs. From seamless online ticket bookings to hassle-free kisan registration, we simplify your tasks.
                            </p>
                            <a href="">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="img-box">
                            <img src="images/about-img.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
