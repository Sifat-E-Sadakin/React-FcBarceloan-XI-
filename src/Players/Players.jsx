import React from 'react';
import './Players.css'

const Players = (props) => {
    //  console.log(props.player);
    let {strPlayer, strCutout,strSigning,strWeight, strNationality, strPosition, idPlayer }= props.player
    // console.log(+strSigning);

    let att=props.att;
   

    return (
        <div>
           <div className='player'>
                <img src={strCutout} alt="" />
                <h3>Name: {strPlayer}</h3>
                <h4>Position: {strPosition}</h4>
                <p>Nationality: {strNationality}</p>
                <p>Weight: {strWeight}</p>
                <h5>Transfer Value : {strSigning}m $</h5>

                <button className='btn' onClick={()=>att(idPlayer)} >Add to Transfer</button>
                
           </div>
        </div>
    );
};

export default Players;