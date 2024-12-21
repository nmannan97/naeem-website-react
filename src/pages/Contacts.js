import React from "react"

import "./Contacts.css"

import Navbar from "../Navbar"
import Footer from "../Footer"

export default function Contacts(){

    return(
        <>
            <Navbar />
            <div id="contacts">
                <div className="contacts_bubble">
                    <p id="contacts_linkedin">
                        Press me to go to Naeem's Linkein: <br/>
                        <a id="contacts_linkedinLink" href='https://www.linkedin.com/in/naeem-mannan-073924126/'>Linkedin profile, press here</a>
                    </p>
                </div>
                <div className="contacts_bubble">
                    <p id="contacts_linkedin">
                        Email:
                        <br/>
                        nmannan97@gmail.com
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
