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
            const response = await axios.get('http://localhost:5000/submit-score');
            setScores(response.data.scores);  // Update state with top scores
            console.log(scores)

        } catch (error) {
            console.error('Error fetching scores:', error);
        }
        };
        fetchScores();
    }, [1])
    return(
        <>
            <div id="Pong">
                <div id="Pong_container1" className="Pong_mainContainer">
                    <p id="Pong_title"><i>Pong</i></p>
                    <div id="Pong_container2" className="Pong_subContainer">
                        <Ball />
                    </div>  
                </div> 
                <p className="Pong_scores">Top scores:</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ol>
                        {scores.map((score, index) => (
                        <li key={index}>Score: {score}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>  
    );
}

/*

    
*/