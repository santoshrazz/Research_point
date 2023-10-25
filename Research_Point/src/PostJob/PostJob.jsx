import React from 'react'

const PostJob = () => {
    return (
        <div className='' style={{ minHeight: "100vh", background: "rgb(238,174,202)" }}>

            <div className='container' >
                <h2 className='text-center'>Post Job</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="form-label mt-4">Job Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Job Title" autocomplete="off" />
                </div>
                <div className="form-group">
                    <label for="exampleTextarea" className="form-label mt-4">Job Description</label>
                    <textarea className="form-control" id="exampleTextarea" rows="15"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-danger text-center">Post Job</button>
                </div>
            </div>
        </div>
    )
}

export default PostJob
