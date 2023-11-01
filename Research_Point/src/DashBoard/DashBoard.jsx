import React, { useContext, useEffect } from 'react'
import './Card.css'
import DashBoardCard from './DashBoardCard'
import userContext from '../Context/UserContex'
import { useNavigate } from 'react-router-dom'
const DashBoard = () => {
    const Navigate = useNavigate();
    const { loginState } = useContext(userContext);
    useEffect(() => {
        const checkIfLoginOrNot = () => {
            if (!loginState) {
                Navigate("/login");
                return;
            }
            else {
                return null;
            }
        }
        checkIfLoginOrNot()
    }, [])
    return (
        <div className='bg-primary-subtle' style={{ minHeight: "88vh" }}>
            <h2 className='text-center text-info py-2 d-flex justify-content-center'> Welcome Uttam Kumar </h2>
            <div className="container d-flex justify-content-center flex-wrap">
                <DashBoardCard title="Post Job" />
                <DashBoardCard title="View Job" />
                <DashBoardCard title="View Emails" />
                <DashBoardCard title="View Requests" />
            </div>
        </div>
    )
}

export default DashBoard
