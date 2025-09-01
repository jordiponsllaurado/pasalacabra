import { useState, useEffect, useMemo } from "react";
import Rosco from "./Rosco";
import { getQuestions } from "./data/questions";
import Result from "./Result";
import StartPage from "./StartPage";
import QuestionsCard from "./QuestionsCard";

export default function App() {
  const [questions, setQuestions] = useState(getQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState("idle"); // idle, playing, finished

  const score = useMemo(
    () => questions.filter((q) => q.status === "correct").length,
    [questions]
  );
  const incorrectCount = useMemo(
    () => questions.filter((q) => q.status === "incorrect").length,
    [questions]
  );
  const isGameFinished = useMemo(
    () =>
      !questions.some(
        (q) => q.status === "unanswered" || q.status === "pasapalabra"
      ),
    [questions]
  );

  useEffect(() => {
    if (gameState === "playing" && isGameFinished) {
      setGameState("finished");
    }
  }, [isGameFinished, gameState, questions]);

  const handleStartGame = () => {
    setQuestions(getQuestions());
    setCurrentIndex(0);
    setGameState("playing");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-2 sm:p-4 font-sans">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
        <div className="order-1 lg:order-2">
          <Rosco letters={questions} currentIndex={currentIndex} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-2 lg:order-3 mt-4 lg:mt-0">
          {gameState === "playing" && (
            <QuestionsCard
              questions={questions}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              setQuestions={setQuestions}
            />
          )}
          {gameState === "idle" && (
            <StartPage handleStartGame={handleStartGame} />
          )}
          {gameState === "finished" && (
            <Result
              score={score}
              incorrectCount={incorrectCount}
              handleStartGame={handleStartGame}
            />
          )}
        </div>
      </div>
    </div>
  );
}
