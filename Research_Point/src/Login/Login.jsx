import React, { useState } from 'react'
import "./css/main.css"
import "./css/util.css"
import "./vendor/animate.css"
import Image from './images/img-01.png'
const Login = () => {

    //--------------------->    Login User Function to Login a User <------------------------
    const loginUser = (e) => {
        e.preventDefault();
        // Some Basic Validations 
        if (!(inputValue.email == "") && !(inputValue.password === "")) {
            console.log(inputValue)
        }
        else {
            console.log("All Fields are require");
        }
    }


    //--------------------->    Input Change Logic <------------------------
    const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={Image} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Admin Login
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" onChange={onInputChange} name="email" value={inputValue.email} placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" value={inputValue.password} placeholder="Password" onChange={onInputChange} />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={loginUser}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
