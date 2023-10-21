import React from 'react'

const CallSection = () => {
    return (
        <section className="contact_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-4 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <h2>
                                    Request A Call back
                                </h2>
                            </div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Full Name " />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone number" />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" />
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
