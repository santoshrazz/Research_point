import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/loginSlice'
// import "./Global.css"
const Global = ({ children }) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.login)
    const { status, login } = data
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            {
                status ? children : <h1>Loading....</h1>
            }

        </>
    )
}

export default Global
