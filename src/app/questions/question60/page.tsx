'use client'

import { Navbar } from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import { setCookie } from "cookies-next";
import Link from "next/link";
import React, { useState } from 'react';
import answers from "@/app/ansers";
import { useStore } from "../../store";


export default function Question60() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const question_number = "60";

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
  
        if (questionNumberWithAnswer === respuesta) {
            store.increaseCorrectAnswers(); // Incrementar las respuestas correctas
            console.log("Respuestas correctas:", store.respuestas_correctas); // Imprimir el número de respuestas correctas
        }
    };

    // Determina la URL de destino del enlace según el número de respuestas correctas
    const nextQuestionURL = store.respuestas_correctas >= 41 ? '../../questions/question61' : '../../results/result3';
    return (
        <div className="text-center">
            <Navbar />
            <div>
                <h1 className='text-center font-bold text-lg mb-5 mt-5'>Question {question_number}: Read the text and answer the question: </h1>
                <p className="pl-6 pr-6 mb-6">You might not know, but many of Cusco’s most famous attractions lie outside the city limits. It’s one of the most amazing cities to visit on the planet! The latest addition is Rainbow Mountain. It didn’t actually exist until around 2015 because it was hidden under a thick layer of ice. Climate change and rising temperatures took their toll, making the colorful mountains accessible by foot. It is now struggling with the early signs of over-tourism, so please tread lightly should you choose to visit. 
                </p>
            </div>
            <Question
                question_number={question_number}
                question="Why is Rainbow Mountain struggling?
                "
                options={[
                    "A. Rain is destroying the colors",
                    "B. High temperatures are cracking the rocks",
                    "C. Nobody visits the mountains",
                    "D. There are too many tourists",
                ]}
                onOptionSelect={handleOptionSelect}
            />
            <div className="mt-10 mx-auto">
                <Link href={nextQuestionURL}>
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
