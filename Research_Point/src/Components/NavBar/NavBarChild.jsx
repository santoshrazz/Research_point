import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../store/loginSlice';
// import { setLogin } from '../store/loginSlice';
const NavBarChild = () => {

    const login = useSelector((store) => store.login)
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;
    const logOut = async () => {
        try {
            console.log("On Logout Function");
            const result = await axios.get('/admin/logOut');
            if (result.status === 200) {
                dispatch(setLogin(false))
            }
        } catch (error) {
            console.log("Error at logOut", error);
        }
    }
    return (
        <header className="header_section" style={{ backgroundColor: "#7335b7" }}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="index.html">
                        <span>
                            Research Internet Point
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className={`nav-item ${pathname == "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className={`nav-item ${pathname == "/about" ? "active" : ""}`}>
                                <Link className="nav-link" to="/about"> About</Link>
                            </li>
                            <li className={`nav-item ${pathname == "/service" ? "active" : ""}`}>
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className={`nav-item ${pathname == "/contact" ? "active" : ""}`}>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className={`nav-item ${pathname == "/allJobs" ? "active" : ""}`}>
                                <Link className="nav-link" to="/allJobs">Active Job</Link>
                            </li>
                        </ul>
                        {/* Show LogOut button if user logged in or show logIn if user is not logged in */}
                        {login.loginState ? <div className="quote_btn-container">
                            <button className="btn btn-danger" onClick={logOut}>LogOut</button>
                            <Link to="/dashboard" className="quote_btn mx-4">
                                Dashboard
                            </Link>
                        </div> : <div className="quote_btn-container">
                            <Link to="/login" className="quote_btn">
                                Login
                            </Link>
                        </div>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBarChild
