import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

interface AudioProps {
  audio: string;
}

const Audio = ({ audio }: AudioProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, stop }] = useSound(audio); // Uso de useSound para reproducir el audio

  useEffect(() => {
    // Reiniciar el estado de reproducción cuando cambia el audio
    setIsPlaying(false);
  }, [audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      pause(); // Pausar la reproducción si está en curso
    } else {
      play(); // Iniciar la reproducción si no está en curso
    }
    setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
  };

  const stopAndRestartAudio = () => {
    stop(); // Detener la reproducción
    setIsPlaying(false); // Actualizar el estado de reproducción a falso
    play(); // Volver a reproducir desde el principio
    setIsPlaying(true); // Actualizar el estado de reproducción a verdadero
  };

  return (
    <div>
      <button 
        onClick={toggleAudio}
        className="inline-block bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-blue-700 hover:underline hover:text-lg mt-4 mr-2"
      >
        <span>{isPlaying ? 'Pause' : 'Listen'}</span>
      </button>
      <button 
        onClick={stopAndRestartAudio}
        className="inline-block bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-blue-700 hover:underline hover:text-lg mt-4"
      >
        <span>Restart</span>
      </button>
    </div>
  );
};

export default Audio;
