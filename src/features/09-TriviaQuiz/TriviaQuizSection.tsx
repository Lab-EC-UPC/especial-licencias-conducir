import { useState, useEffect, type SetStateAction } from "react";
import { allQuestions, type Question } from "./questions";
import hero from "@/assets/hero.png";

export const TriviaQuizSection = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);

    const selectRandomQuestions = () => {
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    };

    useEffect(() => {
        setQuestions(selectRandomQuestions());
    }, []);

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
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            const timeBonus = Math.floor(timeLeft / 2);
            const basePoints = 10;
            setScore(score + basePoints + timeBonus);
        }
        setShowResult(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");
            setShowResult(false);
            setTimeLeft(20);
        } else {
            setGameFinished(true);
        }
    };

    const resetGame = () => {
        setGameStarted(false);
        setGameFinished(false);
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer("");
        setShowResult(false);
        setTimeLeft(20);
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

    if (questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#131a31] text-[#dbeecb]">
                <div className="text-center">
                    <div className="text-6xl mb-4 animate-spin">🔄</div>
                    <h2 className="text-3xl font-bold">Cargando preguntas...</h2>
                </div>
            </div>
        );
    }

    return (
        <div
            className="relative w-full h-screen bg-[#131A31] bg-contain bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${hero})`,
                fontFamily: "var(--font-helvetica, sans-serif)",
            }}
        >
            {/* Área de la pantalla blanca del monitor */}
            <div
                className="absolute bg-[#131a31]/90 overflow-y-auto rounded-sm shadow-lg p-4"
                style={{
                    top: "21.5%",
                    left: "30%",
                    width: "40%",
                    height: "41.5%",
                    color: "#dbeecb",
                }}
            >
                {/* Pantalla inicial */}
                {!gameStarted && (
                    <div className="text-center">
                        <h2
                            className="text-2xl font-bold mb-4"
                            style={{ fontFamily: "var(--font-bitcount, sans-serif)", color: "#58b7cf" }}
                        >
                            🚗 Trivia de Conducir
                        </h2>
                        <p className="mb-4 text-[#ffaf42]">¿Qué tanto sabes sobre manejo seguro?</p>
                        <button
                            onClick={startGame}
                            className="w-full py-3 rounded-lg font-bold"
                            style={{ backgroundColor: "#ed548c", color: "#131a31" }}
                        >
                            🚀 Comenzar Trivia
                        </button>
                    </div>
                )}

                {/* Preguntas */}
                {gameStarted && !gameFinished && (
                    <div>
                        <div className="flex justify-between mb-2">
              <span className="text-[#ffaf42] font-bold">
                Pregunta {currentQuestion + 1} / {questions.length}
              </span>
                            <span className={`${timeLeft <= 5 ? "animate-pulse" : ""}`} style={{ color: "#ac5eaa" }}>
                ⏰ {timeLeft}s
              </span>
                        </div>
                        <h3 className="mb-4 text-lg font-bold text-[#dbeecb]">{questions[currentQuestion].question}</h3>
                        {questions[currentQuestion].options.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswerSelect(option)}
                                disabled={showResult}
                                className="w-full mb-2 py-2 px-3 rounded-lg text-left"
                                style={{
                                    backgroundColor:
                                        selectedAnswer === option ? "#58b7cf" : "#868686",
                                    color: "#131a31",
                                }}
                            >
                                {option}
                            </button>
                        ))}

                        {!showResult && selectedAnswer && (
                            <button
                                onClick={handleSubmitAnswer}
                                className="w-full py-2 mt-3 rounded-lg font-bold"
                                style={{ backgroundColor: "#dbeecb", color: "#131a31" }}
                            >
                                ✅ Confirmar Respuesta
                            </button>
                        )}

                        {showResult && (
                            <button
                                onClick={handleNextQuestion}
                                className="w-full py-2 mt-3 rounded-lg font-bold"
                                style={{ backgroundColor: "#ffaf42", color: "#131a31" }}
                            >
                                {currentQuestion < questions.length - 1 ? "➡️ Siguiente" : "🎯 Resultados"}
                            </button>
                        )}
                    </div>
                )}

                {/* Pantalla final */}
                {gameFinished && (
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-[#ed548c]">
                            {getHeaderMessage().emoji} {getHeaderMessage().title}
                        </h2>
                        <p className="mb-2">{getHeaderMessage().subtitle}</p>
                        <p className="mb-2 text-[#58b7cf] font-bold text-lg">Puntuación: {score}</p>
                        <p className="mb-4 text-[#ffaf42]">{getScoreMessage()}</p>
                        <button
                            onClick={resetGame}
                            className="w-full py-2 rounded-lg font-bold"
                            style={{ backgroundColor: "#ac5eaa", color: "#dbeecb" }}
                        >
                            🔄 Jugar de Nuevo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
