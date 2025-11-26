import './Pong.css';
import Playerbar from './Objects/Playerbar';
import Ball from './Objects/Ball';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pong(){
    
    const [scores, setScores] = useState([]);

    const API_BASE = process.env.API_BASE;

    useEffect(() => {
        if (!API_BASE) {
            console.error("API base URL is missing");
            return;
        }

        axios.get(`${API_BASE}/submit-score`)
            .then(res => setScores(res.data.scores))
            .catch(err => console.error(err));
    }, []);


    
    return(
        <>
            <div id="Pong">
                <div id="Pong_container1" className="Pong_mainContainer">
                    <p id="Pong_title"><i>Pong</i></p>
                    <div id="Pong_container2" className="Pong_subContainer">
                        <Ball />
                    </div>  
                </div> 
                <p className="Pong_scores" >Top scores:</p>
                <div id="Pong_scoreContainer" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ol>
                        {Array.isArray(scores) &&
                            scores.map((score, index) => (
                            <li key={index}>Score: {score}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>  
    );
}