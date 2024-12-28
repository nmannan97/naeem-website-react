import './Pong.css';
import Playerbar from './Objects/Playerbar';
import Ball from './Objects/Ball';

export default function Pong(){
    
    return(
        <div id="Pong_container1" className="Pong_mainContainer">
            Pong
            <div id="Pong_container2" className="Pong_subContainer">
                <Ball />
            </div>  
        </div>   
    );
}