'use client'

import Link from 'next/link';
import React, { useState } from 'react';



const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar los datos del formulario
    console.log('Datos del formulario:', formData);


  };

  return (
    <form onSubmit={ handleSubmit } className="max-w-md mx-auto px-4 sm:px-0 py-7">

      <div className="mb-4">
        
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      
      </div>
      
      <div className="mb-4">
      
        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      
      </div>
      
      <div className="mb-4">

        <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />

      </div>
      
      <div className="mb-4">
 
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
 
      </div>
      
      <div className="mb-4">
        <Link href='../questions/question1'>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Begin the test
            </button>

        </Link>
 
      </div>
    
    </form>
  );
};

export default Form;
