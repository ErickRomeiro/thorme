'use client';

//importar bibliotecas e funções
import { IconType } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';

//definir a tipagem da função
interface ModalProps {
    isOpen?: boolean,
    disabled?: boolean,
    title?: string,
    body?: React.ReactElement,
    footer?: React.ReactElement,
    primaryActionLabel?: string,
    primaryAction?: () => void,
    secondaryActionLabel?: string,
    secondaryActionIcon?: IconType,
    classNameSecondaryActionIcon?: string,
    secondaryAction?: () => void,
    onClose: () => void,

    tableColumns?: any,
    tableRows?: any,
    onClickEdit?: (id: any, data?: any) => void,
    onClickRemove?: (id: any) => void,
    shortTable?: boolean,
}

//função principal
const Modal: React.FC<ModalProps> = ({ isOpen, disabled, title, body, footer, primaryActionLabel, primaryAction, secondaryActionLabel, secondaryActionIcon: SecondaryActionIcon, classNameSecondaryActionIcon, secondaryAction, onClose, tableColumns, tableRows, onClickEdit, onClickRemove, shortTable }) => {

    //definir constantes
    const [showModal, setShowModal] = useState(isOpen);

    //função para mostrar/ocultar modal
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    //função para fechar o modal
    const onClickClose = () => {
        if (disabled) return;

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }

    //função para finalizar o formulário
    const onClickSubmit = () => {
        if (disabled) return;
        if (primaryAction) primaryAction();
    }

    //função para executar a função do botão secundário
    const onClickSecondaryAction = () => {
        if (disabled || !secondaryAction) return;
        secondaryAction();
    }

    //se o modal estiver fechado
    if (!isOpen) return null;

    //resultado da função principal
    return (
        <div className={`flex items-start justify-center fixed inset-0 z-50 | bg-neutral-800/70 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200/50 dark:scrollbar-thumb-quaternary-dark/50 scrollbar-track-secondary-white dark:scrollbar-track-navbar-dark outline-none focus:outline-none`} >
            <div className={`relative | w-full md:w-4/6 lg:w-3/6 xl:w-2/5 mx-auto h-full`} >
                <div className={`h-full md:py-10 | translate duration-300 | ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} >
                    <div className={`relative flex flex-col | w-full sm:h-auto | bg-primary-white dark:bg-primary-dark border-0 rounded-lg shadow-lg outline-none focus:outline-none | translate`} >

                        {/* cabeçalho */}
                        <div className={`relative flex items-center justify-end sm:justify-center | p-6 | rounded-t border-b-[1px] border-quaternary-white dark:border-quaternary-dark`} >
                            <button
                                className={`absolute left-9 | p-1 | text-tertiary-white dark:text-tertiary-dark border-0 hover:opacity-70 | transition`}
                                onClick={onClickClose}
                            >
                                <IoMdClose size={18} />
                            </button>
                            <div className={`text-lg text-tertiary-white dark:text-tertiary-dark font-semibold`}>
                                {title}
                            </div>
                        </div>

                        {/* corpo */}
                        <div className={`relative flex-auto | p-6`}>
                            {body}
                        </div>

                        {/* rodapé */}
                        {primaryAction && primaryActionLabel && (
                            <div className={`flex flex-col | gap-2 p-6`}>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 items-center | gap-4 w-full`} >


                                    {secondaryAction && SecondaryActionIcon && (
                                        <div className='flex flex-row items-end justify-end'>
                                            <SecondaryActionIcon
                                                className={classNameSecondaryActionIcon}
                                                onClick={onClickSecondaryAction}
                                                size={25}
                                            />
                                        </div>
                                    )}
                                </div>
                                {footer}
                            </div>
                        )}

                        {/* tabela */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

//exportar função principal
export default Modal;