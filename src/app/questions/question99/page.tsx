'use client'

import { Navbar } from "@/app/components/Navbar";
import Question from "@/app/components/Question";
import { setCookie } from "cookies-next";
import Link from "next/link";
import React, { useState } from 'react';
import answers from "@/app/ansers";
import { useStore } from "../../store";

export default function Question99() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const question_number = "99";

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
                <p className="pl-6 pr-6 mb-6">Interested in helping the world? Thai food is very different from what you may have tasted before. The main flavors in Thai food are salty, spicy, sour, and sweet. It is important to try these different flavorings to get a good feel for what Thai food is like. Thai food often pairs hot spices with sweet, light citrus flavors like lime and mango. The signature peanut sauce is somewhere between sweet and savory and adds depth to any dish. The layered flavors of Thai food make each dish feel completely unique and is what sets it apart from dishes in other Asian cuisines. Generally, Thais order the same number of dishes as there are people in the group. However, the dishes are shared between all members of the group. This ensures that all members get a taste of all the flavors. Usually, there will be a soup, several different meats, vegetable stir-fry, noodles, and a dessert.
                </p>
            </div>
            <Question
                question_number={question_number}
                question="How many dishes do Thais usually order?
                "
                options={[
                    "A. They usually order a buffet",
                    "B. They usually order five dishes: soup, meat, vegetables, noodles and dessert",
                    "C. They usually order just enough",
                    "D. They usually order it according to the number of people"
                ]}
                onOptionSelect={handleOptionSelect}
            />
            <div className="mt-10 mx-auto">
                <Link href='../../questions/question100'>
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
