import React, { useState, useEffect } from "react";
import survPerkData from "../components/survPerkList.json";
import killerPerkData from "../components/killerPerkList.json";
import "./perkgen.css";

export default function PerkGen() {

    // useStates
    const [activeTab, setActiveTab] = useState("survivor");
    const [currentPerks, setCurrentPerks] = useState([]);

    const [response, setResponse] = useState(null);

    
    // Tab Changes
    const handleSurvButton = () => {
        setActiveTab("survivor");
    }

    const handleKillerButton = () => {
        setActiveTab("killer");
    }

    
    // useEffect, will run when the component is loaded
    useEffect(() => {
        generateRandomNumbers();
    }, [activeTab]);

    
    // generate random numebrs 
    const generateRandomNumbers = () => {
        let randomNumbers = [];
        let perks = [];


        if(activeTab === "survivor"){
            for (let i = 1; i < 5; i++){
                const randomDecimal = Math.random();
                const randomNumber = Math.floor(randomDecimal * 137) + 1;
                randomNumbers.push(randomNumber);
            }
            perks.push(survPerkData[randomNumbers[0]])
            perks.push(survPerkData[randomNumbers[1]])
            perks.push(survPerkData[randomNumbers[2]])
            perks.push(survPerkData[randomNumbers[3]])
            setCurrentPerks(perks);
        }
        else if (activeTab === "killer"){
            for (let i = 1; i < 5; i++){
                const randomDecimal = Math.random();
                const randomNumber = Math.floor(randomDecimal * 118) + 1;
                randomNumbers.push(randomNumber);
            }
            perks.push(killerPerkData[randomNumbers[0]])
            perks.push(killerPerkData[randomNumbers[1]])
            perks.push(killerPerkData[randomNumbers[2]])
            perks.push(killerPerkData[randomNumbers[3]])
            setCurrentPerks(perks);
        }
    }

    const handleClick = async () => {
        try{
            const response = await fetch('http://localhost:5000/perks/addPerk', { method: 'POST' });
            const data = await response.json();
            setResponse(data.message);
        } catch(error){
            setResponse("Error adding perk");
        }
    }


    return (
        <div>
            <h3>This is the random perk generator page</h3>
            
            <div className="perk-choose-button-container">
                <button
                    className={activeTab === "survivor" ? "button survivor-button active" : "button survivor-button"}
                    onClick={handleSurvButton}
                >
                    Survivor
                </button>
                <button
                    className={activeTab === "killer" ? "button killer-button active" : "button killer-button"}
                    onClick={handleKillerButton}
                >
                    Killer
                </button>
            </div>

            <div className="random-perks-container">
                {currentPerks.length > 0 ? (
                    <div className="diamond-contianer">
                        <div className="first-diamond-container">
                            <div className="diamond">
                                <div className="diamond-inner">
                                    {currentPerks[0]}
                                </div>
                            </div>
                            
                        </div>
                        <div className="second-diamond-container">
                            <div style={{marginRight: '50px'}}>
                                <div className="diamond">
                                    <div className="diamond-inner">
                                        {currentPerks[1]}
                                    </div>
                                </div>
                            </div>
                            <div className="diamond">
                                <div className="diamond-inner">
                                    {currentPerks[2]}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="diamond">
                                <div className="diamond-inner">
                                    {currentPerks[3]}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No perks generated yet</p>
                )}
            </div>

            <div>
                <button onClick={generateRandomNumbers}>Regenerate Perks</button>
            </div>

            <div>
                <button onClick={handleClick}>Add Perk</button>
                {response && <p>{response}</p>}
            </div>
            
        </div>
    )
}