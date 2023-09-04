import './flashCard.css'
import React, { useState } from 'react'

export default function FlashCards({ flashcards }) {
    const [flip, setFlip] = useState(false)
    return (
    <div className="flashCard" onClick={() => setFlip(!flip)}>
        <h3>{flip ? flashcards.answer : flashcards.question}</h3>
        <div>
            {flip ? null : flashcards.options.map((options, index) =>(
                <p key={index}>{options}</p>
            ))}
        </div>
    </div>
    )
}
