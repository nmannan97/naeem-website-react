import React from "react";

import './Interests.css'

import Navbar from "../Navbar";

import Award from '../assets/pictures/interests/MiniCatTown/Award.jpg'
import Cat from '../assets/pictures/interests/MiniCatTown/MeAndCat.jpg'
import Concordia from '../assets/pictures/interests/BoardGames/Concordia.jpg'
import Coup from '../assets/pictures/interests/BoardGames/Coup.jpg'
import LordsOfVegas from '../assets/pictures/interests/BoardGames/Lords_Of_Vegas_Board_Game.jpg'

export default function About(){

    return(
        <>
        <Navbar />
        <div id="interests">
            <p className="interests_generalFont">Welcome to my interests page!</p>
            <p className="interests_generalFont"> Mini Cat Town ~</p>
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
                can play and volunteer with kittens in San Jose!
            </p>
            <p className="interests_generalFont"> Board games I like ~</p>
            <ul>
                <li>
                    <div>
                        <img src={Concordia} />
                        <p > Concordia</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={Coup} />
                        <p > Coup</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={LordsOfVegas} />
                        <p > Lords of Vegas</p>
                    </div>
                </li>
            </ul>
            <p className="interests_generalFont"> 
                Here are some of my favorite boardgames to play with friends. Concordia, Coup, and Lords of Vegas. 
                They are all very strategical and one day I hope to own Concordia in my collection!
            </p>

        </div>
        </>
    )
}