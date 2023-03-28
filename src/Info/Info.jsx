import './Info.css'

import React from 'react';

const Info = (props) => {
    console.log(props.transferPlayers);
    return (
        <div className='info'>
            <h4>Players Info</h4>
            <h5>Total Player in Transfer: {props.transferPlayers.length}</h5>
            <h3>Team Value: </h3>
        </div>
    );
};

export default Info;