'use client';

import useWinnerModal from "@/app/hooks/winner/useWinnerModal";
import Modal from "../Modal";

//função principal
const WinnerModal = () => {

    //definir as constantes
    const useWinnerModalHook = useWinnerModal();

    //função para direcionar o input de email
    const onKeyDownEmail = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const nextInput = document.getElementById('password');
            if (nextInput) nextInput.focus();
        }
    };

    //função para direcionar o input de password
    const onKeyDownPassword = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
        }
    };

    //definir o corpo do modal
    const bodyContent = (
        <div className={`flex flex-col | gap-4`}>
        </div>
    )

    //definir o rodapé do modal
    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <p>Deseja criar uma conta?
                    <span
                        className='text-neutral-800 cursor-pointer hover:underline font-bold ml-1'>Registrar</span>
                </p>
            </div>
        </div>
    )

    //resultado da função principal
    return (
        <Modal
            onClose={() => {

            }}
        />
    );
}

//exportar função principal
export default WinnerModal;