import React, { useContext, useEffect } from 'react'
import './Card.css'
import { useNavigate, Link } from 'react-router-dom'
import GmailImage from './Gmail_Image.png'
import ContactImage from './Contact.png'
import PostJobImage from './Post_Job.jpg'
import { useSelector } from 'react-redux'
const DashBoard = () => {

    //useNavigate Object 
    const Navigate = useNavigate();
    const loginState = useSelector((store) => store.login)
    // Check if user is logged in or not if not than redirect ot login page

    useEffect(() => {
        console.log(loginState);
        if (!loginState) {
            Navigate("/login")
        }
    }, [])
    // ----------------->   Logic For Post job Button   <-----------------------
    return (
        <div className='bg-primary-subtle' style={{ minHeight: "88vh" }}>
            <section className="wrapper">
                <div className="container-fostrap">
                    <div>
                        <img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" className="fostrap-logo" />
                        <h1 className="heading">
                            Welcome Uttam Kumar
                        </h1>
                    </div>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <Link className="img-card link" to="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                            <img src={GmailImage} />
                                        </Link>
                                        <div className="card-content">
                                            <p className="">
                                                Get Your All Subscribed Email From Here
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <Link to="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn link btn-link btn-block">
                                                Get Emails
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <Link className="img-card link" to="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                            <img src={ContactImage} />
                                        </Link>
                                        <div className="card-content">

                                            <p className="">
                                                Get Your All Customers Contact From Here
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <Link to="/viewCustomer" className="btn btn-link btn-block">
                                                Get Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <Link className="img-card" to="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                            <img src={PostJobImage} />
                                        </Link>
                                        <div className="card-content">
                                            <p className="">
                                                Post Your Desire Job From Here
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <Link className='btn btn-link btn-block' to="/postjob">
                                                Post Job
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default DashBoard
