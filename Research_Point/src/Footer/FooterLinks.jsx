import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks = () => {
    return (
        <section className="info_section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 ">
                        <div className="info_detail">
                            <h4>
                                Research Online Point
                            </h4>
                            <p>
                                An exclusive store for your all needs with more than 100 happy customers every day with a great service since 10 years
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mx-auto">
                        <div className="info_link_box">
                            <h4>
                                Links
                            </h4>
                            <div className="info_links">
                                <Link className="" to="/">
                                    Home
                                </Link>
                                <Link className="" to="/about">
                                    About
                                </Link>
                                <Link className="" to="/service">
                                    Services
                                </Link>
                                <Link className="" to="/contact">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <h4>
                            Subscribe
                        </h4>
                        <form action="#">
                            <input type="text" placeholder="Enter email" />
                            <button type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-0 ml-auto">
                        <div className="info_contact">
                            <h4>
                                Address
                            </h4>
                            <div className="contact_link_box">
                                <Link to="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Location
                                    </span>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call +01 1234567890
                                    </span>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="info_social">
                            <Link to="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterLinks
