import React from 'react'
import jobImage from './Govt_job.png'
const AllJobsChild = (props) => {
    const formateDate = (dateString) => {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so adding 1
        const year = date.getFullYear();

        const formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;

        return formattedDate

    }
    return (
        <div className="card">
            <div className="card-img-body">
                <img className="card-img" src={jobImage} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h4 className="card-title  text-center mt-2">{props.title}</h4>
                <p className="card-text text-danger px-4 fs-5">{props.desc}</p>
                <div className='text-primary px-4'><h2>Start Date : <span>{formateDate(props.startDate)}</span></h2></div>
                <div className='text-primary px-4'><h2>Last Date : <span>{formateDate(props.lastDate)}</span></h2></div>
                <a href={props.officialLink} target='_blank' className="btn btn-primary text-center mx-4">Apply</a>
            </div>
        </div>
    )
}

export default AllJobsChild
