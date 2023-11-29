import axios from 'axios'
import React from 'react'

const View_Customers_Child = (props) => {

    const deleteItem = async () => {
        try {
            console.log("working");
            const url = `/customer/deleteCustomer${props.id}`
            console.log(url);
            const result = await axios.get(url);
            console.log(result);
        } catch (error) {
            console.log("Error in Delete Customer in View_Customer_Child_Component.jsx", error);
        }
    }
    return (
        <div className="col-lg-4">
            <div className="card card-margin">
                <div className="card-header no-border">
                    <h5 className="card-title">{props.fullName}</h5>
                </div>
                <div className="card-body pt-0">
                    <div className="widget-49">
                        <div className="widget-49-title-wrapper">

                            <div className="widget-49-meeting-info">
                                <span className="widget-49-pro-title"><a href={`mailto:${props.email}`} className='fs-5'>{props.email}</a></span>
                                <span className="widget-49-pro-title"><a href="" className='fs-5'>{props.Mob_Number}</a></span>
                            </div>
                        </div>
                        <ol className="widget-49-meeting-points">
                            <li className="widget-49-meeting-item"><span>{props.message}</span></li>
                        </ol>
                        <div className="d-flex">


                            <div className="widget-49-meeting-action">
                                <a href={`tel:${props.Mob_Number}`} className="btn btn-sm btn-flash-border-primary">Contact</a>
                            </div>
                            <div className="widget-49-meeting-action">
                                <button onClick={deleteItem} className="btn btn-sm btn-flash-border-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View_Customers_Child
