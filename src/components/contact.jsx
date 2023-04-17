import React, { useState } from "react";
import './style/contact.css'
import Navbar from "./navbar";



const Contact = () => {
    const [see, setSee] = useState(false)

    return (
        <div> <Navbar />
            {see ? <h1 className="send-message">Your message was sended!!</h1> : <div className="contact-container">

                <div className="contact"><h3>CONTACT US</h3></div>
                <p className="contactUs">We recommend that you contact us by email. Our operators, unfortunately, in periods with increased order flow, lose efficiency and the delivery time is extended due to phone calls with requests for information already existing in our Email and SMS information flow.</p>
                <br />
                <></>
                <br />
                <></>
                <br />
                <></>
                <br />
                <div className="company"><h3>COMPANY IDENTIFICATION DATA</h3></div>
                <p className="address">SC DIGITAL MARKET SRL</p>
                <p className="cui">CUI: CUI 44132799</p>
                <p className="region">Reg. Com. : J40/7472/2022</p>
                <p className="register">Registered Office: Brasov, Str. Carpatilor, Cutitul de Argint 68</p>
                <br />
                <div className="phone"><h3>PHONE</h3></div>
                <p className="mobile">Mobile: +40 728 823 241 – Hours: 11:00 – 17:00</p>
                <h6 className="able">To save time and to be able to process as many orders as possible, we recommend that you call us only if you did not find the answer to your questions in the Faq's section above.</h6>
                <br />
                <div className="mail"><h3>Email:</h3></div>
                <p className="mail-id">sales@Rasheed.ro</p>

                <label className="name">Name (required)</label>
                <input type="text" placeholder="name / phone number" />
                <label className="email">Email (required)</label>
                <input type="text" placeholder="email@home.com" />
                <label className="subject">Subject</label>
                <input type="text" placeholder="text" />
                <label className="message">Your message</label>
                <span className="message" data-name="your-message">
                    <textarea cols="40" rows="10" className="textarea" name="your-message" ></textarea>
                </span>

                <button className="submit" type="submit" onClick={() => {
                    setSee(true)
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 2000)
                }}>Send</button>


            </div>}
        </div >
    )
}

export default Contact;

