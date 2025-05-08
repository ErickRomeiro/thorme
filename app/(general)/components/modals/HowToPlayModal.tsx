"use client";
//definir tipagem da função principal
interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

//função principal
const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
  //se o modal estiver fechado
  if (!isOpen) return null;

  //resultado da função principal
  return (
    <main
      className={`absolute flex items-start justify-center inset-0 z-[80] | bg-black/40 outline-none overflow-hidden focus:outline-none select-none`}
      onClick={onClose}
    >
      <div
        className={`w-[90%] md:w-[60%] lg:w-[50%] xl:w-[50%] mx-auto my-[3.25rem] rounded-2xl h-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* corpo */}
        <div
          className={`bg-[#3c3f46] text-[#a1a1a1] text-[1.4rem] relative flex flex-col gap-5 rounded-2xl | p-6 pb-10 border-b border-black h-full w-full`}
        >
          {/* Resumo do jogo */}
          <p>
            Descubra qual a palavra diária dentro das tentativas disponíveis.
            Cada tentativa irá revelar dicas do quão perto está de acertar.
          </p>

          {/* Exemplo do verde */}
          <div className={`flex flex-rol h-auto w-auto gap-[0.5rem] font-bold`}>
            <div
              className={`flex items-center justify-center | w-16 h-16 | bg-[#188a56] rounded-md`}
            >
              <p className={`text-4xl text-white`}>F</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>I</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>N</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>A</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>L</p>
            </div>
          </div>
          {/* Explicação do verde */}
          <p>
            <div className={`h-auto w-auto flex flex-row items-end`}>
              A letra
              <div
                className={`flex items-center justify-center mx-2 | w-9 h-9 | bg-[#188a56] rounded-md`}
              >
                <p className={`text-[1.4rem] text-white`}>F</p>
              </div>
              está presente na palavra e está na posição correta.
            </div>
          </p>

          {/* Exemplo do amarelo */}
          <div className={`flex flex-rol h-auto w-auto gap-[0.5rem] font-bold`}>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>B</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>U</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>S</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | bg-[#aea523] rounded-md`}
            >
              <p className={`text-4xl text-white`}>C</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>A</p>
            </div>
          </div>
          {/* Explicação do amarelo */}
          <p>
            <div className={`h-auto w-auto flex flex-row items-end`}>
              A letra
              <div
                className={`flex items-center justify-center mx-2 | w-9 h-9 | bg-[#aea523] rounded-md`}
              >
                <p className={`text-[1.4rem] text-white`}>C</p>
              </div>
              está presente na palavra mas em outra posição.
            </div>
          </p>
          {/* Exemplo do preto */}
          <div className={`flex flex-rol h-auto w-auto gap-[0.5rem] font-bold`}>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>C</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | bg-[#2c2c2c] rounded-md`}
            >
              <p className={`text-4xl text-white`}>E</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>R</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>T</p>
            </div>
            <div
              className={`flex items-center justify-center | w-16 h-16 | border-x-[4px] border-y-[4px] border-[#7d7d7d] rounded-md`}
            >
              <p className={`text-4xl text-white`}>O</p>
            </div>
          </div>
          {/* Explicação do amarelo */}
          <p>
            <div className={`h-auto w-auto flex flex-row items-end`}>
              A letra
              <div
                className={`flex items-center justify-center mx-2 | w-9 h-9 | bg-[#2c2c2c] rounded-md`}
              >
                <p className={`text-[1.4rem] text-white`}>E</p>
              </div>
              não está presente na palavra.
            </div>
          </p>
        </div>
      </div>
    </main>
  );
};

//exportar função principal
export default HowToPlayModal;
