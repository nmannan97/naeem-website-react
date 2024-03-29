import {React, useState} from "react";

import './Projects.css'

import Navbar from "../Navbar";

import RadarDish from '../assets/pictures/projects/RadarDish/dish.jpg';
import RadarDishVideo from "../assets/pictures/projects/RadarDish/Radar.gif";
import RobotLeg from "../assets/pictures/projects/RoboticLeg/RobotLeg.png";
import RobotLegVideo from "../assets/pictures/projects/RoboticLeg/RobotLeg.gif";
import pipBoy0 from "../assets/pictures/projects/pipboy/PipBoy.PNG";
import pipBoy1 from "../assets/pictures/projects/pipboy/PipBoy2.PNG";
import PCB0 from "../assets/pictures/projects/RoboticsClub/PCB,RevC.jpg";
import PCB1 from "../assets/pictures/projects/RoboticsClub/PCB,RevC2.jpg";


export default function Projects(){
    
    const [picture, setPicture] = useState()
    const [wording, setWording] = useState()

    const imageClick = (event) => {
        switch(event.target.id){
            case "projects_radar_dish": {setPicture(RadarDishVideo); setWording("It's my radar dish!"); break;}
            case "projects_robot_leg": {setPicture(RobotLegVideo); setWording("It's my robotic leg!"); break;}
        }
    }   

    return(
        <>  
            <Navbar />
            <div id="projects">
                <p className="projects_generalFont"> Welcome to my projects page!</p>
                <p className="projects_generalFont"> Here are some of my projects...</p>
                <ol>
                    <li>
                        <p className="projects_generalFont">Radar dish ~</p>
                        <div>
                            <img id="projects_radar_dish" src={picture === RadarDishVideo ? picture : RadarDish } onClick={imageClick}/>
                            <p>{picture === RadarDishVideo ? wording : 'click me'}</p>
                        </div>            
                        
                        <p className="projects_generalFont">
                            Duo project where I designed and built a radar dish, while my partner did the simulations for the project in HFSS. 
                            Along with this I designed a system that would take sample points every 1 degree and then put the average of 5 
                            samples into an excel file. This used a Python script to collect data and an Arduino using RTOS to take accurate 
                            and communicate via serial communications. Hover over the picture to view the gif. This is a SDR.
                        </p>           
                    </li>
                    
                    <li>
                        <p className="projects_generalFont">Robotic leg ~</p>
                        <div>
                            <img id="projects_robot_leg" src={picture === RobotLegVideo ? picture : RobotLeg } onClick={imageClick}/>
                            <p>{picture === RobotLegVideo ? wording : 'click me'}</p>
                        </div>         
                        <p className="projects_generalFont">
                            Individual robotic leg project where I designed a leg like structure and used a microcontroller to move the 
                            leg up and down with a linear actuator. This used CREO parametrics to design the leg and a 3D printer to build 
                            the parts in PLA and rubber. Looking to do more with it and include servo motors to move the leg when I get 
                            more funds. Hover over the picture to view the gif.
                        </p>              
                    </li>
                    <li>
                        <p className="projects_generalFont">Pip boy 3000 ~</p>
                        <div>
                            <img src={pipBoy0}/>
                            <p>Pipboy 3000</p>
                        </div>         
                        <div>
                            <img src={pipBoy1}/>
                            <p>Pipboy 3000 exploded</p>
                        </div>         
                        <p className="projects_generalFont">
                            Designed a pipboy 3000 using Creo Parametrics as a self started project. Made to be formed, or 3D printed, in plastics
                            and rubbery material like NinjaFlex. 
                        </p>              
                    </li>
                    <li>
                        <p className="projects_generalFont">Robotics club ~</p>
                        <div>
                            <img src={PCB0}/>
                            <p>PCB designed for my robotics club</p>
                        </div>         
                        <div>
                            <img src={PCB1}/>
                            <p>Revision C PCB</p>
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