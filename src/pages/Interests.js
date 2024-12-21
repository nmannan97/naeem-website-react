import React from "react";

import './Interests.css'

import Navbar from "../Navbar";
import Footer from "../Footer";

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
            <ul id="interests_mct">
                <li className="interests_mctPic">
                    <div className="interests_polaroid">
                        <img className="interests_MCT" src={Award} />
                        <p className="interests_generalFont2"> me and my mini cat town award</p>
                    </div>
                </li>
                <li className="interests_mctPic">
                    <div className="interests_polaroid">
                        <img className="interests_MCT" src={Cat} />
                        <p className="interests_generalFont2"> me and my mini cat friend</p>
                    </div>
                </li>
            </ul>
            <p className="interests_generalFont"> 
                These pictures are from my time at Mini cat town, a non-profit cat lounge where people 
                can play and volunteer with kittens in San Jose!
            </p>
            <p className="interests_generalFont"> Board games I like ~</p>
            <ul id="interests_boardgames">
                <li className="interests_boardgamesItem">
                    <div className="interests_polaroid">
                        <img className="interests_boardgame" src={Concordia} />
                        <p className="interests_generalFont2"> Concordia</p>
                    </div>
                </li>
                <li className="interests_boardgamesItem">
                    <div className="interests_polaroid">
                        <img className="interests_boardgame" src={Coup} />
                        <p className="interests_generalFont2"> Coup</p>
                    </div>
                </li>
                <li className="interests_boardgamesItem">
                    <div className="interests_polaroid">
                        <img className="interests_boardgame" src={LordsOfVegas} />
                        <p className="interests_generalFont2"> Lords of Vegas</p>
                    </div>
                </li>
            </ul>
            <p className="interests_generalFont"> 
                Here are some of my favorite boardgames to play with friends. Concordia, Coup, and Lords of Vegas. 
                They are all very strategical and one day I hope to own Concordia in my collection!
            </p>

        </div>
        <Footer/>
        </>
    )
}