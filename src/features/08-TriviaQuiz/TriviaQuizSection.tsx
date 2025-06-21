import { useState, useEffect, type SetStateAction } from 'react';

export const TriviaQuizSection = () => {
    const questions = [
        {
            question: "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa:",
            options: ["Obligación de detenerse de quien así lo enfrente.", "Continuar la marcha por el carril izquierdo de la calzada.", "Continuar la marcha.", "Ninguna de las alternativas es correcta."],
            correctAnswer: "Obligación de detenerse de quien así lo enfrente."
        },
        {
            question: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
            options: ["30km/h.", "40km/h.", "60km/h.", "80km/h."],
            correctAnswer: "40km/h."
        },
        {
            question: "Mientras la persona conduce, le está permitido:",
            options: [
                "Compartir su asiento con un niño, siempre y cuando éste sea menor de un año de edad.",
                "Que otra persona tome el control de la dirección del vehículo, siempre y cuando sea de emergencia.",
                "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad.",
                "Ninguna de las alternativas es correcta."
            ],
            correctAnswer: "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad."
        },
        {
            question: "El conductor está ________ a ___________ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos:",
            options: ["En su derecho - negarse.", "Facultado - Rechazar.", "Obligado - someterse.", "Ninguna de las alternativas es correcta."],
            correctAnswer: "Obligado - someterse."
        },
        {
            question: "La detención de un vehículo debe efectuarse:",
            options: [
                "En el sentido contrario a la circulación y en el carril izquierdo de la vía.",
                "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces altas.",
                "En el sentido de la circulación y en el carril izquierdo de la vía, utilizando las luces intermitentes.",
                "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces intermitentes."
            ],
            correctAnswer: "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces intermitentes."
        },
        {
            question: "En caso de un accidente de tránsito con daños personales y/o materiales, los participantes deben:",
            options: ["Acudir a la estación de bomberos.", "Llamar a un familiar.", "Solicitar la intervención de la autoridad policial.", "Abandonar el lugar donde ocurrió el accidente."],
            correctAnswer: "Solicitar la intervención de la autoridad policial."
        },
        {
            question: "La conducción requiere un alto nivel de atención, pues existen distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
            options: [
                "Preocupaciones.",
                "Uso del teléfono celular.",
                "Manipulación de la radio mientras se conduce.",
                "Todas las alternativas son correctas."
            ],
            correctAnswer: "Todas las alternativas son correctas."
        },
        {
            question: "¿Influye la somnolencia en la capacidad de conducir?",
            options: [
                "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores.",
                "Si, ya que el conductor está de mal genio.",
                "No, siempre que la conducción sea realizada lentamente.",
                "No, siempre y cuando la conducción sea realizada con un acompañante."
            ],
            correctAnswer: "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores."
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);

    useEffect(() => {
        if (gameStarted && !gameFinished && !showResult && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !showResult) {
            setShowResult(true);
        }
    }, [timeLeft, gameStarted, gameFinished, showResult]);

    const startGame = () => {
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
            setScore(score + 1);
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
        const percentage = (score / questions.length) * 100;
        if (percentage >= 80) return "¡Excelente! Listo para el examen 🏆";
        if (percentage >= 60) return "¡Bien! Sigue practicando 👍";
        if (percentage >= 40) return "Regular, necesitas más estudio 📚";
        return "Debes estudiar más las reglas 📖";
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Pon a Prueba tus Conocimientos
                    </h2>
                    <p className="text-xl text-gray-600">
                        Trivia sobre las reglas de tránsito en el Perú
                    </p>
                </div>

                {/* Pantalla de inicio */}
                {!gameStarted && (
                    <div className="max-w-md mx-auto">
                        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                            <div className="text-6xl mb-4">🚗</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Trivia de Conducir</h3>
                            <p className="text-gray-600 mb-6">¿Qué tanto sabes sobre manejo seguro?</p>

                            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                                <h4 className="font-bold text-blue-800 mb-2">📋 Reglas:</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• {questions.length} preguntas</li>
                                    <li>• 20 segundos por pregunta</li>
                                    <li>• Una sola oportunidad</li>
                                </ul>
                            </div>

                            <button
                                onClick={startGame}
                                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                            >
                                Comenzar Trivia
                            </button>
                        </div>
                    </div>
                )}

                {/* Pantalla de resultados */}
                {gameFinished && (
                    <div className="max-w-md mx-auto">
                        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Terminaste!</h3>

                            <div className="bg-gray-100 rounded-lg p-6 mb-6">
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                    {score}/{questions.length}
                                </div>
                                <p className="text-gray-600 mb-4">Respuestas correctas</p>
                                <div className="bg-gray-300 rounded-full h-4 mb-2">
                                    <div
                                        className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                                        style={{ width: `${(score / questions.length) * 100}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-500">{Math.round((score / questions.length) * 100)}%</p>
                            </div>

                            <p className="text-lg mb-6 font-semibold text-gray-700">
                                {getScoreMessage()}
                            </p>

                            <button
                                onClick={resetGame}
                                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                            >
                                Jugar de Nuevo
                            </button>
                        </div>
                    </div>
                )}

                {/* Juego principal */}
                {gameStarted && !gameFinished && (
                    <div className="max-w-2xl mx-auto">
                        {/* Header del juego */}
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Pregunta {currentQuestion + 1} de {questions.length}
                                    </h3>
                                    <p className="text-gray-600">Puntuación: {score}</p>
                                </div>
                                <div className="text-right">
                                    <div className={`text-3xl font-bold ${timeLeft <= 5 ? 'text-red-500' : 'text-blue-600'}`}>
                                        ⏰ {timeLeft}s
                                    </div>
                                </div>
                            </div>

                            {/* Barra de progreso */}
                            <div className="bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Pregunta */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h4 className="text-2xl font-bold text-gray-800 mb-8">
                                {questions[currentQuestion].question}
                            </h4>

                            {/* Opciones */}
                            <div className="space-y-4 mb-8">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(option)}
                                        disabled={showResult}
                                        className={`w-full p-4 rounded-lg text-left font-medium transition-colors ${
                                            showResult
                                                ? option === questions[currentQuestion].correctAnswer
                                                    ? 'bg-green-100 border-2 border-green-500 text-green-800'
                                                    : option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
                                                        ? 'bg-red-100 border-2 border-red-500 text-red-800'
                                                        : 'bg-gray-100 text-gray-500'
                                                : selectedAnswer === option
                                                    ? 'bg-blue-100 border-2 border-blue-500 text-blue-800'
                                                    : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{option}</span>
                                            {showResult && option === questions[currentQuestion].correctAnswer && (
                                                <span className="text-green-600 text-xl">✓</span>
                                            )}
                                            {showResult && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
                                                <span className="text-red-600 text-xl">✗</span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Botones */}
                            <div className="text-center">
                                {!showResult && selectedAnswer && (
                                    <button
                                        onClick={handleSubmitAnswer}
                                        className="bg-green-600 text-white py-3 px-8 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                                    >
                                        Confirmar Respuesta
                                    </button>
                                )}

                                {showResult && (
                                    <button
                                        onClick={handleNextQuestion}
                                        className="bg-purple-600 text-white py-3 px-8 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                                    >
                                        {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
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
