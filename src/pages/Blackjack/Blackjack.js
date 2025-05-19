import React from "react";
import Navbar from "../../Navbar";

import { useState, useEffect } from "react";

import "./Blackjack.css"

export default function Blackjack(){

    const [hand, setHand] = useState([])

    function cardDispens() {
        
    }

    return(
        <>
            <Navbar />
            <div id="blackjack">
                <div id="blackjack_tableBot">
                    <div id="blackjack_tableTop">

                    </div>
                </div>
            </div>
        </>
    )
}