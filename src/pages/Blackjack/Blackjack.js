import React from "react";

import Navbar from "../../Navbar";

import "./BlackJack.css"

export default function Blackjack() {

    return(
        <>
            <Navbar />
            <div id="blackjack">
                <p id="blackjack_welcome">Welcome to my blackjack game!</p>
                <div id = "blackjack_playarea">
                    <div id = "blackjack_playareaSub">
 
                    </div>
                </div>
            </div>
        </>
    )
}