import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../Context/UserContex';
import axios from 'axios';
const NavBarChild = () => {

    const { loginState, setLoginState } = useContext(userContext);

    const logOut = async () => {
        try {
            console.log("On Logout Function");
            const result = await axios.get('/admin/logOut');
            if (result.status === 200) {
                setLoginState(false)
            }
        } catch (error) {

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
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {
                                loginState && <li className="nav-item">
                                    <Link className="nav-link" to="/admin/postjob">Post Job</Link>
                                </li>
                            }
                        </ul>
                        {/* Show LogOut button if user logged in or show logIn if user is not logged in */}
                        {!loginState ? <div className="quote_btn-container">
                            <Link to="/login" className="quote_btn" onClick={logOut}>
                                Login
                            </Link>
                        </div> :
                            <div className="quote_btn-container">
                                <button className="btn btn-danger" onClick={logOut}>LogOut</button>
                                <Link to="/admin/dashboard" className="quote_btn mx-4">
                                    Dashboard
                                </Link>
                            </div>}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBarChild
