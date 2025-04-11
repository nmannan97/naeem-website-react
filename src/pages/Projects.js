import {React, useState} from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

import './Projects.css'

import Navbar from "../Navbar";
import Footer from "../Footer";
import Pong from "./Pong/Pong"

import RadarDish from '../assets/pictures/projects/RadarDish/RadarDish1.png';
import RadarDish2 from '../assets/pictures/projects/RadarDish/RadarDish.png';
import RadarDish3 from '../assets/pictures/projects/RadarDish/DishBuilt.jpg';

import RobotLeg from "../assets/pictures/projects/RoboticLeg/RobotLeg.png";
import RobotLegPic from "../assets/pictures/projects/RoboticLeg/RoboticLegCREO.png";

import pipBoy0 from "../assets/pictures/projects/Pipboy/PipBoy.png";
import pipBoy1 from "../assets/pictures/projects/Pipboy/PipBoy2.png";

import PCB0 from "../assets/pictures/projects/RoboticsClub/PCB,RevC.jpg";
import PCB1 from "../assets/pictures/projects/RoboticsClub/PCB,RevC2.jpg";

export default function Projects(){
    
    const Images = [ [RadarDish, "Radar dish", "3D printed radar dish with automated testing with embedded systems and Python"],
        [RobotLegPic, "Robotic leg", "Robotic leg made with embedded systems and 3D printed"],
        [pipBoy0, "Pipboy 3000", "Pipboy 3000 made with CREO Parametrics CAD"],
        [PCB0, "Robotics club PCB", "Motor PCB made with DipTrace from schematic to PCB to population"] 
    ];  

    return(
        <>  
            <Navbar />
            <div id="projects">
                <div id="projects_carousel">
                    <p className="projects_generalFont"> Welcome to my projects page!</p>
                    <p className="projects_generalFont"> Here are some of my projects...</p>
                    <Carousel autoPlay={true} interval={2500} showThumbs={false} infiniteLoop={true} className="about_aboutWork">
                        {Images.map((photos, index) => (
                            <div className="about_polaroid1" key={index}>
                                <img className="about_workPlaces" src={photos[0]} alt={`Image ${index}`} />
                                <p className="about_workNames"> {photos[1]} </p>
                                <p className="about_workNameJob"> {photos[2]} </p>
                            </div>
                        ))}
                    </Carousel>
                    <p className="projects_generalFont">Scroll down for more ↧</p>
                </div>
                
                <ol id="projects_ProjectsList">
                    <li className="projects_ProjectItem">
                        <Link  to="/pong"><p id="projects_Pong" className="projects_generalFont">Press to play Pong</p></Link>
                    </li>
                    <li className="projects_ProjectItem">
                        <div className="projects_background">
                            <video id="projects_mithack" controls>
                                <source src="/videos/video1104809264.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="projects_generalFont">
                                This is a hackathon project put up by MIT that was built off making some project with blockchain.
                                My part was to make a backend that would store user data, this was done with flask, Python, and 
                                SQL to handle incoming data. My part was done in a sandbox in React and the real site was done with
                                Next.JS. I also hosted the site on my AWS account to make it live. 
                            </p>
                            <a style={{ justifyContent: "center", display: "flex", fontSize: "1.5em", paddingBottom: "30px" }} href="https://main.d3cnevry40mude.amplifyapp.com/">
                                live site link
                            </a>
                        </div>          
                    </li>
                    <li className="projects_ProjectItem">
                        <div className="projects_background">
                            <p className="projects_generalFont">Radar dish ~</p>
                            <div className="projects_Photos">
                                <div className="projects_projectDiv">
                                    <iframe className="projects_Video" src="https://player.vimeo.com/video/921326896?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Radar dish demo"></iframe>                            
                                    <p className="projects_projectName">My radar dish</p>
                                </div>  
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={RadarDish3}/>
                                    <p className="projects_projectName">Assembled dish</p>
                                </div>             
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={RadarDish}/>
                                    <p className="projects_projectName">Radar dish (Side)</p>
                                </div>   
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={RadarDish2}/>
                                    <p className="projects_projectName">Radar dish (Front)</p>
                                </div>   
                            </div>                           
                            <p className="projects_generalFont">
                                2 man project where I designed a radar in solidworks, built a radar dish prototype, and automated the dish testing,
                                while my partner did the simulations for the project in HFSS. 
                                Along with this I designed a system that would take sample points every 1 degree and then put the average of 5 
                                samples across various wifi channels into an excel file. This used a Python script to collect data and an Arduino 
                                using RTOS to take accurate and communicate via serial communications. This was an SDR.
                            </p> 
                        </div>          
                    </li>
                    <li className="projects_ProjectItem">
                        <div className="projects_background">
                            <p className="projects_generalFont">Robotic leg ~</p>
                            <div className="projects_Photos">
                                <div className="projects_projectDiv">
                                    <iframe className="projects_Video" src="https://player.vimeo.com/video/921328085?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="RobotLeg demo"></iframe>                            
                                    <p className="projects_projectName">My robotic leg</p>
                                </div>         
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={RobotLegPic}/>
                                    <p className="projects_projectName">Assembled Robotic leg in CREO</p>
                                </div> 
                            </div>  
                            <p className="projects_generalFont">
                                Individual robotic leg project where I designed a leg like structure in CREO parametrics and used a microcontroller to move the 
                                leg up and down with a linear actuator and potentiometer sensing. This used CREO parametrics to design the leg and a 3D printer to build 
                                the parts in PLA and rubber. Looking to do more with it and include servo motors to move the leg when I get 
                                more funds.
                            </p>   

                        </div>          
                    </li>
                    <li className="projects_ProjectItem">
                        <div className="projects_background">
                            <p className="projects_generalFont">Pip boy 3000 ~</p>
                            <div className="projects_Photos">
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={pipBoy0}/>
                                    <p className="projects_projectName">Pipboy 3000</p>
                                </div>         
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={pipBoy1}/>
                                    <p className="projects_projectName">Pipboy 3000 exploded</p>
                                </div> 
                            </div>        
                            <p className="projects_generalFont">
                                Designed a pipboy 3000 using Creo Parametrics as a self started project. Made to be formed, or 3D printed, in plastics
                                and rubbery material like NinjaFlex. 
                            </p>    
                        </div>          
                    </li>
                    <li className="projects_ProjectItem">
                        <div className="projects_background">
                            <p className="projects_generalFont">Robotics club ~</p>
                            <div className="projects_Photos">
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={PCB0}/>
                                    <p className="projects_projectName">PCB designed for my robotics club</p>
                                </div>         
                                <div className="projects_projectDiv">
                                    <img className="projects_projectImage" src={PCB1}/>
                                    <p className="projects_projectName">Revision C PCB</p>
                                </div>  
                            </div>       
                            <p className="projects_generalFont">
                                This was done in DipTrace where I got to do schematic design layout as well as PCB placement of items. Worked in crossfunctional team
                                with software, firmware, mechanical, and electrical teammates to build a Mars rover. This was done for my college project. 
                            </p>   
                        </div>           
                    </li>
                </ol>

            </div>
            <Footer/>
        </>
    )
}