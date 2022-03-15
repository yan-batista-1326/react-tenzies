import React from 'react';

export default function Die(props) {
    const heldStyle = {
        backgroundColor: props.held ? "#59E391" : "transparent"
    } 

    function dots() {
        let dotsArr = [];
        for(let i = 0; i < props.value; i++) {
            dotsArr.push(<div className="die--circle" key={i}></div>)
        }
        return dotsArr;
    }

    return(
        <div style={heldStyle} className="die" onClick={() => props.handleClick(props.id)}>
            {dots()}
        </div>
    )
}