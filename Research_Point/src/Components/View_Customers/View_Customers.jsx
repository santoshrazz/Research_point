import React, { useEffect, useState } from 'react'
import './View_card.css'
import View_Customers_Child from './View_Customers_Child'
import axios from 'axios'

const View_Customers = () => {
    const [result, setResult] = useState([])
    const fetchCustomers = async () => {
        try {
            const url = `/customer/getDetails`
            const result = await axios.get(url);
            console.log(result);
            setResult(result.data.User);
        } catch (error) {
            console.log("Error in View_Customer.jsx", error);
        }
    }
    useEffect(() => {
        fetchCustomers()
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        result.map((ele) => {
                            return <View_Customers_Child fullName={ele.fullName} key={ele._id} email={ele.email} Mob_Number={ele.Mob_Number} message={ele.message} id={ele._id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default View_Customers
