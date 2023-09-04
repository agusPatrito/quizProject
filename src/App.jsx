import React, { useState } from "react"
import CardContainer from "./components/CardContainer"


function App() {
  const  [flashCards,setFlashCards] = useState(preguntas)

  return (
    <div className="w-screen h-screen mx-auto">
      <div>
        <CardContainer flashcards={flashCards}/>
      </div>
      
    </div>
  )
}

const preguntas = [
  {
      "id":1,
      "question":"Capital of Argentina?",
      "answer":"Buenos Aires",
      "options":[
        'Cordoba',
        'Entre Rios',
        'Buenos Aires',
        'Mendoza'
      ]

  }
]




export default App
