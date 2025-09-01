import { useCallback } from "react";
import { CheckIcon, RestartIcon, SkipIcon, XIcon } from "./assets/icons";
import { getQuestions } from "./data/questions";

const QuestionsCard = ({
  questions,
  currentIndex,
  setCurrentIndex,
  setQuestions,
}) => {
  const findNextIndex = useCallback(
    (startIndex) => {
      let nextIndex = (startIndex + 1) % questions.length;
      for (let i = 0; i < questions.length; i++) {
        if (
          questions[nextIndex].status === "unanswered" ||
          questions[nextIndex].status === "pasapalabra"
        ) {
          return nextIndex;
        }
        nextIndex = (nextIndex + 1) % questions.length;
      }
      return -1;
    },
    [questions]
  );

  const updateQuestionStatus = (status) => {
    const newQuestions = [...questions];
    newQuestions[currentIndex] = { ...questions[currentIndex], status };
    setQuestions(newQuestions);
    const nextIndex = findNextIndex(currentIndex);
    if (nextIndex !== -1) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePasapalabra = () => updateQuestionStatus("pasapalabra");
  const handleCorrect = () => updateQuestionStatus("correct");
  const handleIncorrect = () => {
    const currentQuestion = questions[currentIndex];
    const newQuestions = [...questions];
    newQuestions[currentIndex] = { ...currentQuestion, status: "incorrect" };
    setQuestions(newQuestions);
    const nextIndex = findNextIndex(currentIndex);
    if (nextIndex !== -1) {
      setCurrentIndex(nextIndex);
    }
  };

  const handleResetGame = () => {
    setQuestions(getQuestions());
    setCurrentIndex(0);
  };

  const currentQuestion = questions[currentIndex];
  return (
    <div className="w-full max-w-sm p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-4">
      <p className="text-center font-semibold text-base sm:text-lg text-blue-600 dark:text-blue-400 h-20 flex items-center justify-center">
        {currentQuestion?.question}
      </p>
      <p className="text-center font-semibold text-base sm:text-md text-blue-400 dark:text-blue-200 h-20 flex items-center justify-center">
        Resposta: {currentQuestion.answer}
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleCorrect}
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          <CheckIcon /> Correcte
        </button>
        <button
          onClick={handleIncorrect}
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          <XIcon /> Incorrecte
        </button>
        <button
          onClick={handlePasapalabra}
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          <SkipIcon /> Passalacabra
        </button>
      </div>
      <button
        onClick={handleResetGame}
        className="w-full flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
      >
        <RestartIcon /> Reiniciar
      </button>
    </div>
  );
};

export default QuestionsCard;
