import React from 'react'

const DashBoardCard = ({ title }) => {
    return (
        <div className="card mx-4 my-2">
            <div className="boxshadow"></div>
            <div className="main">
                <div className="top"></div>
                <div className="left side"></div>
                <div className="right side"></div>
                <div className="title">{title}</div>
                <div className="button-container">
                    {/* <button className="button btn btn-primary">Get Job</button> */}
                    <button className="btn button btn-primary">{title}</button>
                </div>
            </div>
        </div>
    )
}

export default DashBoardCard
