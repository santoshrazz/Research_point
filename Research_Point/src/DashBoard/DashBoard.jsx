import React, { useContext, useEffect } from 'react'
import './Card.css'
import userContext from '../Context/UserContex'
import { useNavigate } from 'react-router-dom'
import GmailImage from './Gmail_Image.png'
import ContactImage from './Contact.png'
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
    const postJobMethod = () => {
        Navigate('/admin/postjob');
    }
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
                                        <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                            <img src={GmailImage} />
                                        </a>
                                        <div class="card-content">
                                            <p class="">
                                                Tutorial to make a carousel bootstrap by adding more wonderful effect fadein ...
                                            </p>
                                        </div>
                                        <div class="card-read-more">
                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card">
                                        <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                            <img src={ContactImage} />
                                        </a>
                                        <div class="card-content">

                                            <p class="">
                                                Material Design is a visual programming language made by Google. Language programming...
                                            </p>
                                        </div>
                                        <div class="card-read-more">
                                            <a href="https://codepen.io/wisnust10/full/ZWERZK/" class="btn btn-link btn-block">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card">
                                        <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                            <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                                        </a>
                                        <div class="card-content">
                                            <h4 class="card-title">
                                                <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">5  Button Hover Animation Effects
                                                </a>
                                            </h4>
                                            <p class="">
                                                tutorials button hover animation, although very much a hover button is very beauti...
                                            </p>
                                        </div>
                                        <div class="card-read-more">
                                            <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" class="btn btn-link btn-block">
                                                Read More
                                            </a>
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
