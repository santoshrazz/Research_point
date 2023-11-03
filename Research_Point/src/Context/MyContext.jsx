import React, { createContext, useState } from 'react'
import userContext from './UserContex'
const myContext = (props) => {
    const [loginState, setLoginState] = useState(false)
    const normalValue = "Jai Shree Ram";
    const checkIfLoginOrNot = () => {
        if (!loginState) {
            Navigate("/login");
            return;
        }
        else {
            return null;
        }
    }
    return (
        <userContext.Provider value={{ loginState, setLoginState, checkIfLoginOrNot }}>
            {props.children}
        </userContext.Provider>
    )
}

export default myContext
