'use client'

import { Navbar } from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import { setCookie } from "cookies-next";
import Link from "next/link";
import React, { useState } from 'react';
import answers from "@/app/ansers";
import { useStore } from "../../store";


export default function Question40() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const question_number = "40";

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
    const nextQuestionURL = store.respuestas_correctas >= 27 ? '../../questions/question41' : '../../results/result2';
    return (
        <div className="text-center">
            <Navbar />
            <div>
                <h1 className='text-center font-bold text-lg mb-5 mt-5'>Question {question_number}: Read the text and answer the question: </h1>
                <p className="pl-6 pr-6 mb-6">My name is Alex and I love to travel to different parts of the world. Last year, my girlfriend and I were in South Africa for my birthday and it was amazing. We were very excited, and the weather in spring was sunny every day. This year my friends want to take me to Mexico and I am excited about it. We are all in relationships and our girlfriends will come with us. 
                </p>
            </div>
            <Question
                question_number={question_number}
                question="Where Will Alex and his Friends travel to next?"
                options={[
                    "A. South Korea",
                    "B. Australia",
                    "C. Mexico",
                    "D. South Africa",
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
