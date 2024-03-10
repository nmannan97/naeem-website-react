import {React, useState} from "react";

import './Projects.css'

import Navbar from "../Navbar";
import Comments from "../Comments";

import RadarDish from '../assets/pictures/projects/RadarDish/dish.jpg';
import RadarDishVideo from "../assets/pictures/projects/RadarDish/Radar.gif";
import RobotLeg from "../assets/pictures/projects/RoboticLeg/RobotLeg.png";
import RobotLegVideo from "../assets/pictures/projects/RoboticLeg/RobotLeg.gif";
import pipBoy0 from "../assets/pictures/projects/pipboy/PipBoy.png";
import pipBoy1 from "../assets/pictures/projects/pipboy/PipBoy2.png";
import PCB0 from "../assets/pictures/projects/RoboticsClub/PCB,RevC.jpg";
import PCB1 from "../assets/pictures/projects/RoboticsClub/PCB,RevC2.jpg";


export default function Projects(){
    

    return(
        <>  
            <Navbar />
            <div id="projects">
                <p className="projects_generalFont"> Welcome to my projects page!</p>
                <p className="projects_generalFont"> Here are some of my projects...</p>

                <ol id="projects_ProjectsList">
                    <li className="projects_ProjectItem">
                        <p className="projects_generalFont">Radar dish ~</p>
                        <div className="projects_projectDiv">
                            <iframe className="projects_Video" src="https://player.vimeo.com/video/921326896?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Radar dish demo"></iframe>                            
                            <p className="projects_projectName">My radar dish</p>
                        </div>            
                        
                        <p className="projects_generalFont">
                            Duo project where I designed and built a radar dish, while my partner did the simulations for the project in HFSS. 
                            Along with this I designed a system that would take sample points every 1 degree and then put the average of 5 
                            samples into an excel file. This used a Python script to collect data and an Arduino using RTOS to take accurate 
                            and communicate via serial communications. Hover over the picture to view the gif. This is a SDR.
                        </p>           
                    </li>
                    <li className="projects_ProjectItem">
                        <p className="projects_generalFont">Robotic leg ~</p>
                        <div className="projects_projectDiv">
                            <iframe className="projects_Video" src="https://player.vimeo.com/video/921328085?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="RobotLeg demo"></iframe>                            
                            <p className="projects_projectName">My robotic leg</p>
                        </div>         
                        <p className="projects_generalFont">
                            Individual robotic leg project where I designed a leg like structure and used a microcontroller to move the 
                            leg up and down with a linear actuator. This used CREO parametrics to design the leg and a 3D printer to build 
                            the parts in PLA and rubber. Looking to do more with it and include servo motors to move the leg when I get 
                            more funds. Hover over the picture to view the gif.
                        </p>              
                    </li>
                    <li className="projects_ProjectItem">
                        <p className="projects_generalFont">Pip boy 3000 ~</p>
                        <div className="projects_projectDiv">
                            <img className="projects_projectImage" src={pipBoy0}/>
                            <p className="projects_projectName">Pipboy 3000</p>
                        </div>         
                        <div className="projects_projectDiv">
                            <img className="projects_projectImage" src={pipBoy1}/>
                            <p className="projects_projectName">Pipboy 3000 exploded</p>
                        </div>         
                        <p className="projects_generalFont">
                            Designed a pipboy 3000 using Creo Parametrics as a self started project. Made to be formed, or 3D printed, in plastics
                            and rubbery material like NinjaFlex. 
                        </p>              
                    </li>
                    <li className="projects_ProjectItem">
                        <p className="projects_generalFont">Robotics club ~</p>
                        <div className="projects_projectDiv">
                            <img className="projects_projectImage" src={PCB0}/>
                            <p className="projects_projectName">PCB designed for my robotics club</p>
                        </div>         
                        <div className="projects_projectDiv">
                            <img className="projects_projectImage" src={PCB1}/>
                            <p className="projects_projectName">Revision C PCB</p>
                        </div>         
                        <p className="projects_generalFont">
                            This was done in DipTrace where I got to do schematic design layout as well as PCB placement of items. Worked in crossfunctional team
                            with software, firmware, mechanical, and electrical teammates to build a Mars rover. This was done for my college project. 
                        </p>              
                    </li>
                </ol>


            </div>

        </>
    )
}