import React, { createContext, useState } from 'react'
import userContext from './UserContex'
const myContext = (props) => {
    const [loginState, setLoginState] = useState(false)
    const normalValue = "Jai Shree Ram";
    return (
        <userContext.Provider value={{ loginState, setLoginState }}>
            {props.children}
        </userContext.Provider>
    )
}

export default myContext
