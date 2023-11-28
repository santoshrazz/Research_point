import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = (message) => toast(message);
const CallSection = () => {

    // --------------->  Handle input change  <----------------------------
    const [input, setInput] = useState({ fullName: "", email: "", Mob_Number: "", message: "" })
    const changeInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    // 
    const saveCustomerDetails = async (e) => {
        try {
            e.preventDefault();
            const url = `customer/saveDetails`
            const result = await axios.post(url, input);
            if (result.data.success) {
                notify("Message Send SuccessFully");
            }
            else {
                notify("Error While Send Message");
            }
        } catch (error) {
            console.log("Error at CallSection Component", error);
            notify(error.response.data.message);
        }

    }
    return (
        <section className="contact_section layout_padding">
            <div className="container-fluid">
                <ToastContainer />
                <div className="row">
                    <div className="col-md-5 col-lg-4 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <h2>
                                    Request A Call back
                                </h2>
                            </div>
                            <form action="" onSubmit={saveCustomerDetails}>
                                <div>
                                    <input type="text" onChange={changeInput} placeholder="Full Name " name='fullName' value={input.fullName} />
                                </div>
                                <div>
                                    <input type="email" onChange={changeInput} placeholder="Email" name='email' value={input.email} />
                                </div>
                                <div>
                                    <input type="text" onChange={changeInput} placeholder="Phone number" name='Mob_Number' value={input.Mob_Number} />
                                </div>
                                <div>
                                    <input type="text" onChange={changeInput} className="message-box" placeholder="Message" name='message' value={input.message} />
                                </div>
                                <div className="d-flex ">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 px-0">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28895.41766615476!2d87.16223020000001!3d25.138151699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f043c0b8905ab9%3A0x38b5eb7acd379545!2sWard%20No%2013%2C%20Mahespur%20Ghanshyam%20Chak%2C%20Bihar%20813205!5e0!3m2!1sen!2sin!4v1697552355837!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallSection
