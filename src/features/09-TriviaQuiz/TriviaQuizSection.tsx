import { useState, useEffect, type SetStateAction } from 'react';
import { allQuestions, type Question } from './questions';

export const TriviaQuizSection = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);

    // Función para seleccionar preguntas aleatorias
    const selectRandomQuestions = () => {
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    };

    // Efecto para inicializar las preguntas aleatorias al montar el componente
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
        setQuestions(selectRandomQuestions()); // Seleccionar nuevas preguntas aleatorias
        setGameStarted(true);
        setCurrentQuestion(0);
        setScore(0);
        setTimeLeft(20);
        setSelectedAnswer('');
        setShowResult(false);
        setGameFinished(false);
    };

    const handleAnswerSelect = (answer: SetStateAction<string>) => {
        if (!showResult) {
            setSelectedAnswer(answer);
        }
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            // Puntuación basada en tiempo restante: más puntos si responde rápido
            const timeBonus = Math.floor(timeLeft / 2); // Bonus de 0-10 puntos
            const basePoints = 10; // Puntos base por respuesta correcta
            setScore(score + basePoints + timeBonus);
        }
        setShowResult(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer('');
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
        setSelectedAnswer('');
        setShowResult(false);
        setTimeLeft(20);
    };

    const getScoreMessage = () => {
        const maxPossibleScore = questions.length * 20; // 10 puntos base + 10 de bonus máximo
        const percentage = (score / maxPossibleScore) * 100;

        if (percentage >= 80) return "¡Excelente! Conductor experto 🏆";
        if (percentage >= 60) return "¡Muy bien! Buen conocimiento 👍";
        if (percentage >= 40) return "Regular, sigue practicando 📚";
        return "Necesitas estudiar más las reglas 📖";
    };

    // Función para obtener el mensaje del encabezado según el porcentaje
    const getHeaderMessage = () => {
        const maxPossibleScore = questions.length * 20;
        const percentage = (score / maxPossibleScore) * 100;

        if (percentage >= 85) {
            return {
                emoji: "🎉",
                title: "¡Felicitaciones!",
                subtitle: "Aprobaste el examen"
            };
        } else if (percentage >= 65) {
            return {
                emoji: "😐",
                title: "Sigue Intentando",
                subtitle: "Regular, sigue practicando"
            };
        } else {
            return {
                emoji: "😔",
                title: "Sigue Intentando",
                subtitle: "Fallaste, sigue practicando"
            };
        }
    };

    // Mostrar loading mientras se cargan las preguntas
    if (questions.length === 0) {
        return (
          <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4">
              <div className="container mx-auto">
                  <div className="text-center">
                      <div className="text-6xl mb-4 animate-spin">🔄</div>
                      <h2 className="text-3xl font-bold text-white">Cargando preguntas...</h2>
                  </div>
              </div>
          </section>
        );
    }

    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4">
          <div className="container mx-auto">
              {/* Título de la sección */}
              <div className="text-center mb-12">
                  <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                      🚗 Pon a Prueba tus Conocimientos
                  </h2>
                  <p className="text-2xl text-blue-200 font-medium">
                      Trivia sobre las reglas de tránsito en el Perú
                  </p>
              </div>

              {/* Pantalla de inicio */}
              {!gameStarted && (
                <div className="max-w-lg mx-auto">
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center border border-white/20 hover:shadow-purple-500/25 transition-all duration-300">
                        <div className="text-8xl mb-6 animate-bounce">🚗</div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Trivia de Conducir
                        </h3>
                        <p className="text-xl text-gray-600 mb-8">¿Qué tanto sabes sobre manejo seguro?</p>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-left border border-blue-200/50">
                            <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
                                <span className="text-2xl mr-2">📋</span>
                                Reglas del Juego
                            </h4>
                            <ul className="space-y-3 text-blue-700">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    <span className="font-medium">{questions.length} preguntas desafiantes</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                    <span className="font-medium">20 segundos por pregunta</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                                    <span className="font-medium">Una sola oportunidad</span>
                                </li>
                            </ul>
                        </div>

                        <button
                          onClick={startGame}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            🚀 Comenzar Trivia
                        </button>
                    </div>
                </div>
              )}

              {/* Pantalla de resultados */}
              {gameFinished && (
                <div className="max-w-lg mx-auto">
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center border border-white/20">
                        <div className="text-8xl mb-6 animate-pulse">{getHeaderMessage().emoji}</div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            {getHeaderMessage().title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            {getHeaderMessage().subtitle}
                        </p>

                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8 border border-gray-200/50">
                            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                                {score}
                            </div>
                            <p className="text-gray-600 mb-2 text-lg">Puntuación total</p>
                            <div className="text-sm text-gray-500 mb-4">
                                de {questions.length * 20} puntos posibles
                            </div>
                            <div className="bg-gray-200 rounded-full h-6 mb-4 overflow-hidden">
                                <div
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full transition-all duration-1000 ease-out shadow-lg"
                                  style={{ width: `${(score / (questions.length * 20)) * 100}%` }}
                                />
                            </div>
                            <p className="text-lg font-bold text-gray-700">{Math.round((score / (questions.length * 20)) * 100)}%</p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8 border border-yellow-200/50">
                            <p className="text-xl font-bold text-gray-800">
                                {getScoreMessage()}
                            </p>
                        </div>

                        <button
                          onClick={resetGame}
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            🔄 Jugar de Nuevo
                        </button>
                    </div>
                </div>
              )}

              {/* Juego principal */}
              {gameStarted && !gameFinished && (
                <div className="max-w-4xl mx-auto">
                    {/* Header del juego */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Pregunta {currentQuestion + 1} de {questions.length}
                                </h3>
                                <div className="flex items-center justify-center md:justify-start space-x-4">
                                    <div className="flex items-center">
                                        <span className="text-lg text-gray-600 mr-2">Puntuación:</span>
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                                                {score}
                                            </span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        pts
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className={`text-5xl font-bold mb-2 ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
                                    ⏰ {timeLeft}s
                                </div>
                                <div className="text-sm text-gray-500">Tiempo restante</div>
                            </div>
                        </div>

                        {/* Barra de progreso */}
                        <div className="bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500 ease-out shadow-lg"
                              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                        <div className="text-center mt-2 text-sm text-gray-600">
                            Progreso: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                        </div>
                    </div>

                    {/* Pregunta */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20">
                        <div className="text-center mb-8">
                            <div className="text-4xl mb-4">🤔</div>
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                                {questions[currentQuestion].question}
                            </h4>

                            {/* Renderizado condicional de la imagen */}
                            {questions[currentQuestion].image && (
                              <div className="mt-6">
                                  <img
                                    src={questions[currentQuestion].image}
                                    alt={questions[currentQuestion].imageAlt || 'Imagen de la pregunta'}
                                    className="max-w-xs max-h-60 mx-auto rounded-lg shadow-lg border border-gray-200"
                                  />
                              </div>
                            )}
                        </div>

                        {/* Opciones */}
                        <div className="space-y-4 mb-10">
                            {questions[currentQuestion].options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleAnswerSelect(option)}
                                disabled={showResult}
                                className={`w-full p-6 rounded-2xl text-left font-medium transition-all duration-300 transform hover:scale-105 ${
                                  showResult
                                    ? option === questions[currentQuestion].correctAnswer
                                      ? 'bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-500 text-green-800 shadow-lg'
                                      : option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
                                        ? 'bg-gradient-to-r from-red-100 to-red-200 border-2 border-red-500 text-red-800 shadow-lg'
                                        : 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                                    : selectedAnswer === option
                                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-500 text-blue-800 shadow-lg'
                                      : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border-2 border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg'
                                }`}
                              >
                                  <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                                <span className="bg-white/80 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm">
                                                    {String.fromCharCode(65 + index)}
                                                </span>
                                          <span className="text-lg">{option}</span>
                                      </div>
                                      {showResult && option === questions[currentQuestion].correctAnswer && (
                                        <span className="text-green-600 text-2xl">✓</span>
                                      )}
                                      {showResult && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
                                        <span className="text-red-600 text-2xl">✗</span>
                                      )}
                                  </div>
                              </button>
                            ))}
                        </div>

                        {showResult && selectedAnswer === questions[currentQuestion].correctAnswer && (
                          <div className="mt-4 p-4 bg-green-100 rounded-xl border border-green-300">
                              <div className="flex items-center justify-center space-x-2">
                                  <span className="text-green-700 font-bold">¡Correcto!</span>
                                  <span className="text-green-600">+{10 + Math.floor(timeLeft / 2)} puntos</span>
                                  {Math.floor(timeLeft / 2) > 0 && (
                                    <span className="text-sm text-green-600">(Bonus velocidad: +{Math.floor(timeLeft / 2)})</span>
                                  )}
                              </div>
                          </div>
                        )}
                        <div className="text-center">
                            {!showResult && selectedAnswer && (
                              <button
                                onClick={handleSubmitAnswer}
                                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 px-10 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                              >
                                  ✅ Confirmar Respuesta
                              </button>
                            )}

                            {showResult && (
                              <button
                                onClick={handleNextQuestion}
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 px-10 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                              >
                                  {currentQuestion < questions.length - 1 ? '➡️ Siguiente Pregunta' : '🎯 Ver Resultados'}
                              </button>
                            )}
                        </div>
                    </div>
                </div>
              )}
          </div>
      </section>
    );
};