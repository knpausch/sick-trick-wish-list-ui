import React from "react";
import './TrickCard.css'

const TrickCard = ({ stance, name, obstacle, tutorial }) => {
    return (
        <div className="trickcard">
            <h2>{stance} {name}</h2>
            <p>Obstacle: {obstacle}</p>
            <p>Link To Tutorial:</p>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default TrickCard