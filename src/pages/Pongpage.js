import React from "react";

import "./Pongpage.css"

import Pong from "./Pong/Pong";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Pongpage(){
    
    return(
        <>
            <Navbar />
            <div id="pongpage">
                <Pong />
            </div>
            <Footer />
        </>
    )
}