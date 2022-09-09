import React from "react";

import './Interests.css'

import Navbar from "../Navbar";

import Award from '../assets/pictures/Philanthropy/MiniCatTown/Award.jpg'
import Cat from '../assets/pictures/Philanthropy/MiniCatTown/MeAndCat.jpg'

export default function About(){

    return(
        <>
        <Navbar />
        <div id="interests">
            <p className="interests_generalFont">Welcome to my interests page!</p>
            <ul>
                <li>
                    <div>
                        <img src={Award} />
                        <p > me and my mini cat town award</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={Cat} />
                        <p > me and my mini cat friend</p>
                    </div>
                </li>
            </ul>
            <p className="interests_generalFont"> 
                These pictures are from my time at Mini cat town, a non-profit cat lounge where people 
                can play and volunteer with kittens in San Jose
            </p>
        </div>
        </>
    )
}