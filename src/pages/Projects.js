import {React, useState} from "react";

import './Projects.css'

import Navbar from "../Navbar";

import RadarDish from '../assets/pictures/projects/RadarDish/dish.jpg'
import RadarDishVideo from "../assets/pictures/projects/RadarDish/Radar.gif"
import RobotLeg from "../assets/pictures/projects/RoboticLeg/RobotLeg.png"
import RobotLegVideo from "../assets/pictures/projects/RoboticLeg/RobotLeg.gif"

export default function Projects(){
    
    const [picture, setPicture] = useState()

    const imageClick = (event) => {
        switch(event.target.id){
            case "projects_radar_dish": {setPicture(RadarDishVideo); break;}
            case "projects_robot_leg": {setPicture(RobotLegVideo); break;}
        }
    }   

    return(
        <>  
            <Navbar />
            <div id="projects">
                <p className="projects_generalFont"> Welcome to my projects page!</p>
                <p className="projects_generalFont"> Here are some of my projects</p>
                <ol>
                    <li>
                        <p className="projects_generalFont">Radar dish</p>
                        <div>
                            <img id="projects_radar_dish" src={picture === RadarDishVideo ? picture : RadarDish } onClick={imageClick}/>
                            <p>click me</p>
                        </div>            
                        
                        <p className="projects_generalFont">
                            Duo project where I designed and built a radar dish, while my partner did the simulations for the project in HFSS. 
                            Along with this I designed a system that would take sample points every 1 degree and then put the average of 5 
                            samples into an excel file. This used a Python script to collect data and an Arduino using RTOS to take accurate 
                            and communicate via serial communications. Hover over the picture to view the gif. This is a SDR.
                        </p>           
                    </li>
                    <li>
                        <p className="projects_generalFont">Robotic Leg</p>
                        <div>
                            <img id="projects_robot_leg" src={picture === RobotLegVideo ? picture : RobotLeg } onClick={imageClick}/>
                            <p>click me</p>
                        </div>         
                        <p className="projects_generalFont">
                            Individual robotic leg project where I designed a leg like structure and used a microcontroller to move the 
                            leg up and down with a linear actuator. This used CREO parametrics to design the leg and a 3D printer to build 
                            the parts in PLA and rubber. Looking to do more with it and include servo motors to move the leg when I get 
                            more funds. Hover over the picture to view the gif.
                        </p>              
                    </li>
                </ol>
            </div>
        </>
    )
}