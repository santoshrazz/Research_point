import React, { useContext, useEffect } from 'react'
import './Card.css'
// import userContext from '../../Context/UserContex'
import userContext from '../Context/UserContex'
import { useNavigate, Link } from 'react-router-dom'
import GmailImage from './Gmail_Image.png'
import ContactImage from './Contact.png'
import PostJobImage from './Post_Job.jpg'
const DashBoard = () => {

    //useNavigate Object 
    const Navigate = useNavigate();
    // Getting loginState using useContext
    const { checkIfLoginOrNot } = useContext(userContext);

    // Check if user is logged in or not if not than redirect ot login page
    useEffect(() => {
        checkIfLoginOrNot()
    }, [])

    // ----------------->   Logic For Post job Button   <-----------------------
    return (
        <div className='bg-primary-subtle' style={{ minHeight: "88vh" }}>
            <section class="wrapper">
                <div class="container-fostrap">
                    <div>
                        <img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" class="fostrap-logo" />
                        <h1 class="heading">
                            Welcome Uttam Kumar
                        </h1>
                    </div>
                    <div class="content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card">
                                        <Link class="img-card link" to="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                            <img src={GmailImage} />
                                        </Link>
                                        <div class="card-content">
                                            <p class="">
                                                Get Your All Subscribed Email From Here
                                            </p>
                                        </div>
                                        <div class="card-read-more">
                                            <Link to="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn link btn-link btn-block">
                                                Get Emails
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card">
                                        <Link class="img-card link" to="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                            <img src={ContactImage} />
                                        </Link>
                                        <div class="card-content">

                                            <p class="">
                                                Get Your All Customers Contact From Here
                                            </p>
                                        </div>
                                        <div class="card-read-more">
                                            <Link to="/customer/viewCustomer" class="btn btn-link btn-block">
                                                Get Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card">
                                        <Link class="img-card" to="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                            <img src={PostJobImage} />
                                        </Link>
                                        <div class="card-content">
                                            <p class="">
                                                Post Your Desire Job From Here
                                            </p>
                                        </div>
                                        <div class="card-read-more">
                                            <Link className='btn btn-link btn-block' to="/admin/postjob">
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
