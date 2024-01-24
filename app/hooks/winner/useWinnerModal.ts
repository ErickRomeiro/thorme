//importar bibliotecas e funções
import { create } from 'zustand';

//definir a tipagem da função
interface useWinnerModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

//função principal
const useWinnerModal = create<useWinnerModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

//exportar função principal
export default useWinnerModal;