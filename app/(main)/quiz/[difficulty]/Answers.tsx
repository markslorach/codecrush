"use client"
import { useState } from "react"

const Answers = ({answer}: any) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const handleClick = () => {
        setSelectedAnswer(answer.answer)
    }

    console.log(selectedAnswer)

  return (
    <li onClick={handleClick} key={answer.id}>{answer.answer}</li>
  )
}

export default Answers