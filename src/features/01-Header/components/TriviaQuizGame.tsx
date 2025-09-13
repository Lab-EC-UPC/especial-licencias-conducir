import {useState, useEffect, type SetStateAction, useRef} from "react";
import { allQuestions, type Question } from "../utils/questions.ts";
import SUCCESS_SOUND from "@/assets/audio/success-sound.wav";
import ERROR_SOUND from "@/assets/audio/fail-sound.wav";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
  isMuted: boolean;
}

export const TriviaQuizGame = ({
  setIsOpen,
  isMuted,
}: Props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  const successRef = useRef<HTMLAudioElement | null>(null);
  const failRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (successRef.current) successRef.current.muted = isMuted;
    if (failRef.current) failRef.current.muted = isMuted;
  }, [isMuted]);

  const selectRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  useEffect(() => {
    if (gameStarted && !gameFinished && !showResult && timeLeft > 0 && questions.length > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      setShowResult(true);
    }
  }, [timeLeft, gameStarted, gameFinished, showResult, questions.length]);

  const startGame = () => {
    setQuestions(selectRandomQuestions());
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(20);
    setSelectedAnswer("");
    setShowResult(false);
    setGameFinished(false);
  };

  const handleAnswerSelect = (answer: SetStateAction<string>) => {
    if (!showResult) setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft / 2);
      const basePoints = 10;
      setScore(score + basePoints + timeBonus);

      if (successRef.current) {
        successRef.current.currentTime = 0;
        successRef.current.play().catch(() => {});
      }
    } else {
      if (failRef.current) {
        failRef.current.currentTime = 0;
        failRef.current.play().catch(() => {});
      }
    }
    setShowResult(true);

    // if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    //   const timeBonus = Math.floor(timeLeft / 2);
    //   const basePoints = 10;
    //   setScore(score + basePoints + timeBonus);
    // }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
      setTimeLeft(20);
    } else {
      const maxPossibleScore = questions.length * 20;
      const finalScore = Number(score / maxPossibleScore).toFixed(2);
      localStorage.setItem("trivia-score", String(finalScore));
      console.log(finalScore, "Final Score");
      setGameFinished(true);
    }
  };

  const getScoreMessage = () => {
    const maxPossibleScore = questions.length * 20;
    const percentage = (score / maxPossibleScore) * 100;

    if (percentage >= 80) return "¡Excelente! Conductor experto 🏆";
    if (percentage >= 60) return "¡Muy bien! Buen conocimiento 👍";
    if (percentage >= 40) return "Regular, sigue practicando 📚";
    return "Necesitas estudiar más las reglas 📖";
  };

  const getHeaderMessage = () => {
    const maxPossibleScore = questions.length * 20;
    const percentage = (score / maxPossibleScore) * 100;

    if (percentage >= 85) {
      return { emoji: "🎉", title: "¡Felicitaciones!", subtitle: "Aprobaste el examen" };
    } else if (percentage >= 65) {
      return { emoji: "😐", title: "Sigue Intentando", subtitle: "Regular, sigue practicando" };
    } else {
      return { emoji: "😔", title: "Sigue Intentando", subtitle: "Fallaste, sigue practicando" };
    }
  };

  useEffect(() => {
    setQuestions(selectRandomQuestions());
    startGame();
  }, []);

  // Estado de carga
  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <p className="text-2xl sm:text-4xl mb-2 animate-spin text-[#58b7cf]">
          🔄
        </p>
        <h2 className="text-sm md:text-2xl font-bold text-center font-bitcount text-[#dbeecb]">
          Cargando preguntas...
        </h2>
      </div>
    );
  }

  // Juego activo - ocupa el espacio del componente
  if (gameStarted && !gameFinished) {
    return (
      <>
        <audio ref={successRef} src={SUCCESS_SOUND} preload="auto" />
        <audio ref={failRef} src={ERROR_SOUND} preload="auto" />
        <div className="flex flex-col text-[#dbeecb]">
          {/* Header del juego */}
          <div className="flex justify-between items-center mb-4 p-4 rounded flex-shrink-0 bg-[#ffaf42]">
            <div>
              <h3 className="font-bold text-sm md:text-base text-[#131a31] font-bitcount">
                Pregunta {currentQuestion + 1} / {questions.length}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-xs md:text-sm text-[#131a31]">Puntos:</p>
                <p className="px-2 py-1 rounded font-bold text-xs md:text-sm text-white bg-[#ac5eaa]">{score}</p>
              </div>
            </div>
            <div className={`text-center text-lg md:text-xl font-bold font-bitcount ${timeLeft <= 5 ? "animate-pulse text-[#ed548c]" : "text-[#131a31]"}`}>
              ⏰ {timeLeft}s
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="bg-white rounded-full h-2 mb-6 overflow-hidden">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                backgroundColor: '#58b7cf'
              }}
            />
          </div>

          {/* Contenido del juego */}
          <div className="flex-1 flex flex-col">
            <h3 className="mb-6 text-lg md:text-3xl font-bold text-center text-[#dbeecb]">
              {questions[currentQuestion].question}
            </h3>

            {/* Imagen de pregunta si existe */}
            {questions[currentQuestion].image && (
              <div className="mb-4 text-center">
                <img
                  src={questions[currentQuestion].image}
                  alt={questions[currentQuestion].imageAlt || 'Imagen de la pregunta'}
                  className="max-w-full max-h-32 mx-auto rounded border"
                  style={{ borderColor: '#868686' }}
                />
              </div>
            )}

            {/* Opciones */}
            <div className="space-y-3 flex-1">
              {questions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className="w-full py-3 px-4 rounded-lg text-left text-sm md:text-base transition-all hover:scale-[1.02] hover:cursor-pointer"
                  style={{
                    backgroundColor: showResult
                      ? option === questions[currentQuestion].correctAnswer
                        ? '#58b7cf'
                        : option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
                          ? '#ed548c'
                          : '#868686'
                      : selectedAnswer === option
                        ? '#ac5eaa'
                        : '#868686',
                    color: showResult || selectedAnswer === option ? 'white' : '#131a31',
                    fontFamily: 'var(--font-helvetica, sans-serif)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold mr-3 bg-white text-sm md:text-base" style={{ color: '#131a31' }}>
                        {String.fromCharCode(65 + i)}
                      </p>
                      <p className="flex-1">{option}</p>
                    </div>
                    {showResult && option === questions[currentQuestion].correctAnswer && (
                      <p className="text-white text-lg">✓</p>
                    )}
                    {showResult && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
                      <p className="text-white text-lg">✗</p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Feedback de respuesta correcta */}
            {showResult && selectedAnswer === questions[currentQuestion].correctAnswer && (
              <div className="mt-4 p-3 rounded-lg text-center font-bold" style={{ backgroundColor: '#58b7cf', color: 'white' }}>
                ¡Correcto! +{10 + Math.floor(timeLeft / 2)} puntos
                {Math.floor(timeLeft / 2) > 0 && (
                  <div className="text-xs md:text-sm mt-1">(Bonus velocidad: +{Math.floor(timeLeft / 2)})</div>
                )}
              </div>
            )}

            {/* Botones de acción */}
            <div className="mt-4">
              {!showResult && selectedAnswer && (
                <button
                  onClick={handleSubmitAnswer}
                  className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer"
                  style={{
                    backgroundColor: "#dbeecb",
                    color: "#131a31",
                    fontFamily: "var(--font-helvetica, sans-serif)"
                  }}
                >
                  ✅ Confirmar Respuesta
                </button>
              )}

              {showResult && (
                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer"
                  style={{
                    backgroundColor: "#ffaf42",
                    color: "#131a31",
                    fontFamily: "var(--font-helvetica, sans-serif)"
                  }}
                >
                  {currentQuestion < questions.length - 1 ? "➡️ Siguiente Pregunta" : "🎯 Ver Resultados"}
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Pantalla final - ocupa el espacio del componente
  if (gameFinished) {
    return (
      <div className="flex flex-col text-center items-center justify-center w-full h-[70vh]">
        <div className="max-w-lg mx-auto w-full">
          <div className="text-4xl md:text-6xl mb-4">{getHeaderMessage().emoji}</div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: '#ed548c', fontFamily: 'var(--font-bitcount, sans-serif)' }}
          >
            {getHeaderMessage().title}
          </h2>
          <p
            className="mb-6 text-lg"
            style={{ color: '#868686', fontFamily: 'var(--font-helvetica, sans-serif)' }}
          >
            {getHeaderMessage().subtitle}
          </p>

          {/* Puntuación detallada */}
          <div className="rounded-lg p-4 mb-4 max-w-md mx-auto border" style={{ backgroundColor: '#ffaf42', borderColor: '#131a31' }}>
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: '#131a31', fontFamily: 'var(--font-bitcount, sans-serif)' }}
            >
              {score}
            </div>
            <p
              className="mb-3 text-sm"
              style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
            >
              de {questions.length * 20} puntos posibles
            </p>
            <div className="bg-white rounded-full h-3 mb-3 overflow-hidden">
              <div
                className="h-3 rounded-full transition-all duration-1000"
                style={{
                  width: `${(score / (questions.length * 20)) * 100}%`,
                  backgroundColor: '#ac5eaa'
                }}
              />
            </div>
            <p
              className="font-bold text-xl"
              style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
            >
              {Math.round((score / (questions.length * 20)) * 100)}%
            </p>
          </div>

          <div className="rounded-lg p-3 mb-6 max-w-md mx-auto bg-[#ffaf42]">
            <p
              className="font-bold text-[#131a31] text-base"
            >
              {getScoreMessage()}
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full max-w-md mx-auto py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer mb-2"
            style={{
              backgroundColor: "#ac5eaa",
              color: "#dbeecb",
              fontFamily: "var(--font-helvetica, sans-serif)"
            }}
          >
            🔄 Jugar de Nuevo
          </button>

          <button
            onClick={()=>setIsOpen(false)}
            className="w-full max-w-md mx-auto py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:cursor-pointer"
            style={{
              backgroundColor: "#ac5eaa",
              color: "#dbeecb",
              fontFamily: "var(--font-helvetica, sans-serif)"
            }}
          >
            🚪 Salir
          </button>
        </div>
      </div>
    );
  }

  return null;
};