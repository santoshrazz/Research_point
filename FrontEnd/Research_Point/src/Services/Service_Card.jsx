import React from 'react'
function Service_Card({ heading, image }) {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="box">
                <div className="img-box">
                    <img src={image} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {heading}
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <a href="">
                        <span>
                            Read More
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Service_Card
