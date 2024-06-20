'use client'

import { Navbar } from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import { setCookie } from "cookies-next";
import Link from "next/link";
import React, { useState } from 'react';
import answers from "@/app/ansers";
import { useStore } from "../../store";

export default function Question4() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const question_number = "04";

    const store = useStore(); // Usa el hook useStore para acceder al store global

    const handleOptionSelect = (option: string) => {
        setSelectedAnswer(option);
    };

    const handleNextQuestion = () => {
      const questionNumberWithAnswer = `${question_number}${selectedAnswer}`;
      setCookie(`question_number ${question_number}`, questionNumberWithAnswer);
      setSelectedAnswer(questionNumberWithAnswer);
      console.log("Respuesta seleccionada:", questionNumberWithAnswer);

      const respuesta = answers[parseInt(question_number) - 1];
        console.log("respuesta: ", respuesta)

        if( questionNumberWithAnswer === respuesta ){
          store.increaseCorrectAnswers(); // Incrementar las respuestas correctas
          console.log("Respuestas correctas:", store.respuestas_correctas); // Imprimir el número de respuestas correctas

        }
    };

  return (
    <div className="text-center">
      <Navbar />
      
      <div className='text-center font-bold text-lg mb-5 mt-5'>
        <h1>Question 4: Choose the correct option to complete the sentence</h1>
      </div>
      
      <Question
        question_number={question_number}
        question="_____________ they __________ popcorn?"
        options={[ 
          "A. Are / making",
          "B. Are / make",
          "C. Do / making",
          "D. Is / making"
        ]}
        onOptionSelect={handleOptionSelect}
      />

          <div className="mt-10 mx-auto">
            <Link href='../../questions/question5'>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            </Link>
          </div>
    </div>
  );
}
