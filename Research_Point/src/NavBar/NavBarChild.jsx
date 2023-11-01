import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../Context/UserContex';
const NavBarChild = () => {
    const contextValue = useContext(userContext);
    // console.log(contextValue);
    const { loginState } = useContext(userContext);
    console.log(loginState);

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
                        </ul>
                        {/* Show LogOut button if user logged in or show logIn if user is not logged in */}
                        {!loginState ? <div className="quote_btn-container">
                            <Link to="/login" className="quote_btn">
                                Login
                            </Link>
                        </div> :
                            <div className="quote_btn-container">
                                <Link to="/login" className="quote_btn">
                                    Logout
                                </Link>
                            </div>}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBarChild
