import React from "react"

import "./Contacts.css"

import Navbar from "../Navbar"
import Footer from "../Footer"

import githubcat from "../assets/pictures/Contacts/github-mark-white.svg"
import inlogo from "../assets/pictures/Contacts/In-Blue-72.png"

export default function Contacts(){

    return(
        <>
            <Navbar />
            <div id="contacts">
                <div className="contacts_bubble">
                    <img className="contacts_logos" src={inlogo}/>
                    <p className="contacts_generalFont" id="contacts_linkedin">
                        Press me to go to Naeem's Linkein: <br/>
                        <a id="contacts_linkedinLink" href='https://www.linkedin.com/in/naeem-mannan-073924126/'>Linkedin profile, press here</a>
                    </p>
                </div>
                <div className="contacts_bubble">
                    <p className="contacts_generalFont">
                        Email:
                        <br/>
                        nmannan97@gmail.com
                    </p>
                </div>
                <div className="contacts_bubble">
                    <img className="contacts_logos" src={githubcat}/>
                    <p className="contacts_generalFont" id="contacts_github">
                        Press me to go to Naeem's GitHub page: <br/>
                        <a id="contacts_linkedinLink" href='https://github.com/nmannan97'>GitHub profile, press here</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
