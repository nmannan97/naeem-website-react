import './Pong.css';
import Playerbar from './Objects/Playerbar';
import Ball from './Objects/Ball';

export default function Pong(){
    
    return(
        <div id="Pong_container1" className="Pong_mainContainer">
            <p id="Pong_title"><i>Pong</i></p>
            <div id="Pong_container2" className="Pong_subContainer">
                <Ball />
            </div>  
        </div>   
    );
}