import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
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
        
        for (const player of transferPlayers) {
            if(player.idPlayer== id){
                alert(player.strPlayer+ " is already in transfer list")
                return;
            }
            
        }
        let selectedPlayers = players.find(player=>player.idPlayer == id)
        transferPlayers=[...transferPlayers, selectedPlayers]
        
        setTransferPlayers(transferPlayers)
        addToDb(id);
        
        
     }
    //  console.log(transferPlayers);
    let rft=(id)=>{
        // console.log(id);
        let remainingPlayer = transferPlayers.filter(player=> player.idPlayer != id)
        
        setTransferPlayers(remainingPlayer);
        console.log(remainingPlayer);
        
        
    }

    return (
        <div className='landing'>
            <div className='PlayerContainer'>
                
                  {
                    players.map(player=> <Players player={player} att={att} rft={rft} key={player.idPlayer}></Players>)
                    
                  }
            </div>
            
            <div>
                <Info transferPlayers={transferPlayers} key={transferPlayers.idPlayer} ></Info>
            </div>
        </div>
    );
};

export default Landing;