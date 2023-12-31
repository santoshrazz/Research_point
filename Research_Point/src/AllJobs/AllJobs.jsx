import React, { useState, useEffect } from 'react'
import './card.css'
import AllJobsChild from './AllJobsChild'
import axios from 'axios'
const AllJobs = () => {

    const [jobs, setJobs] = useState([])
    const fetchJob = async () => {
        try {
            const url = `/job/allJobs`
            const result = await axios.get(url);
            console.log(result);
            setJobs(result.data.allJobs)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchJob()
    }, [])

    return (
        <div className='bg-secondary'>
            <div className="container ">
                <div className="card-group vgr-cards py-4">
                    {
                        jobs.map((ele) => {
                            return <AllJobsChild key={ele._id} title={ele.title} lastDate={ele.lastDate} desc={ele.desc} startDate={ele.startDate} officialLink={ele.officialLink} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllJobs
