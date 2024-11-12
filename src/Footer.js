import React from "react";

import "./Footer.css"

import insignia from "./assets/pictures/Insignia3(large).jpg"

export default function Footer(){

    return(
        <>
            <div id="footer">
                <div id="footer_logo">
                    <img id="footer_photo" src={insignia} />
                </div>
                <div id="footer_linkedin">
                    <a  id='footer_font' href='https://www.linkedin.com/in/naeem-mannan-073924126/'><p>Linkedin</p></a>
                </div>
            </div>
        </>
    )
}