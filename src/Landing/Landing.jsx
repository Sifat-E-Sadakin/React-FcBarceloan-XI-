import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Players from '../Players/Players';
import './Landing.css'

const Landing = () => {
    let [players, setPlayers] = useState([]);
    let [transferPlayers, setTransferPlayers]= useState([])
    useEffect(()=>{
        fetch('players.json')
        .then(res=> res.json())
        .then(data=> setPlayers(data))
    },[])

    
    let att=(id)=>{
       
        let selectedPlayers = players.find(player=>player.idPlayer == id)
        transferPlayers=[...transferPlayers, selectedPlayers]
        setTransferPlayers(transferPlayers)

        
        
     }

    return (
        <div className='landing'>
            <div className='PlayerContainer'>
                
                  {
                    players.map(player=> <Players player={player} att={att}></Players>)
                  }
            </div>
            
            <div>
                <Info transferPlayers={transferPlayers} ></Info>
            </div>
        </div>
    );
};

export default Landing;