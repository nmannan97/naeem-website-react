import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

import './About.css'

import Navbar from "../Navbar";

import Me0 from '../assets/pictures/Untitled.jpg'
import Me1 from '../assets/pictures/GradPic3.jpg'
import SJ from '../assets/pictures/SanJose.png'

import GF from '../assets/pictures/Companies/GF.png'
import WD from '../assets/pictures/Companies/WD.png'
import Google from '../assets/pictures/Companies/Google.png'
import Meta from '../assets/pictures/Companies/Meta.png'
import Kinekt from '../assets/pictures/Companies/kinectai_logo.jpg'

export default function About(){

    const Images = [ [GF, "Global Foundries", "QA engineer"],
        [WD, "Western Digital", "Test engineer"],
        [Google, "Google/ Tezerakt", "Peak power validation engineer"],
        [Kinekt, "Kinekt AI", "UI developer and advisor"],
        [Meta, "Meta/Quest Global", "Test engineer"] 
    ];

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
                    <ul className="about_aboutMe">
                        <li className="about_Item">
                            <div className="about_polaroid">
                                <img id="about_grad" src={Me1}/>
                                <p className="about_polaroidText">Ready for the workforce!</p>
                            </div>
                            <div className="about_polaroid">
                                <img id="about_city" src={SJ}/>
                                <p className="about_polaroidText">The city I grew up in</p>
                            </div>
                        </li>
                        <li className="about_row">
                            
                        </li>
                    </ul>
                </div>

                <p className="about_generalFont"> Places I worked at over the years, including internships, contracts, and full time positions:</p>
                <div className="about_container" >
                    <Carousel autoPlay={true} interval={2500} showThumbs={false} infiniteLoop={true} className="about_aboutWork">
                        {Images.map((photos, index) => (
                            <div className="about_polaroid1" key={index}>
                                <img className="about_workPlaces" src={photos[0]} alt={`Image ${index}`} />
                                <p className="about_workNames"> {photos[1]} </p>
                                <p className="about_workNameJob"> Job title: {photos[2]} </p>
                            </div>
                        ))}
                    </Carousel>
                    
                </div>
            </div>  
        </>
    )
}

/*

<ul className="about_aboutWork">
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img className="about_workPlaces" src={GF}/>
                                <p >Globalfoundries</p>
                            </div>
                        </li>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img className="about_workPlaces" src={WD}/>
                                <p>Western Digital</p>
                            </div>
                        </li>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img className="about_workPlaces" src={Google}/>
                                <p>Tezerakt/ Google</p>
                            </div>
                        </li>
                        <li className="about_row">
                            <div className="about_polaroid">
                                <img className="about_workPlaces" src={Meta}/>
                                <p>Quest Global/ Meta</p>
                            </div>
                        </li>
                    </ul>

*/