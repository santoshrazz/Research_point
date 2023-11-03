import React from 'react'

const PostJob = () => {
    return (
        <>
            <div className="container mx-auto my-4">
                <div className="row g-5">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Post Job</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-12">
                                    <label for="firstName" className="form-label">Job Title</label>
                                    <input type="text" className="form-control" id="jobTitle" placeholder="Enter Job Title" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid Job is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="username" className="form-label">Job Description</label>
                                    <div className="input-group has-validation">
                                        <textarea name="" id="" cols="" rows="" className='form-control'></textarea>
                                        <div className="invalid-feedback">
                                            Job Description Requires.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="startDate" className="form-label">Start Date <span
                                        className="text-body-secondary">(Optional)</span></label>
                                    <input type="date" className="form-control" id="startDate" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid Date
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="lastDate" className="form-label">Last Date</label>
                                    <input type="date" className="form-control" id="lastDate" required="" />
                                    <div className="invalid-feedback">
                                        Please enter Valid Date.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label for="noOfPost" className="form-label">Total Post</label>
                                    <input type='number' className="form-control" id="noOfPost" required="" />
                                    <div className="invalid-feedback">
                                        Please enter Valid Number.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label for="officialLink" className="form-label"> Official Website Link </label>
                                    <input type='text' className="form-control" id="officialLink" required="" />
                                    <div className="invalid-feedback">
                                        Please enter Valid Number.
                                    </div>
                                </div>

                            </div>

                            <hr className="my-4" />

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Post Job</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostJob
