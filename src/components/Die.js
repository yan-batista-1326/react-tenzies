import React from 'react';

export default function Die(props) {
    const heldStyle = {
        backgroundColor: props.held ? "#59E391" : "transparent"
    } 

    return(
        <div style={heldStyle} className="die" onClick={() => props.handleClick(props.id)}>
            <p>{props.value}</p>
        </div>
    )
}