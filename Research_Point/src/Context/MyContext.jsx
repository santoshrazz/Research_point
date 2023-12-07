import React, { createContext, useState, useEffect } from 'react'
import userContext from './UserContex'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const myContext = (props) => {
    // const [loginState, setLoginState] = useState(null)
    const [loginState, setLoginState] = useState(false)

    const Navigate = useNavigate();

    const checkInitLogin = async () => {
        try {
            console.log("Working on something");
            const url = `/admin/initLogin`;
            const result = await axios.get(url);
            if (result.status === 200) {
                setLoginState(true)
                console.log(loginState);
            }
        } catch (error) {
            console.log(error);
        }

    }
    checkInitLogin();

    const checkIfLoginOrNot = async () => {
        await checkInitLogin()
        if (loginState) {
            console.log("Login state True");
            return null;
        }
        else {
            Navigate("/login");
            return;
        }
    }
    return (
        <userContext.Provider value={{ loginState, setLoginState, checkIfLoginOrNot }}>
            {props.children}
        </userContext.Provider>
    )
}

export default myContext
