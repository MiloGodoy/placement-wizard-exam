'use client'

import { Navbar } from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import { setCookie } from "cookies-next";
import Link from "next/link";
import React, { useState } from 'react';
import answers from "@/app/ansers";
import { useStore } from "../../store";

export default function Question19() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const question_number = "19";

    const store = useStore(); // Usa el hook useStore para acceder al store global

    const handleOptionSelect = (option: string) => {
        setSelectedAnswer(option);
    };

    const handleNextQuestion = (option: string) => {
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
            <div>
                <h1 className='text-center font-bold text-lg mb-5 mt-5'>Question {question_number}: Read the text and answer the question: </h1>
                <p className="pl-6 pr-6 mb-6">Hi! My name is Adam and I live in England with my two brothers and two sisters. My parents don’t live with me. They live in the United States. I don’t like to get up early every day. I like to go to bed late. I work at a restaurant in the afternoon. I study English in the evenings and I usually see my friends at night. We like to go to the movies and to coffee shops, too.
                </p>
            </div>
            <Question
                question_number={question_number}
                question="How many brothers and sisters does Adam have?"
                options={[
                    "A. One brother and one sister",
                    "B. One brother and two sisters",
                    "C. No brothers and sisters",
                    "D. Two sisters and two brothers"
                ]}
                onOptionSelect={handleOptionSelect}
            />
            <div className="mt-10 mx-auto">
                <Link href='../../questions/question20'>
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
