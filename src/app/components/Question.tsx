'use client'

import React, { useState } from 'react';

interface QuestionProps {
    question_number: string
    question: string
    options: string[]
    onOptionSelect: (option: string) => void
}

const Question = ({ question_number, question, options, onOptionSelect }: QuestionProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        onOptionSelect(option);
    };

    return (
        <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md">
            <p className="font-bold text-lg mb-4">{question}</p>
            <div className="grid grid-cols-1 gap-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`p-2 border border-gray-300 rounded-md focus:outline-none ${
                            selectedOption === option ? 'bg-blue-500 text-white' : ''
                        }`}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
