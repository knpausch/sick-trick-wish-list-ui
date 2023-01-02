import React from "react";
import TrickCard from './TrickCard';
import './Tricks.css'

const Tricks = ({ trickList }) => {
    const trickCards = trickList.map(trick => {
        return(
            <TrickCard 
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            />
        )
    })

    return (
        <div className="trick-container">
            {trickCards}
        </div>
    )
}

export default Tricks