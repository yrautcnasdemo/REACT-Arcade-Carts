import React from 'react';
import './PlayerCard.css'

export default function PlayerCard({
    additional,
    hobby,
    pseudo,
    gender,
    showAdditional,
    age
}) {
    return (
        <div>
            <div className='playercard'>
                <h2>{pseudo}</h2>
                <h3>{gender}</h3>
                <h4>{age}ans</h4>
                <div>{hobby.join(', ')}.</div>
                <button onClick={() => showAdditional(additional)}>More Info</button>
            </div>
        </div>
    );
}