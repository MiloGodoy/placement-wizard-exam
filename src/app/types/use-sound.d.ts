declare module 'use-sound' {
    interface SoundManager {
      play: () => void;
      pause: () => void;
      stop: () => void;
      // Puedes agregar más métodos y propiedades según sea necesario
    }
  
    function useSound(audio: string): [SoundManager, { pause: () => void, stop: () => void }];
    export default useSound;
  }