//importar bibliotecas e funções
import { create } from "zustand";

//definir a tipagem da função
interface useHowToPlayModalInterface {
  isOpenH2P: boolean;
  onOpenH2P: () => void;
  onCloseH2P: () => void;
}

//função principal
const useHowToPlayModal = create<useHowToPlayModalInterface>((set) => ({
  isOpenH2P: false,
  onOpenH2P: () => set({ isOpenH2P: true }),
  onCloseH2P: () => set({ isOpenH2P: false }),
}));

//exportar função principal
export default useHowToPlayModal;
