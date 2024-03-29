import axios from 'axios';
import React, { useState } from 'react'

const PostJob = () => {

    const [Alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    // -----------> Function to Add Job into Data Base   <------------------
    const addJobToDB = async (e) => {
        try {
            e.preventDefault();
            const url = `/job/postJob`
            // Sending request to DB
            const result = await axios.post(url, inputValue)
            if (result.status === 200) {
                // Setting alert and alertMessage
                setAlert(true);
                setAlertMessage("Job Added SuccessFully");
                // Setting input Value blank
                setInputValue({
                    title: "",
                    desc: "",
                    startDate: "",
                    lastDate: "",
                    officialLink: "",
                    noOfPost: ""
                })

                // Setting alert and alertMessage to blank after 2 Second
                setTimeout(() => {
                    setAlert(false);
                    setAlertMessage("");
                }, 3000);
            }
            else {
                setAlert(true)
                setAlertMessage("Error While Posting Job")
            }
        } catch (error) {
            console.log(error.response.data.message);
            setAlert(true)
            setAlertMessage(error.response.data.message)
        }


    }
    //------------------------> Logic for change Input Field  <---------------------------
    const [inputValue, setInputValue] = useState({
        title: "",
        desc: "",
        startDate: "",
        lastDate: "",
        noOfPost: "",
        officialLink: ""
    })

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })

    }

    return (
        <>
            <div className="container mx-auto my-4">
                {Alert &&
                    <div className="alert alert-dismissible alert-primary">

                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>

                        <strong>{alertMessage}</strong>
                    </div>}
                <div className="row g-5 flex justify-content-center align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Post Job</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-12">
                                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                    <input onChange={handleChangeValue} type="text" className="form-control" id="jobTitle" placeholder="Enter Job Title" name='title' value={inputValue.title} required="" />
                                    <div className="invalid-feedback">
                                        Valid Job is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Job Description</label>
                                    <div className="input-group has-validation">
                                        <textarea name="desc" value={inputValue.desc} onChange={handleChangeValue} className='form-control'></textarea>
                                        <div className="invalid-feedback">
                                            Job Description Requires.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="startDate" className="form-label">Start Date <span
                                        className="text-body-secondary">(Optional)</span></label>
                                    <input onChange={handleChangeValue} name='startDate' type="date" className="form-control" id="startDate" value={inputValue.startDate} placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid Date
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="lastDate" className="form-label">Last Date</label>
                                    <input onChange={handleChangeValue} type="date" className="form-control" id="lastDate" name='lastDate' required="" value={inputValue.lastDate} />
                                    <div className="invalid-feedback">
                                        Please enter Valid Date.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="noOfPost" className="form-label">Total Post</label>
                                    <input onChange={handleChangeValue} type='number' className="form-control" name='noOfPost' id="noOfPost" value={inputValue.noOfPost} required="" />
                                    <div className="invalid-feedback">
                                        Please enter Valid Number.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="officialLink" className="form-label"> Official Website Link </label>
                                    <input onChange={handleChangeValue} type='text' className="form-control" name='officialLink' id="officialLink" value={inputValue.officialLink} required="" />
                                    <div className="invalid-feedback">
                                        Please enter Valid Number.
                                    </div>
                                </div>

                            </div>

                            <hr className="my-4" />

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={addJobToDB}>Post Job</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PostJob
