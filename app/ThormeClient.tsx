'use client'

import { HiChevronUp, HiColorSwatch } from "react-icons/hi";
import { FaGear } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { FiDelete } from "react-icons/fi";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import React, { useState, useRef } from 'react';
import useWinnerModal from "./hooks/winner/useWinnerModal";

const ThormeClient = () => {

  // definir constantes
  type charactersType = { firstCharacter: string, secondCharacter: string, thirdCharacter: string, fourthCharacter: string, fifthCharacter: string }[]
  type StageData = {
    firstCharacter: string;
    secondCharacter: string;
    thirdCharacter: string;
    fourthCharacter: string;
    fifthCharacter: string;
  };
  const charactersStorage = [
    { firstCharacter: '', secondCharacter: '', thirdCharacter: '', fourthCharacter: '', fifthCharacter: '' },
    { firstCharacter: '', secondCharacter: '', thirdCharacter: '', fourthCharacter: '', fifthCharacter: '' },
    { firstCharacter: '', secondCharacter: '', thirdCharacter: '', fourthCharacter: '', fifthCharacter: '' },
    { firstCharacter: '', secondCharacter: '', thirdCharacter: '', fourthCharacter: '', fifthCharacter: '' },
    { firstCharacter: '', secondCharacter: '', thirdCharacter: '', fourthCharacter: '', fifthCharacter: '' },
    { firstCharacter: '', secondCharacter: '', thirdCharacter: '', fourthCharacter: '', fifthCharacter: '' }
  ]
  const [characters, setCharacters] = useState<charactersType>(charactersStorage);
  const [word, setWord] = useState('AREIA');
  const [selectedCharacter, setSelectedCharacter] = useState({ row: 1, column: 1 });
  const stages = [1, 2, 3, 4, 5, 6];
  const [stage, setStage] = useState(1);
  type userTryType = { firstTry: string[], secondTry: string[], thirdTry: string[], fourthTry: string[], fifthTry: string[], sixthTry: string[] }
  const userTryStorage = { firstTry: [], secondTry: [], thirdTry: [], fourthTry: [], fifthTry: [], sixthTry: [] }
  const [userTry, setUserTry] = useState<userTryType>(userTryStorage)
  const [firstTry, setFirstTry] = useState<string[]>([]);
  const [secondTry, setSecondTry] = useState<string[]>([]);
  const [thirdTry, setThirdTry] = useState<string[]>([]);
  const [fourthTry, setFourthTry] = useState<string[]>([]);
  const [fifthTry, setFifthTry] = useState<string[]>([]);
  const [sixthTry, setSixthTry] = useState<string[]>([]);
  const useWinnerModalHook = useWinnerModal();

  //Constante para dar os "parabéns" por ter acertado
  // const [showCongratulations, setShowCongratulations] = useState(false);

  const onKeyDownInput = (
    event: React.KeyboardEvent<HTMLElement>,
    id: string,
    data: number
  ) => {
    event.preventDefault();

    if (id === 'firstColumn') {
      if (event.code === 'Tab' || event.code === 'ArrowRight') {
        const nextCharacter = document.getElementById(`secondColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
      if (event.code === 'Delete' || event.code === 'Backspace') {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, firstCharacter: '' };
          return character;
        });
        setCharacters(updatedCharacters);
        setSelectedCharacter({ row: data, column: 1 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, firstCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`secondColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
    }

    if (id === 'secondColumn') {
      if (event.code === 'Tab' || event.code === 'ArrowRight') {
        const nextCharacter = document.getElementById(`thirdColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
      if (event.code === 'Delete' || event.code === 'Backspace') {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, secondCharacter: '' };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`firstColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 1 });
        return;
      }
      if (event.code === 'ArrowLeft') {
        const lastCharacter = document.getElementById(`firstColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 1 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, secondCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`thirdColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
    }

    if (id === 'thirdColumn') {
      if (event.code === 'Tab' || event.code === 'ArrowRight') {
        const nextCharacter = document.getElementById(`fourthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
      if (event.code === 'Delete' || event.code === 'Backspace') {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, thirdCharacter: '' };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`secondColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
      if (event.code === 'ArrowLeft') {
        const lastCharacter = document.getElementById(`secondColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, thirdCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`fourthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
    }

    if (id === 'fourthColumn') {
      if (event.code === 'Tab' || event.code === 'ArrowRight') {
        const nextCharacter = document.getElementById(`fifthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 5 });
        return;
      }
      if (event.code === 'Delete' || event.code === 'Backspace') {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, fourthCharacter: '' };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`thirdColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
      if (event.code === 'ArrowLeft') {
        const lastCharacter = document.getElementById(`thirdColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, fourthCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`fifthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 5 });
        return;
      }
    }

    if (id === 'fifthColumn') {
      if (event.code === 'Delete' || event.code === 'Backspace') {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, fifthCharacter: '' };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`fourthColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
      if (event.code === 'ArrowLeft') {
        const lastCharacter = document.getElementById(`fourthColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === (data - 1)) return { ...character, fifthCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        setSelectedCharacter({ row: data, column: 5 });
        return;
      }
    }

    if (event.key === 'Enter') {
      const receivedWord = `${characters[data - 1].firstCharacter}${characters[data - 1].secondCharacter}${characters[data - 1].thirdCharacter}${characters[data - 1].fourthCharacter}${characters[data - 1].fifthCharacter}`
      const receivedCharacters = { ...characters[data - 1] };
      if (!receivedCharacters.firstCharacter || !receivedCharacters.secondCharacter || !receivedCharacters.thirdCharacter || !receivedCharacters.fourthCharacter || !receivedCharacters.fifthCharacter) {
        return;
      }

      if (!receivedWord) {
        return;
      }

      const result: string[] = [];

      for (let i = 0; i < word.length; i++) {
        const targetChar = word[i];
        const enteredChar = receivedWord[i];

        if (enteredChar === targetChar) {
          result.push('green'); // Posição correta
        } else if (word.includes(enteredChar)) {
          result.push('yellow'); // Posição incorreta
        } else {
          result.push('black'); // Não há na palavra
        }
      }

      if (data === 1) setFirstTry(result);
      if (data === 2) setSecondTry(result);
      if (data === 3) setThirdTry(result);
      if (data === 4) setFourthTry(result);
      if (data === 5) setFifthTry(result);
      if (data === 6) setSixthTry(result);

      if (stage >= 1) {
        if (stage === 6) {
          //// Verificar se a palavra foi adivinhada corretamente, limpe a linha e mova o foco para a próxima linha
          const isWordGuessedCorrectly = result.every(color => color === 'green');
          if (isWordGuessedCorrectly) {
            console.log('vencedor');
            useWinnerModalHook.onOpen()
            // Adicione qualquer lógica adicional que você deseja executar quando a palavra é adivinhada corretamente

          }

          return;
        }
        setStage(stage + 1);
      }
      return
    }
  };

  return (
    <main className="bg-[#215586] flex min-h-screen flex-col items-center justify-between">
      <div className="py-3 px-3  flex flex-row items-center justify-between w-full">
        <div className="flex flex-row gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-[#13314d] border-white rounded-md">
            <HiChevronUp className="text-white w-8 h-8" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-[#13314d] border-white rounded-md">
            <span className="font-bold text-2xl text-white">?</span>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-4xl text-white">THORME!</h1>
        </div>
        <div className=" flex flex-row gap-2">
          <div className=" h-8 w-8 flex items-center justify-center bg-[#13314d] border-white rounded-md">
            <VscGraph className="text-white w-5 h-5 " />
          </div>
          <div className=" h-8 w-8 flex items-center justify-center bg-[#13314d] border-white rounded-md">
            <FaGear className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        {stages.map((data, index) => {
          const stageData = characters[data - 1];
          return (
            <div key={index} className={`flex flex-row gap-[0.5rem] w-full `}>
              <div className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${(selectedCharacter.row === (data) && selectedCharacter.column === 1) ? 'border-b-[10px]' : 'border-b-[4px]'}  border-white rounded-md ${stage === data ? `` : `${data === 1 && firstTry.length ? `${firstTry[0] === 'green' ? 'bg-green-600' : `${firstTry[0] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 2 && secondTry.length ? `${secondTry[0] === 'green' ? 'bg-green-600' : `${secondTry[0] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 3 && thirdTry.length ? `${thirdTry[0] === 'green' ? 'bg-green-600' : `${thirdTry[0] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 4 && fourthTry.length ? `${fourthTry[0] === 'green' ? 'bg-green-600' : `${fourthTry[0] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 5 && fifthTry.length ? `${fifthTry[0] === 'green' ? 'bg-green-600' : `${fifthTry[0] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 6 && sixthTry.length ? `${sixthTry[0] === 'green' ? 'bg-green-600' : `${sixthTry[0] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : 'bg-gray-600/60'}`}`}`}`}`}`}`}>
                <input
                  type="text"
                  id={`firstColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].firstCharacter}
                  onChange={() => { }}
                  onKeyDown={(event) => onKeyDownInput(event, 'firstColumn', data)}
                  onFocus={() => setSelectedCharacter({ row: data, column: 1 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${(selectedCharacter.row === (data) && selectedCharacter.column === 2) ? 'border-b-[10px]' : 'border-b-[4px]'}  border-white rounded-md ${stage === data ? `` : `${data === 1 && firstTry.length ? `${firstTry[1] === 'green' ? 'bg-green-600' : `${firstTry[1] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 2 && secondTry.length ? `${secondTry[1] === 'green' ? 'bg-green-600' : `${secondTry[1] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 3 && thirdTry.length ? `${thirdTry[1] === 'green' ? 'bg-green-600' : `${thirdTry[1] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 4 && fourthTry.length ? `${fourthTry[1] === 'green' ? 'bg-green-600' : `${fourthTry[1] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 5 && fifthTry.length ? `${fifthTry[1] === 'green' ? 'bg-green-600' : `${fifthTry[1] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 6 && sixthTry.length ? `${sixthTry[1] === 'green' ? 'bg-green-600' : `${sixthTry[1] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : 'bg-gray-600/60'}`}`}`}`}`}`}`}>
                <input
                  type="text"
                  id={`secondColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].secondCharacter}
                  onChange={() => { }}
                  onKeyDown={(event) => onKeyDownInput(event, 'secondColumn', data)}
                  onFocus={() => setSelectedCharacter({ row: data, column: 2 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${(selectedCharacter.row === (data) && selectedCharacter.column === 3) ? 'border-b-[10px]' : 'border-b-[4px]'}  border-white rounded-md ${stage === data ? `` : `${data === 1 && firstTry.length ? `${firstTry[2] === 'green' ? 'bg-green-600' : `${firstTry[2] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 2 && secondTry.length ? `${secondTry[2] === 'green' ? 'bg-green-600' : `${secondTry[2] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 3 && thirdTry.length ? `${thirdTry[2] === 'green' ? 'bg-green-600' : `${thirdTry[2] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 4 && fourthTry.length ? `${fourthTry[2] === 'green' ? 'bg-green-600' : `${fourthTry[2] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 5 && fifthTry.length ? `${fifthTry[2] === 'green' ? 'bg-green-600' : `${fifthTry[2] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 6 && sixthTry.length ? `${sixthTry[2] === 'green' ? 'bg-green-600' : `${sixthTry[2] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : 'bg-gray-600/60'}`}`}`}`}`}`}`}>
                <input
                  type="text"
                  id={`thirdColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].thirdCharacter}
                  onChange={() => { }}
                  onKeyDown={(event) => onKeyDownInput(event, 'thirdColumn', data)}
                  onFocus={() => setSelectedCharacter({ row: data, column: 3 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${(selectedCharacter.row === (data) && selectedCharacter.column === 4) ? 'border-b-[10px]' : 'border-b-[4px]'}  border-white rounded-md ${stage === data ? `` : `${data === 1 && firstTry.length ? `${firstTry[3] === 'green' ? 'bg-green-600' : `${firstTry[3] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 2 && secondTry.length ? `${secondTry[3] === 'green' ? 'bg-green-600' : `${secondTry[3] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 3 && thirdTry.length ? `${thirdTry[3] === 'green' ? 'bg-green-600' : `${thirdTry[3] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 4 && fourthTry.length ? `${fourthTry[3] === 'green' ? 'bg-green-600' : `${fourthTry[3] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 5 && fifthTry.length ? `${fifthTry[3] === 'green' ? 'bg-green-600' : `${fifthTry[3] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 6 && sixthTry.length ? `${sixthTry[3] === 'green' ? 'bg-green-600' : `${sixthTry[3] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : 'bg-gray-600/60'}`}`}`}`}`}`}`}>
                <input
                  type="text"
                  id={`fourthColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none  bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].fourthCharacter}
                  onChange={() => { }}
                  onKeyDown={(event) => onKeyDownInput(event, 'fourthColumn', data)}
                  onFocus={() => setSelectedCharacter({ row: data, column: 4 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${(selectedCharacter.row === (data) && selectedCharacter.column === 5) ? 'border-b-[10px]' : 'border-b-[4px]'}  border-white rounded-md ${stage === data ? `` : `${data === 1 && firstTry.length ? `${firstTry[4] === 'green' ? 'bg-green-600' : `${firstTry[4] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 2 && secondTry.length ? `${secondTry[4] === 'green' ? 'bg-green-600' : `${secondTry[4] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 3 && thirdTry.length ? `${thirdTry[4] === 'green' ? 'bg-green-600' : `${thirdTry[4] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 4 && fourthTry.length ? `${fourthTry[4] === 'green' ? 'bg-green-600' : `${fourthTry[4] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 5 && fifthTry.length ? `${fifthTry[4] === 'green' ? 'bg-green-600' : `${fifthTry[4] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : `${data === 6 && sixthTry.length ? `${sixthTry[4] === 'green' ? 'bg-green-600' : `${sixthTry[4] === 'yellow' ? 'bg-yellow-500' : 'bg-red-700'}`}` : 'bg-gray-600/60'}`}`}`}`}`}`}`}>
                <input
                  type="text"
                  id={`fifthColumn-${data}`}
                  className="w-16 h-20 | text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].fifthCharacter}
                  onChange={() => { }}
                  onKeyDown={(event) => onKeyDownInput(event, 'fifthColumn', data)}
                  onFocus={() => setSelectedCharacter({ row: data, column: 5 })}
                  disabled={stage === data ? false : true}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className="py-3 px-3  flex flex-col gap-2 ">
        <div className="flex flex-row gap-3">
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            Q
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            W
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            E
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            R
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            T
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            Y
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            U
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            I
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            O
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            P
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            A
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            S
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            D
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            F
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            G
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            H
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            J
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            K
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            L
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 flex items-center justify-center text-white text-xl">
            <FiDelete />
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            Z
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            X
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            C
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            V
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            B
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            N
          </div>
          <div className="bg-[#193f63] rounded-md w-10 h-10 text-2xl font-bold flex items-center justify-center text-white">
            M
          </div>
          <div className="bg-[#193f63] rounded-md w-40 h-10 text-2xl font-bold flex items-center justify-center text-white">
            <MdSubdirectoryArrowLeft />
          </div>
        </div>
      </div>
    </main >
  );
}

export default ThormeClient;