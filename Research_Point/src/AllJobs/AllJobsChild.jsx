import React from 'react'

const AllJobsChild = (props) => {
    return (
        <div class="card">
            <div class="card-img-body">
                <img class="card-img" src="https://picsum.photos/500/230" alt="Card image cap" />
            </div>
            <div class="card-body">
                <h4 class="card-title text-white text-center">{props.title}</h4>
                <p class="card-text text-danger">{props.desc}</p>
                <p className='text-danger'> Registration Starting Date - {props.startDate}</p>
                <a href="#" class="btn btn-primary">Primary</a>
            </div>
        </div>
    )
}

export default AllJobsChild
