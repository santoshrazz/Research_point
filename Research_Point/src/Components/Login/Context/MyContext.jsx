import React, { createContext, useState, useEffect } from 'react'
import userContext from './UserContex'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const myContext = (props) => {
    // const [loginState, setLoginState] = useState(null)
    const [loginState, setLoginState] = useState(() => {
        const cookie = document.cookie;
        console.log(cookie);
        const verify = cookie.slice(0, 5);
        if (verify === "uttam") {
            console.log("at if");
            return true
        }
        else {
            console.log("at else");
            return false
        }
    })


    // const checkInitLogin = async () => {

    // }

    // useEffect(() => {
    //     checkInitLogin();
    // }, [])

    return (
        <userContext.Provider value={{ loginState, setLoginState }}>
            {props.children}
        </userContext.Provider>
    )
}

export default myContext
