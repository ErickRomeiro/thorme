"use client";
//definir tipagem da função principal
interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

//função principal
const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  //se o modal estiver fechado
  if (!isOpen) return null;

  //resultado da função principal
  return (
    <main
      className={`absolute flex items-start justify-center inset-0 z-[80] | bg-black/40 outline-none overflow-hidden focus:outline-none select-none`}
      onClick={onClose}
    >
      <div
        className={`w-[90%] md:w-[60%] lg:w-[50%] xl:w-[50%] mx-auto my-8 h-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex flex-col | w-full sm:h-auto | bg-white border-2 border-black shadow-modal-shadow shadow-white outline-none focus:outline-none`}
        >
          {/* corpo */}
          <div
            className={`bg-[#3c3f46] rounded-lg text-[#a1a1a1] relative flex-auto | p-6 pb-10 border-b border-black h-auto`}
          >
            CONFIGURAÇÕES
          </div>
        </div>
      </div>
    </main>
  );
};

//exportar função principal
export default SettingsModal;
