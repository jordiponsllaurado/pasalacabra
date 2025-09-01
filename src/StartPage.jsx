import { PlayIcon } from "./assets/icons";

const StartPage = ({ handleStartGame }) => (
  <div className="text-center">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 dark:text-white">
      Benvingut!
    </h1>
    <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 dark:text-gray-400">
      A punt per al desafiament del Rosco?
    </p>
    <button
      onClick={handleStartGame}
      className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      <PlayIcon /> Començar a Jugar
    </button>
  </div>
);

export default StartPage;
