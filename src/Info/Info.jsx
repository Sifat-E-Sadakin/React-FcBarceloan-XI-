import './Info.css'

import React from 'react';

const Info = (props) => {
    let listedPlayer= props.transferPlayers;
    
    
    
    // console.log(listedPlayer);
    

    let total= 0;
    for (const iterator of props.transferPlayers) {
        // console.log(iterator.strSigning);
        total= total+ +iterator.strSigning;
        
    }

    return (
        <div className='info'>
            <h4>Players Info</h4>
            <h5>Total Player in Transfer: {props.transferPlayers.length}</h5>
            {
                listedPlayer.map(player=> <li> {player.strPlayer}</li>)
            }
            <h3>Team Value: {total} </h3>
        </div>
    );
};

export default Info;