import React, { useState, useEffect, useMemo, useCallback } from 'react';

const getQuestions = () => [
    {
        letter: 'A',
        status: 'unanswered',
        question: 'Nom propi del millor president de la història de Catalunya',
        answer: 'Artur',
    },
    {
        letter: 'B',
        status: 'unanswered',
        question:
            'Segons les estudiants de quinze anys, el millor plufasso de història, de la història❤️',
        answer: 'Buisan',
    },
    {
        letter: 'C',
        status: 'unanswered',
        question:
            'Actor comprensiu i educat, principal referent de Marcel Buisan com a director de cinema',
        answer: 'Charansonnet',
    },
    {
        letter: 'ç',
        status: 'unanswered',
        question:
            'Conté la ç, gest que va tenir el millor presindent de la història amb una persona de la CUP',
        answer: 'Abraçada',
    },
    {
        letter: 'D',
        status: 'unanswered',
        question: 'Lloc més adequat on desenvolupar la postproducció de curtmetratges',
        answer: 'Dubai',
    },
    {
        letter: 'E',
        status: 'unanswered',
        question: 'Adjectiu principal del tamany del teu crani,Enorme',
        answer: 'Guillem',
    },
    {
        letter: 'F',
        status: 'unanswered',
        question:
            'Familiar proper anomenat de forma recurrent per part de la cambrera del bar on es feia la previa',
        answer: 'Filla',
    },
    {
        letter: 'G',
        status: 'unanswered',
        question: 'Què és important que hi hagi quan surts de festa a Mallorca?',
        answer: 'Molta Gent!',
    },
    {
        letter: 'H',
        status: 'unanswered',
        question:
            "Grup de gent que tenen la saviesa de l'Edat Antiga i el títol del segle XXI i tu en formes part",
        answer: 'Historiadors',
    },
    {
        letter: 'I',
        status: 'unanswered',
        question: 'Rumb que portem els catalans',
        answer: 'Ítaca (Independència és incorrecte)',
    },
    { letter: 'J', status: 'unanswered', question: 'Sinònim de bona persona', answer: 'Junqueres' },
    {
        letter: 'K',
        status: 'unanswered',
        question: 'En quin vehicle vas decidir que les corbes no són necessàries?',
        answer: 'Kart',
    },
    {
        letter: 'L',
        status: 'unanswered',
        question: 'Com deia en Flequi: que es lo que quiere esa zorra?',
        answer: 'Leche',
    },
    {
        letter: 'M',
        status: 'unanswered',
        question: "Per culpa de quin objecte pots amenaçar algú de mort cridant 'ET MATARE!!!!!'",
        answer: 'Mòbil',
    },
    {
        letter: 'N',
        status: 'unanswered',
        question: 'Planeta natal del millor personatge de Star Wars',
        answer: 'Naboo',
    },
    {
        letter: 'Ñ',
        status: 'unanswered',
        question: 'Conté la Ñ, qué era Alberto per Marcel Buisan?',
        answer: 'Unputoespañol',
    },
    {
        letter: 'O',
        status: 'unanswered',
        question: 'Conté la O, nom del nemesis argentí de Marcel Buisan',
        answer: 'Marcelo',
    },
    {
        letter: 'P',
        status: 'unanswered',
        question: 'Primer nenesis dels teus curts',
        answer: 'Tuberia PVC',
    },
    {
        letter: 'Q',
        status: 'unanswered',
        question: 'Amb la Q: millor edat per ensenyar història a les noietes',
        answer: 'Quinze',
    },
    {
        letter: 'R',
        status: 'unanswered',
        question: 'Quin consell li va donar el Xeni al Julio?',
        answer: 'Reacciona',
    },
    {
        letter: 'S',
        status: 'unanswered',
        question: 'Ciutat on et pots tallar el cabell',
        answer: 'Sant Cugat del Vallès',
    },
    {
        letter: 'T',
        status: 'unanswered',
        question: "Acabar frase: Diuen de'n saviola que té torta la…",
        answer: 'Titola',
    },
    {
        letter: 'U',
        status: 'unanswered',
        question: 'Acaba amb u, alumne aplicat i complidor, el preferit de Marcel Buisan',
        answer: 'Mamadou',
    },
    { letter: 'V', status: 'unanswered', question: 'Titola llatina', answer: 'Verga' },
    {
        letter: 'W',
        status: 'unanswered',
        question:
            'Quina és la millor eina per crear una pagina web per presentar els teus curts al món',
        answer: 'Wix',
    },
    {
        letter: 'X',
        status: 'unanswered',
        question: 'Conté la X, lloc on es pot lligar amb moltes noies',
        answer: 'Excavació arqueològica',
    },
    {
        letter: 'Y',
        status: 'unanswered',
        question: 'Unitat de mesura de la que quinze és la quantitat òptima',
        answer: 'Anys',
    },
    {
        letter: 'Z',
        status: 'unanswered',
        question: 'Conté la z, edat preferida de Marcel Buisan.',
        answer: 'Quinze',
    },
];

// --- SVG Icons ---
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const XIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const SkipIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

const PlayIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
);

const RestartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4" />
        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </svg>
);

const Rosco = ({ letters, currentIndex }) => {
    const roscoRadius = 115;

    const getStatusColorClasses = (status) => {
        switch (status) {
            case 'correct':
                return 'bg-green-500 border-green-700';
            case 'incorrect':
                return 'bg-red-500 border-red-700';
            case 'pasapalabra':
                return 'bg-yellow-400 border-yellow-600';
            default:
                return 'bg-blue-500 border-blue-700';
        }
    };

    return (
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {letters.map((letter, index) => {
                const angle = (index / letters.length) * 2 * Math.PI - Math.PI / 2;
                const x = roscoRadius * Math.cos(angle);
                const y = roscoRadius * Math.sin(angle);
                const isCurrent = currentIndex === index;
                let classes =
                    'absolute flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform border-4';
                let styles = { transform: `translate(${x}px, ${y}px)` };
                if (isCurrent) {
                    classes += ' scale-125 z-10 shadow-lg text-gray-800';
                    styles.backgroundColor = '#B8BACF';
                    styles.borderColor = '#80829d';
                } else {
                    classes += ` shadow-md text-white ${getStatusColorClasses(letter.status)}`;
                }

                return (
                    <div key={letter.letter} className={classes} style={styles}>
                        {letter.letter}
                    </div>
                );
            })}
            <div className="absolute text-center text-gray-700 dark:text-gray-300">
                <h2 className="text-xl sm:text-2xl font-bold">ROSCO</h2>
                <p className="text-xs sm:text-sm">Buisan Edition</p>
            </div>
        </div>
    );
};

const AnswerModal = ({ answer, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl text-center w-full max-w-sm">
            <h3 className="text-md sm:text-lg font-semibold mb-2 text-gray-600 dark:text-gray-400">
                La resposta correcta era:
            </h3>
            <p className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                {answer}
            </p>
            <button
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
                Següent Pregunta <SkipIcon />
            </button>
        </div>
    </div>
);

export default function App() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [gameState, setGameState] = useState('idle'); // idle, playing, finished
    const [showAnswerModal, setShowAnswerModal] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const score = useMemo(
        () => questions.filter((q) => q.status === 'correct').length,
        [questions]
    );
    const incorrectCount = useMemo(
        () => questions.filter((q) => q.status === 'incorrect').length,
        [questions]
    );
    const isGameFinished = useMemo(
        () => !questions.some((q) => q.status === 'unanswered' || q.status === 'pasapalabra'),
        [questions]
    );

    useEffect(() => {
        if (gameState === 'playing' && isGameFinished) {
            setGameState('finished');
        }
    }, [isGameFinished, gameState, questions]);

    const findNextIndex = useCallback(
        (startIndex) => {
            let nextIndex = (startIndex + 1) % questions.length;
            for (let i = 0; i < questions.length; i++) {
                if (
                    questions[nextIndex].status === 'unanswered' ||
                    questions[nextIndex].status === 'pasapalabra'
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
    const handlePasapalabra = () => updateQuestionStatus('pasapalabra');
    const handleCorrect = () => updateQuestionStatus('correct');
    const handleIncorrect = () => {
        const currentQuestion = questions[currentIndex];
        const newQuestions = [...questions];
        newQuestions[currentIndex] = { ...currentQuestion, status: 'incorrect' };
        setQuestions(newQuestions);
        setCorrectAnswer(currentQuestion.answer);
        setShowAnswerModal(true);
    };

    const handleCloseModal = () => {
        setShowAnswerModal(false);
        const nextIndex = findNextIndex(currentIndex);
        if (nextIndex !== -1) {
            setCurrentIndex(nextIndex);
        }
    };

    const handleStartGame = () => {
        setQuestions(getQuestions());
        setCurrentIndex(0);
        setGameState('playing');
    };
    const handleResetGame = () => {
        setQuestions(getQuestions());
        setCurrentIndex(0);
    };
    const currentQuestion = questions[currentIndex];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-2 sm:p-4 font-sans">
            <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
                <div className="order-1 lg:order-2">
                    <Rosco letters={questions} currentIndex={currentIndex} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-2 lg:order-3 mt-4 lg:mt-0">
                    {gameState === 'playing' && (
                        <div className="w-full max-w-sm p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-4">
                            <p className="text-center font-semibold text-base sm:text-lg text-blue-600 dark:text-blue-400 h-20 flex items-center justify-center">
                                {currentQuestion?.question}
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
                    )}
                    {gameState === 'idle' && (
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
                    )}
                    {gameState === 'finished' && (
                        <div className="text-center p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Joc Acabat!</h2>
                            <p className="mb-6 text-gray-600 dark:text-gray-400">
                                Has completat el Rosco.
                            </p>
                            <div className="text-lg sm:text-xl mb-6">
                                <p>
                                    Resultad:
                                    <strong className="text-green-500">
                                        {score} encerts
                                    </strong> i{' '}
                                    <strong className="text-red-500">
                                        {incorrectCount} errors
                                    </strong>
                                    .
                                </p>
                            </div>
                            <button
                                onClick={handleStartGame}
                                className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
                            >
                                <RestartIcon /> Jugar de Nou
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {showAnswerModal && <AnswerModal answer={correctAnswer} onClose={handleCloseModal} />}
        </div>
    );
}
