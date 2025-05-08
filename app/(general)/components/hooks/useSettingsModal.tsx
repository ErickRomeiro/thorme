//importar bibliotecas e funções
import { create } from "zustand";

//definir a tipagem da função
interface useSettingsInterface {
  isOpenSettings: boolean;
  onOpenSettings: () => void;
  onCloseSettings: () => void;
}

//função principal
const useSettingsModal = create<useSettingsInterface>((set) => ({
  isOpenSettings: false,
  onOpenSettings: () => set({ isOpenSettings: true }),
  onCloseSettings: () => set({ isOpenSettings: false }),
}));

//exportar função principal
export default useSettingsModal;
