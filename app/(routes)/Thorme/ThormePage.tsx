"use client";

//importar bibliotecas e funções

import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { HiChevronUp } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";
import { MdLeaderboard, MdSubdirectoryArrowLeft } from "react-icons/md";
import useHowToPlayModal from "@/app/(general)/components/hooks/useHowToPlayModal";
import useProgressModal from "@/app/(general)/components/hooks/useProgressModal";
import useSettingsModal from "@/app/(general)/components/hooks/useSettingsModal";
import HowToPlayModal from "@/app/(general)/components/modals/HowToPlayModal";
import ProgressModal from "@/app/(general)/components/modals/ProgressModal";
import SettingsModal from "@/app/(general)/components/modals/SettingsModal";

//função principal
const Thorme = () => {
  //definir constantes
  const router = useRouter();
  const { isOpenH2P, onOpenH2P, onCloseH2P } = useHowToPlayModal();
  const { isOpenProgress, onOpenProgress, onCloseProgress } =
    useProgressModal();
  const { isOpenSettings, onOpenSettings, onCloseSettings } =
    useSettingsModal();

  const onClickThormeDuo = () => {
    router.push("/ThormeDuo");
    router.refresh();
  };

  type charactersType = {
    firstCharacter: string;
    secondCharacter: string;
    thirdCharacter: string;
    fourthCharacter: string;
    fifthCharacter: string;
  }[];
  type StageData = {
    firstCharacter: string;
    secondCharacter: string;
    thirdCharacter: string;
    fourthCharacter: string;
    fifthCharacter: string;
  };
  const charactersStorage = [
    {
      firstCharacter: "",
      secondCharacter: "",
      thirdCharacter: "",
      fourthCharacter: "",
      fifthCharacter: "",
    },
    {
      firstCharacter: "",
      secondCharacter: "",
      thirdCharacter: "",
      fourthCharacter: "",
      fifthCharacter: "",
    },
    {
      firstCharacter: "",
      secondCharacter: "",
      thirdCharacter: "",
      fourthCharacter: "",
      fifthCharacter: "",
    },
    {
      firstCharacter: "",
      secondCharacter: "",
      thirdCharacter: "",
      fourthCharacter: "",
      fifthCharacter: "",
    },
    {
      firstCharacter: "",
      secondCharacter: "",
      thirdCharacter: "",
      fourthCharacter: "",
      fifthCharacter: "",
    },
    {
      firstCharacter: "",
      secondCharacter: "",
      thirdCharacter: "",
      fourthCharacter: "",
      fifthCharacter: "",
    },
  ];
  const [characters, setCharacters] =
    useState<charactersType>(charactersStorage);
  const [word, setWord] = useState("AREIA");
  const [selectedCharacter, setSelectedCharacter] = useState({
    row: 1,
    column: 1,
  });
  const stages = [1, 2, 3, 4, 5, 6];
  const [stage, setStage] = useState(1);
  const [focusedInput, setFocusedInput] = useState(null);
  const verifyCharacter: string[] = [];
  type userTryType = {
    firstTry: { try: string; isCorrect: string }[];
    secondTry: { try: string; isCorrect: string }[];
    thirdTry: { try: string; isCorrect: string }[];
    fourthTry: { try: string; isCorrect: string }[];
    fifthTry: { try: string; isCorrect: string }[];
    sixthTry: { try: string; isCorrect: string }[];
  };
  const userTryStorage = {
    firstTry: [],
    secondTry: [],
    thirdTry: [],
    fourthTry: [],
    fifthTry: [],
    sixthTry: [],
  };
  const [userTry, setUserTry] = useState<userTryType>(userTryStorage);
  const stageData: StageData = {
    firstCharacter: "a",
    secondCharacter: "b",
    thirdCharacter: "c",
    fourthCharacter: "d",
    fifthCharacter: "e",
  };
  const letterColors: Record<string, string> = {
    a: "green",
    b: "yellow",
    c: "black",
  };

  const checkWord = (enteredWord: string, targetWord: string) => {
    const result: string[] = [];

    for (let i = 0; i < targetWord.length; i++) {
      const targetChar = targetWord[i];
      const enteredChar = enteredWord[i];

      if (enteredChar === targetChar) {
        result.push("green"); // Posição correta
      } else if (targetWord.includes(enteredChar)) {
        result.push("yellow"); // Posição incorreta
      } else {
        result.push("black"); // Não há na palavra
      }
    }

    return result;
  };

  const [squareColors, setSquareColors] = useState<string[]>(Array(5).fill("")); // Inicialize com um array vazio para cada quadrado

  const onKeyDownInput = (
    event: React.KeyboardEvent<HTMLElement>,
    id: string,
    data: number
  ) => {
    event.preventDefault();

    if (id === "firstColumn") {
      if (event.code === "Tab" || event.code === "ArrowRight") {
        const nextCharacter = document.getElementById(`secondColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
      if (event.code === "Delete" || event.code === "Backspace") {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1) return { ...character, firstCharacter: "" };
          return character;
        });
        setCharacters(updatedCharacters);
        setSelectedCharacter({ row: data, column: 1 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1)
            return { ...character, firstCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`secondColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
    }

    if (id === "secondColumn") {
      if (event.code === "Tab" || event.code === "ArrowRight") {
        const nextCharacter = document.getElementById(`thirdColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
      if (event.code === "Delete" || event.code === "Backspace") {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1) return { ...character, secondCharacter: "" };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`firstColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 1 });
        return;
      }
      if (event.code === "ArrowLeft") {
        const lastCharacter = document.getElementById(`firstColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 1 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1)
            return { ...character, secondCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`thirdColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
    }

    if (id === "thirdColumn") {
      if (event.code === "Tab" || event.code === "ArrowRight") {
        const nextCharacter = document.getElementById(`fourthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
      if (event.code === "Delete" || event.code === "Backspace") {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1) return { ...character, thirdCharacter: "" };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`secondColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
      if (event.code === "ArrowLeft") {
        const lastCharacter = document.getElementById(`secondColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 2 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1)
            return { ...character, thirdCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`fourthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
    }

    if (id === "fourthColumn") {
      if (event.code === "Tab" || event.code === "ArrowRight") {
        const nextCharacter = document.getElementById(`fifthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 5 });
        return;
      }
      if (event.code === "Delete" || event.code === "Backspace") {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1) return { ...character, fourthCharacter: "" };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`thirdColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
      if (event.code === "ArrowLeft") {
        const lastCharacter = document.getElementById(`thirdColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 3 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1)
            return { ...character, fourthCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        const nextCharacter = document.getElementById(`fifthColumn-${data}`);
        if (nextCharacter) nextCharacter.focus();
        setSelectedCharacter({ row: data, column: 5 });
        return;
      }
    }

    if (id === "fifthColumn") {
      if (event.code === "Delete" || event.code === "Backspace") {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1) return { ...character, fifthCharacter: "" };
          return character;
        });
        setCharacters(updatedCharacters);
        const lastCharacter = document.getElementById(`fourthColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
      if (event.code === "ArrowLeft") {
        const lastCharacter = document.getElementById(`fourthColumn-${data}`);
        if (lastCharacter) lastCharacter.focus();
        setSelectedCharacter({ row: data, column: 4 });
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        const updatedCharacters = characters.map((character, index) => {
          if (index === data - 1)
            return { ...character, fifthCharacter: event.key.toUpperCase() };
          return character;
        });
        setCharacters(updatedCharacters);
        setSelectedCharacter({ row: data, column: 5 });
        return;
      }
    }

    if (event.key === "Enter") {
      const receivedWord = `${characters[data - 1].firstCharacter}${characters[data - 1].secondCharacter}${characters[data - 1].thirdCharacter}${characters[data - 1].fourthCharacter}${characters[data - 1].fifthCharacter}`;
      const receivedCharacters = { ...characters[data - 1] };
      if (
        !receivedCharacters.firstCharacter ||
        !receivedCharacters.secondCharacter ||
        !receivedCharacters.thirdCharacter ||
        !receivedCharacters.fourthCharacter ||
        !receivedCharacters.fifthCharacter
      ) {
        return;
      }

      if (!receivedWord) {
        return;
      }

      const resultColors = checkWord(
        receivedWord.toUpperCase(),
        word.toUpperCase()
      );

      setSquareColors(resultColors);

      if (receivedWord.toUpperCase() === word.toUpperCase()) {
        console.log("Deu certo");
        // código para mostrar que acertou a palavra.
      } else {
        console.log("Palavra Incorreta");
        console.log(resultColors);

        // código para verificar os caracteres.

        for (let a = 0; a < receivedWord.length; a++) {
          for (let b = 0; b < word.length; b++) {
            if (receivedWord[a] === word[b]) {
              if (!verifyCharacter.includes(receivedWord[a])) {
                verifyCharacter.push(receivedWord[a]);
              }
            }
          }
        }
        for (let a = 0; a < receivedWord.length; a++) {
          if (verifyCharacter.includes(receivedWord[a])) {
            console.log(
              `pintei de amarelo ou verde a letra ${receivedWord[a]}`
            );
          } else {
            console.log(`pintei de preto a letra ${receivedWord[a]}`);
          }
        }
        console.log(verifyCharacter);
      }

      if (stage === 1) {
        for (let b = 0; b < receivedWord.length; b++) {
          let firstCharacter = {};
          if (b === 0) {
            firstCharacter = {
              try: receivedCharacters.firstCharacter,
              isCorrect:
                word[b].toUpperCase() === receivedWord[b].toUpperCase()
                  ? "green"
                  : `${verifyCharacter.includes(receivedWord[b].toUpperCase()) ? "yellow" : "black"}`,
            };
          }

          let secondCharacter = {};
          if (b === 1) {
            secondCharacter = {
              try: receivedCharacters.secondCharacter,
              isCorrect:
                word[b].toUpperCase() === receivedWord[b].toUpperCase()
                  ? "green"
                  : `${verifyCharacter.includes(receivedWord[b].toUpperCase()) ? "yellow" : "black"}`,
            };
          }

          let thirdCharacter = {};
          if (b === 2) {
            thirdCharacter = {
              try: receivedCharacters.thirdCharacter,
              isCorrect:
                word[b].toUpperCase() === receivedWord[b].toUpperCase()
                  ? "green"
                  : `${verifyCharacter.includes(receivedWord[b].toUpperCase()) ? "yellow" : "black"}`,
            };
          }

          let fourthCharacter = {};
          if (b === 3) {
            fourthCharacter = {
              try: receivedCharacters.fourthCharacter,
              isCorrect:
                word[b].toUpperCase() === receivedWord[b].toUpperCase()
                  ? "green"
                  : `${verifyCharacter.includes(receivedWord[b].toUpperCase()) ? "yellow" : "black"}`,
            };
          }

          let fifthCharacter = {};
          if (b === 4) {
            fifthCharacter = {
              try: receivedCharacters.fifthCharacter,
              isCorrect:
                word[b].toUpperCase() === receivedWord[b].toUpperCase()
                  ? "green"
                  : `${verifyCharacter.includes(receivedWord[b].toUpperCase()) ? "yellow" : "black"}`,
            };
          }
        }
      }
    }
  };
  const renderSquare = (
    character: string,
    inputId: string,
    isEditable: boolean
  ) => {
    const color = letterColors[character.toLowerCase()] || "corPadrao";

    return (
      <div
        key={inputId}
        className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${color} rounded-md ${isEditable ? "" : "bg-gray-600/60"}`}
      >
        <input
          type="text"
          id={inputId}
          className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
          maxLength={1}
          value={character}
          onChange={() => {}}
          onKeyDown={(event) =>
            onKeyDownInput(event, inputId, parseInt(inputId.split("-")[1]))
          }
          onFocus={() =>
            setSelectedCharacter({
              row: parseInt(inputId.split("-")[1]),
              column: parseInt(inputId.split("-")[1]),
            })
          }
          disabled={!isEditable}
        />
      </div>
    );
  };

  return (
    <main
      className={`bg-[#272b34] flex min-h-screen flex-col items-center justify-between select-none`}
    >
      <div
        className={`bg-[#212121] w-full h-16 text-white font-bold flex flex-row items-center justify-start gap-10 px-10`}
      >
        <button
          className={`w-[6rem] h-[2rem] border-2`}
          onClick={onClickThormeDuo}
        >
          <p>THORME</p>
        </button>
        <button className={`w-[8rem] h-[2rem] border-2`}>
          <p>THORME DUO</p>
        </button>
        <button className={`w-[11rem] h-[2rem] border-2`}>
          <p>THORME QUATTRO</p>
        </button>
      </div>
      <HowToPlayModal isOpen={isOpenH2P} onClose={onCloseH2P} />
      <ProgressModal isOpen={isOpenProgress} onClose={onCloseProgress} />
      <SettingsModal isOpen={isOpenSettings} onClose={onCloseSettings} />
      <div
        className={`pt-3 px-[20rem] flex flex-row items-center justify-between w-full`}
      >
        <div className={`flex flex-row gap-2`}>
          <button
            className={`w-8 h-8 flex items-center justify-center thorme-button border-[#a1a1a1] rounded-md`}
          >
            <HiChevronUp className={`text-3xl text-[#a1a1a1]`} />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center thorme-button border-[#a1a1a1] rounded-md`}
            onClick={onOpenH2P}
          >
            <BsQuestionLg className="text-[20px] text-[#a1a1a1]" />
          </button>
        </div>
        <div>
          <h1 className="thorme-title font- text-2xl text-white">THORME</h1>
        </div>
        <div className=" flex flex-row gap-2">
          <button
            className="w-8 h-8 flex items-center justify-center thorme-button border-[#a1a1a1] rounded-md"
            onClick={onOpenProgress}
          >
            <MdLeaderboard className="text-xl text-[#a1a1a1]" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center thorme-button border-[#a1a1a1] rounded-md"
            onClick={onOpenSettings}
          >
            <FaGear className="text-base text-[#a1a1a1]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        {stages.map((data, index) => {
          const stageData = characters[data - 1];
          return (
            <div key={index} className={`flex flex-row gap-[0.5rem] w-full `}>
              <div
                className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${selectedCharacter.row === data && selectedCharacter.column === 1 ? "border-b-[10px]" : "border-b-[4px]"}  border-white rounded-md ${stage === data ? "" : "bg-gray-600/60"}`}
              >
                <input
                  type="text"
                  id={`firstColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].firstCharacter}
                  onChange={() => {}}
                  onKeyDown={(event) =>
                    onKeyDownInput(event, "firstColumn", data)
                  }
                  onFocus={() => setSelectedCharacter({ row: data, column: 1 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div
                className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${selectedCharacter.row === data && selectedCharacter.column === 2 ? "border-b-[10px]" : "border-b-[4px]"}  border-white rounded-md  ${stage === data ? "" : "bg-gray-600/60"}`}
              >
                <input
                  type="text"
                  id={`secondColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].secondCharacter}
                  onChange={() => {}}
                  onKeyDown={(event) =>
                    onKeyDownInput(event, "secondColumn", data)
                  }
                  onFocus={() => setSelectedCharacter({ row: data, column: 2 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div
                className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${selectedCharacter.row === data && selectedCharacter.column === 3 ? "border-b-[10px]" : "border-b-[4px]"}  border-white rounded-md  ${stage === data ? "" : "bg-gray-600/60"}`}
              >
                <input
                  type="text"
                  id={`thirdColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].thirdCharacter}
                  onChange={() => {}}
                  onKeyDown={(event) =>
                    onKeyDownInput(event, "thirdColumn", data)
                  }
                  onFocus={() => setSelectedCharacter({ row: data, column: 3 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div
                className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${selectedCharacter.row === data && selectedCharacter.column === 4 ? "border-b-[10px]" : "border-b-[4px]"}  border-white rounded-md  ${stage === data ? "" : "bg-gray-600/60"}`}
              >
                <input
                  type="text"
                  id={`fourthColumn-${data}`}
                  className="w-16 h-20| text-5xl text-white text-center font-extrabold border-0 outline-none  bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].fourthCharacter}
                  onChange={() => {}}
                  onKeyDown={(event) =>
                    onKeyDownInput(event, "fourthColumn", data)
                  }
                  onFocus={() => setSelectedCharacter({ row: data, column: 4 })}
                  disabled={stage === data ? false : true}
                />
              </div>
              <div
                className={`flex items-center justify-center | w-20 h-20 | border-x-[4px] border-t-[4px] ${selectedCharacter.row === data && selectedCharacter.column === 5 ? "border-b-[10px]" : "border-b-[4px]"}  border-white rounded-md  ${stage === data ? "" : "bg-gray-600/60"}`}
              >
                <input
                  type="text"
                  id={`fifthColumn-${data}`}
                  className="w-16 h-20 | text-5xl text-white text-center font-extrabold border-0 outline-none bg-transparent"
                  maxLength={1}
                  value={characters[data - 1].fifthCharacter}
                  onChange={() => {}}
                  onKeyDown={(event) =>
                    onKeyDownInput(event, "fifthColumn", data)
                  }
                  onFocus={() => setSelectedCharacter({ row: data, column: 5 })}
                  disabled={stage === data ? false : true}
                />
              </div>
            </div>
          );
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
    </main>
  );
};

export default Thorme;
