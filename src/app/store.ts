import { create } from 'zustand';

type Store = {
  respuestas_correctas: number;
  increaseCorrectAnswers: () => void;
};

export const useStore = create<Store>((set) => ({
  respuestas_correctas: 0,
  increaseCorrectAnswers: () =>
    set((state) => ({ respuestas_correctas: state.respuestas_correctas + 1 })),
}));
