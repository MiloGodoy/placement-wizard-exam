'use client'

import { Navbar } from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import { setCookie } from "cookies-next";
import Link from "next/link";
import React, { useState } from 'react';
import answers from "@/app/ansers";
import { useStore } from "../../store";


export default function Question80() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const question_number = "80";

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
    const nextQuestionURL = store.respuestas_correctas >= 55 ? '../../questions/question81' : '../../results/result4';
    return (
        <div className="text-center">
            <Navbar />
            <div>
                <h1 className='text-center font-bold text-lg mb-5 mt-5'>Question {question_number}: Read the text and answer the question: </h1>
                <p className="pl-6 pr-6 mb-6">Interested in helping the world? There are many websites that calculate your carbon footprint so you know the aspects of your life that need changing in order to reduce the emission of CO2 into our atmosphere. You are mistaken if you think that this matter involves only means of transportation. Everything we do in our lives counts, from the kind of food you buy to the amount of time you leave the lights on in your house. People seldom stop to think about how their way of life can be destroying the ozone layer or contributing to the global warming. Be different, act different.
                </p>
            </div>
            <Question
                question_number={question_number}
                question="What does a carbon footprint involve?
                "
                options={[
                    "A. Means of transportation",
                    "B. Activities that help the world",
                    "C. Anything related to using transportation",
                    "D. Various things, from eating habits to the use of energy",
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
