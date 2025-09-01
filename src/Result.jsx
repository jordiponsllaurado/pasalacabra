import { RestartIcon } from "./assets/icons";

const Result = ({ score, incorrectCount, handleStartGame }) => (
  <div className="text-center p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Joc Acabat!</h2>
    <p className="mb-6 text-gray-600 dark:text-gray-400">
      Has completat el Rosco.
    </p>
    <div className="text-lg sm:text-xl mb-6">
      <p>
        Resultad:
        <strong className="text-green-500">{score} encerts</strong> i{" "}
        <strong className="text-red-500">{incorrectCount} errors</strong>.
      </p>
    </div>
    <button
      onClick={handleStartGame}
      className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      <RestartIcon /> Jugar de Nou
    </button>
  </div>
);

export default Result;
