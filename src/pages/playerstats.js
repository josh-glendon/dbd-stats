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

            <div className="survivor-stats-container">
                <p>Survivor</p>
                {stats && (
                    <div>
                        <p>Escapes in the Dying state: {stats.stats[7].value}</p>
                        <p>Escapes through hatch {stats.stats[20].value}</p>
                        <p>Total Escapes: {stats.stats[8].value}</p>
                        <p>Successful Skill Checks: {stats.stats[9].value}</p>
                        <p>Generator Pct: {stats.stats[5].value}</p>
                        <p>Heal Pct: {stats.stats[6].value}</p>
                        <p>Unhooks or Heals: {stats.stats[12].value}</p>
                        <p>Unhooks or Heal after Exit Gates Powered: {stats.stats[13].value}</p>
                        
                    </div>
                )}
            </div>

        </div>
    )
}