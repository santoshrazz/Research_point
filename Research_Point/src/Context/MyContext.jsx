import React, { createContext } from 'react'
import userContext from './UserContex'
const myContext = (props) => {
    const initLoginState = "Jai Shree Ram";
    return (
        <userContext.Provider value={initLoginState}>
            {props.children}
        </userContext.Provider>
    )
}

export default myContext
