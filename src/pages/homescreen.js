import React, { useState } from "react";
import "./homescreen.css";
import { useNavigate } from "react-router-dom";

export default function Homescreen() {
    const [steamID, setSteamID] = useState('');
    const [response, setResponse] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSteamID( e.target.value);
    };

    const handleSubmit = async () => {
        console.log('steamID: ', steamID);
        try{
            const response = await fetch('http://localhost:5000/users/addUser', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({ steamID: steamID })
            });
            if(response.ok){
                navigate(`/playerstats/${steamID}`);
            } else if(response.status === 401){
                navigate(`/playerstats/${steamID}`);
            } else if(response.status === 500){
                setResponse("Internal server error: Error adding user");
            } else{
                setResponse("Error: Unexepected status code " + response.status);
            }
        } catch(error){
            setResponse("Error: " + error.message);
        }
    }

    const getStats = async () => {
        try{
            const response = await fetch('http://localhost:5000/users/player-stats/76561198375076448', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
            } else{
                console.log("Internal server error");
            }
        } catch(error){
            console.log(error);
        }
    }

    return(     
        <div className="main-container">
            <h3>This is the homescreen</h3>
            
            <p>Enter steamID number</p>
            <input 
                type="text"
                name="steamID"
                value={steamID}
                onChange={handleChange}
                placeholder="SteamID"
                required
                className="steamID-input-field"
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <p>{response}</p>


            <div>
                <p>Get player stats for steamID: 76561198375076448 </p>
                <button onClick={getStats}>Get Stats</button>
            </div>
        </div>
    )
};