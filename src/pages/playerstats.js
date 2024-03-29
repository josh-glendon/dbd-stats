import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlayerStats() {
    const [stats, setStats] = useState(null);

    const steamID = useParams();
    console.log(steamID);

    useEffect(() => {
        //fetch player stats
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try{
            const response = await fetch(`http://localhost:5000/users/player-stats/${steamID.steamID}`, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }, 
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setStats(data);
            }
        } catch(error){
            console.log(error);
        }
    }


    return(
        <div>
            <h2>Player Stats page</h2>
            <p>SteamID: {steamID.steamID}</p>
        </div>
    )
}