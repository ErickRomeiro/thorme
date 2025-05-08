//importar bibliotecas e funções
import { create } from "zustand";

//definir a tipagem da função
interface useProgressInterface {
  isOpenProgress: boolean;
  onOpenProgress: () => void;
  onCloseProgress: () => void;
}

//função principal
const useProgressModal = create<useProgressInterface>((set) => ({
  isOpenProgress: false,
  onOpenProgress: () => set({ isOpenProgress: true }),
  onCloseProgress: () => set({ isOpenProgress: false }),
}));

//exportar função principal
export default useProgressModal;
