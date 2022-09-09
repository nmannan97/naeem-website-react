import React from "react";

import './About.css'

import Navbar from "../Navbar";

import Me0 from '../assets/pictures/Untitled.jpeg'
import Me1 from '../assets/pictures/GradPic3.jpg'
import SJ from '../assets/pictures/SanJose.png'

import GF from '../assets/pictures/Companies/GF.png'
import WD from '../assets/pictures/Companies/WD.png'
import Google from '../assets/pictures/Companies/Google.png'
import Meta from '../assets/pictures/Companies/Meta.png'

export default function About(){

    return(
        <>
            <Navbar />
            <div id="about">
                <header className="about_generalFont" id="about_welcome">
                    <p>Hello, and welcome to my home page!</p>
                    Here's a little about me... 
                </header>
                <img id="about_me0" src={Me0} />
                <p id="about_me" className="about_generalFont">
                    I was born and raised in San Jose bay area. There I went to Elementry, Middle, and High school there. 
                    From there I went to San Jose State University and graduated in Electrical Engineering in 4 years. 
                    As pictured below is me graduating from San Jose State.
                </p>
                <div className="about_container" >
                    <ul>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img id="about_grad" src={Me1}/>
                                <p id="about_polaroid1" >Ready for the workforce!</p>
                            </div>
                            <div className="about_polaroid">
                                <img src={SJ}/>
                                <p>The city I grew up in</p>
                            </div>
                        </li>
                        <li className="about_row">
                            
                        </li>
                    </ul>
                </div>

                <p className="about_generalFont"> I then went to work in places such as Global Foundries, Western Digital, Tezerakt/Google, and now Quest Global/Meta</p>
                <div className="about_container" >
                    <ul>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img src={GF}/>
                                <p >Globalfoundries</p>
                            </div>
                        </li>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img src={WD}/>
                                <p>Western Digital</p>
                            </div>
                        </li>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img src={Google}/>
                                <p>Tezerakt/ Google</p>
                            </div>
                        </li>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img src={Meta}/>
                                <p>Quest Global/ Meta</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>  
        </>
    )
}