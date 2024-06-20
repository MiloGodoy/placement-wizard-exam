
import { Navbar } from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React from 'react';

const Result1 = () => {
    return (
        <div className="text-center">
            <Navbar />
            <div className="mt-10">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">Your English Level is W2!!</h1>
                <p className="text-lg text-gray-700">Congratulations! You&apos;ve reached a W2 level in English proficiency. Keep up the good work!</p>
                <p>Un asesor se estará comunicando contigo para asesorarle con nuestros cursos</p>
            </div>
            <Footer />
        </div>
    );
};

export default Result1;
