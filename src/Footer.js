import React from "react";
import { Link } from 'react-router-dom';

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
                    <Link id="footer_font" to="/contacts"><p>Contacts</p></Link>
                </div>
            </div>
        </>
    )
}
/*           
*/