import React from 'react'

const View_Job_Card = () => {
    return (
        <div className="card m-4 " style={{ width: "18rem" }}>
            <h3 className="card-header">Card header</h3>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
            </div>
            <img src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Alt Text Should be there" />
            <div className="card-body">
                <p className="card-text text-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body ">
                <button className="btn btn-primary mx-4">View Job</button>
                <button className="btn btn-success">View Job</button>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}

export default View_Job_Card
