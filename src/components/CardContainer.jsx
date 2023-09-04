import React from 'react'
import FlashCards from './FlashCards/FlashCards'

export default function CardContainer( { flashcards } ) {
  return (
    <div className="cardContainer">
      {flashcards.map((flashcards) => {
        return <FlashCards flashcards={flashcards} key={flashcards.id}/>
      })}
    </div>
  )
}
