const Rosco = ({ letters, currentIndex }) => {
  const roscoRadius = 115;

  const getStatusColorClasses = (status) => {
    switch (status) {
      case "correct":
        return "bg-green-500 border-green-700";
      case "incorrect":
        return "bg-red-500 border-red-700";
      case "pasapalabra":
        return "bg-yellow-400 border-yellow-600";
      default:
        return "bg-blue-500 border-blue-700";
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
          "absolute flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform border-4";
        let styles = { transform: `translate(${x}px, ${y}px)` };
        if (isCurrent) {
          classes += " scale-125 z-10 shadow-lg text-gray-800";
          styles.backgroundColor = "#B8BACF";
          styles.borderColor = "#80829d";
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

export default Rosco;
