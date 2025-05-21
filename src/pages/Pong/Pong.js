import './Pong.css';
import Playerbar from './Objects/Playerbar';
import Ball from './Objects/Ball';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pong(){
    
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/submit-score`);
                console.log("API base URL:", process.env.REACT_APP_API_URL);

                setScores(response.data.scores);
            } catch (error) {
                console.error('Error fetching scores:', error);
            }
        };
        fetchScores();
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