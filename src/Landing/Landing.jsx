import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';
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

    useEffect(()=>{
        let storedPlayers= getShoppingCart();
        let showAddedPlayer=[];
        
        for (const id in storedPlayers) {
           let addedPlayers=  players.find(player=> player.idPlayer ==id)
           if(addedPlayers){
           showAddedPlayer.push(addedPlayers);

           }
        }
        //  console.log(showAddedPlayer);
        setTransferPlayers(showAddedPlayer);

    },[players])

    
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
        removeFromDb(id);
        console.log(remainingPlayer);
        
        
    }

    let clearList=()=>{
        let fakaArray = [];
        setTransferPlayers(fakaArray);
        deleteShoppingCart();
        
      }

    return (
        <div className='landing'>
            <div className='PlayerContainer'>
                
                  {
                    players.map(player=> <Players player={player} att={att} rft={rft} key={player.idPlayer}></Players>)
                    
                  }
            </div>
            
            <div>
                <Info transferPlayers={transferPlayers} key={transferPlayers.idPlayer} cl={clearList} ></Info>
            </div>
        </div>
    );
};

export default Landing;