// import { useState, useEffect, type SetStateAction } from "react";
// import { allQuestions, type Question } from "./questions";
// import hero from "@/assets/hero.png";
//
// export const TriviaQuizSection = () => {
//     const [questions, setQuestions] = useState<Question[]>([]);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState("");
//     const [showResult, setShowResult] = useState(false);
//     const [score, setScore] = useState(0);
//     const [gameStarted, setGameStarted] = useState(false);
//     const [gameFinished, setGameFinished] = useState(false);
//     const [timeLeft, setTimeLeft] = useState(20);
//
//     const selectRandomQuestions = () => {
//         const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, 8);
//     };
//
//     useEffect(() => {
//         setQuestions(selectRandomQuestions());
//     }, []);
//
//     useEffect(() => {
//         if (gameStarted && !gameFinished && !showResult && timeLeft > 0 && questions.length > 0) {
//             const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//             return () => clearTimeout(timer);
//         } else if (timeLeft === 0 && !showResult) {
//             setShowResult(true);
//         }
//     }, [timeLeft, gameStarted, gameFinished, showResult, questions.length]);
//
//     const startGame = () => {
//         setQuestions(selectRandomQuestions());
//         setGameStarted(true);
//         setCurrentQuestion(0);
//         setScore(0);
//         setTimeLeft(20);
//         setSelectedAnswer("");
//         setShowResult(false);
//         setGameFinished(false);
//     };
//
//     const handleAnswerSelect = (answer: SetStateAction<string>) => {
//         if (!showResult) setSelectedAnswer(answer);
//     };
//
//     const handleSubmitAnswer = () => {
//         if (selectedAnswer === questions[currentQuestion].correctAnswer) {
//             const timeBonus = Math.floor(timeLeft / 2);
//             const basePoints = 10;
//             setScore(score + basePoints + timeBonus);
//         }
//         setShowResult(true);
//     };
//
//     const handleNextQuestion = () => {
//         if (currentQuestion < questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             setSelectedAnswer("");
//             setShowResult(false);
//             setTimeLeft(20);
//         } else {
//             setGameFinished(true);
//         }
//     };
//
//     const resetGame = () => {
//         setGameStarted(false);
//         setGameFinished(false);
//         setCurrentQuestion(0);
//         setScore(0);
//         setSelectedAnswer("");
//         setShowResult(false);
//         setTimeLeft(20);
//     };
//
//     const getScoreMessage = () => {
//         const maxPossibleScore = questions.length * 20;
//         const percentage = (score / maxPossibleScore) * 100;
//
//         if (percentage >= 80) return "¡Excelente! Conductor experto 🏆";
//         if (percentage >= 60) return "¡Muy bien! Buen conocimiento 👍";
//         if (percentage >= 40) return "Regular, sigue practicando 📚";
//         return "Necesitas estudiar más las reglas 📖";
//     };
//
//     const getHeaderMessage = () => {
//         const maxPossibleScore = questions.length * 20;
//         const percentage = (score / maxPossibleScore) * 100;
//
//         if (percentage >= 85) {
//             return { emoji: "🎉", title: "¡Felicitaciones!", subtitle: "Aprobaste el examen" };
//         } else if (percentage >= 65) {
//             return { emoji: "😐", title: "Sigue Intentando", subtitle: "Regular, sigue practicando" };
//         } else {
//             return { emoji: "😔", title: "Sigue Intentando", subtitle: "Fallaste, sigue practicando" };
//         }
//     };
//
//     if (questions.length === 0) {
//         return (
//             <div className="relative w-full max-w-[924px] mx-auto">
//                 <img
//                     src={hero}
//                     alt="Hero"
//                     className="w-full h-auto block"
//                 />
//                 <div
//                     className="absolute bg-[#131a31]/90 overflow-y-auto rounded-sm shadow-lg p-4 flex flex-col items-center justify-center"
//                     style={{
//                         top: "22.5%",
//                         left: "31.5%",
//                         width: "40%",
//                         aspectRatio: "284 / 175",
//                         color: "#dbeecb",
//                     }}
//                 >
//                     <div className="text-4xl mb-2 animate-spin" style={{ color: '#58b7cf' }}>🔄</div>
//                     <h2
//                         className="text-lg font-bold"
//                         style={{ fontFamily: 'var(--font-bitcount, sans-serif)', color: '#dbeecb' }}
//                     >
//                         Cargando preguntas...
//                     </h2>
//                 </div>
//             </div>
//         );
//     }
//
//     return (
//         <div className="relative w-full max-w-[924px] mx-auto">
//             <img
//                 src={hero}
//                 alt="Hero"
//                 className="w-full h-auto block"
//             />
//
//             <div
//                 className="absolute bg-[#131a31]/90 overflow-y-auto rounded-sm shadow-lg p-4 flex flex-col"
//                 style={{
//                     top: "22%",
//                     left: "31%",
//                     width: "41%",
//                     aspectRatio: "284 / 175",
//                     color: "#dbeecb",
//                 }}
//             >
//                 {/* Pantalla inicial */}
//                 {!gameStarted && (
//                     <div className="text-center flex flex-col justify-center flex-1">
//                         <h2
//                             className="text-lg md:text-2xl font-bold mb-2 md:mb-4"
//                             style={{ fontFamily: "var(--font-bitcount, sans-serif)", color: "#58b7cf" }}
//                         >
//                             🚗 Trivia de Conducir
//                         </h2>
//                         <p
//                             className="mb-2 md:mb-4 text-[#ffaf42] text-sm md:text-base"
//                             style={{ fontFamily: "var(--font-helvetica, sans-serif)" }}
//                         >
//                             ¿Qué tanto sabes sobre manejo seguro?
//                         </p>
//
//                         <div className="rounded p-2 mb-3 text-left text-xs border" style={{ backgroundColor: '#58b7cf', borderColor: '#131a31' }}>
//                             <h4
//                                 className="font-bold mb-1"
//                                 style={{ color: '#131a31', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//                             >
//                                 📋 Reglas
//                             </h4>
//                             <ul
//                                 className="space-y-1"
//                                 style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                             >
//                                 <li>• {questions.length} preguntas desafiantes</li>
//                                 <li>• 20 segundos por pregunta</li>
//                                 <li>• Una sola oportunidad</li>
//                             </ul>
//                         </div>
//
//                         <button
//                             onClick={startGame}
//                             className="w-full py-2 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all hover:opacity-90"
//                             style={{
//                                 backgroundColor: "#ed548c",
//                                 color: "#131a31",
//                                 fontFamily: "var(--font-helvetica, sans-serif)"
//                             }}
//                         >
//                             🚀 Comenzar Trivia
//                         </button>
//                     </div>
//                 )}
//
//                 {/* Preguntas */}
//                 {gameStarted && !gameFinished && (
//                     <div className="flex flex-col flex-1">
//                         {/* Header del juego */}
//                         <div className="flex justify-between items-center mb-2 p-2 rounded" style={{ backgroundColor: '#ffaf42' }}>
//                             <div>
//                                 <h3
//                                     className="font-bold text-xs"
//                                     style={{ color: '#131a31', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//                                 >
//                                     Pregunta {currentQuestion + 1} / {questions.length}
//                                 </h3>
//                                 <div className="flex items-center space-x-1">
//                                     <span
//                                         className="text-xs"
//                                         style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                                     >
//                                         Puntos:
//                                     </span>
//                                     <span
//                                         className="px-1 py-0.5 rounded text-white font-bold text-xs"
//                                         style={{ backgroundColor: '#ac5eaa', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                                     >
//                                         {score}
//                                     </span>
//                                 </div>
//                             </div>
//                             <div className="text-center">
//                                 <div
//                                     className={`text-sm font-bold ${timeLeft <= 5 ? "animate-pulse" : ""}`}
//                                     style={{
//                                         color: timeLeft <= 5 ? '#ed548c' : '#131a31',
//                                         fontFamily: 'var(--font-bitcount, sans-serif)'
//                                     }}
//                                 >
//                                     ⏰ {timeLeft}s
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Barra de progreso */}
//                         <div className="bg-white rounded-full h-1 mb-2 overflow-hidden">
//                             <div
//                                 className="h-1 rounded-full transition-all duration-500"
//                                 style={{
//                                     width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//                                     backgroundColor: '#58b7cf'
//                                 }}
//                             />
//                         </div>
//
//                         {/* Pregunta */}
//                         <div className="flex-1 overflow-y-auto">
//                             <h3
//                                 className="mb-3 text-sm md:text-base font-bold text-center"
//                                 style={{ color: '#dbeecb', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//                             >
//                                 {questions[currentQuestion].question}
//                             </h3>
//
//                             {/* Renderizado condicional de la imagen */}
//                             {questions[currentQuestion].image && (
//                                 <div className="mb-3 text-center">
//                                     <img
//                                         src={questions[currentQuestion].image}
//                                         alt={questions[currentQuestion].imageAlt || 'Imagen de la pregunta'}
//                                         className="max-w-full max-h-20 mx-auto rounded border"
//                                         style={{ borderColor: '#868686' }}
//                                     />
//                                 </div>
//                             )}
//
//                             {/* Opciones */}
//                             <div className="space-y-1">
//                                 {questions[currentQuestion].options.map((option, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => handleAnswerSelect(option)}
//                                         disabled={showResult}
//                                         className="w-full py-1 px-2 md:py-2 md:px-3 rounded text-left text-xs transition-all"
//                                         style={{
//                                             backgroundColor: showResult
//                                                 ? option === questions[currentQuestion].correctAnswer
//                                                     ? '#58b7cf'
//                                                     : option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
//                                                         ? '#ed548c'
//                                                         : '#868686'
//                                                 : selectedAnswer === option
//                                                     ? '#ac5eaa'
//                                                     : '#868686',
//                                             color: showResult || selectedAnswer === option ? 'white' : '#131a31',
//                                             fontFamily: 'var(--font-helvetica, sans-serif)'
//                                         }}
//                                     >
//                                         <div className="flex items-center justify-between">
//                                             <div className="flex items-center">
//                                                 <span className="w-4 h-4 rounded-full flex items-center justify-center font-bold mr-2 text-xs bg-white" style={{ color: '#131a31' }}>
//                                                     {String.fromCharCode(65 + i)}
//                                                 </span>
//                                                 <span>{option}</span>
//                                             </div>
//                                             {showResult && option === questions[currentQuestion].correctAnswer && (
//                                                 <span className="text-white text-sm">✓</span>
//                                             )}
//                                             {showResult && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
//                                                 <span className="text-white text-sm">✗</span>
//                                             )}
//                                         </div>
//                                     </button>
//                                 ))}
//                             </div>
//
//                             {/* Feedback de respuesta correcta */}
//                             {showResult && selectedAnswer === questions[currentQuestion].correctAnswer && (
//                                 <div className="mt-2 p-2 rounded text-center text-xs font-bold" style={{ backgroundColor: '#58b7cf', color: 'white' }}>
//                                     ¡Correcto! +{10 + Math.floor(timeLeft / 2)} puntos
//                                     {Math.floor(timeLeft / 2) > 0 && (
//                                         <span className="block text-xs">(Bonus velocidad: +{Math.floor(timeLeft / 2)})</span>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//
//                         {/* Botones de acción */}
//                         <div className="mt-2">
//                             {!showResult && selectedAnswer && (
//                                 <button
//                                     onClick={handleSubmitAnswer}
//                                     className="w-full py-1 md:py-2 rounded-lg font-bold text-xs md:text-base transition-all hover:opacity-90"
//                                     style={{
//                                         backgroundColor: "#dbeecb",
//                                         color: "#131a31",
//                                         fontFamily: "var(--font-helvetica, sans-serif)"
//                                     }}
//                                 >
//                                     ✅ Confirmar Respuesta
//                                 </button>
//                             )}
//
//                             {showResult && (
//                                 <button
//                                     onClick={handleNextQuestion}
//                                     className="w-full py-1 md:py-2 rounded-lg font-bold text-xs md:text-base transition-all hover:opacity-90"
//                                     style={{
//                                         backgroundColor: "#ffaf42",
//                                         color: "#131a31",
//                                         fontFamily: "var(--font-helvetica, sans-serif)"
//                                     }}
//                                 >
//                                     {currentQuestion < questions.length - 1 ? "➡️ Siguiente Pregunta" : "🎯 Ver Resultados"}
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 )}
//
//                 {/* Pantalla final */}
//                 {gameFinished && (
//                     <div className="text-center flex flex-col justify-center flex-1 text-xs md:text-base">
//                         <div className="text-3xl mb-2">{getHeaderMessage().emoji}</div>
//                         <h2
//                             className="text-lg md:text-xl font-bold mb-2"
//                             style={{ color: '#ed548c', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//                         >
//                             {getHeaderMessage().title}
//                         </h2>
//                         <p
//                             className="mb-2"
//                             style={{ color: '#868686', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                         >
//                             {getHeaderMessage().subtitle}
//                         </p>
//
//                         {/* Puntuación detallada */}
//                         <div className="rounded p-3 mb-3 text-xs border" style={{ backgroundColor: '#ffaf42', borderColor: '#131a31' }}>
//                             <div
//                                 className="text-xl font-bold mb-1"
//                                 style={{ color: '#131a31', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//                             >
//                                 {score}
//                             </div>
//                             <p
//                                 className="text-xs mb-1"
//                                 style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                             >
//                                 de {questions.length * 20} puntos posibles
//                             </p>
//                             <div className="bg-white rounded-full h-2 mb-1 overflow-hidden">
//                                 <div
//                                     className="h-2 rounded-full transition-all duration-1000"
//                                     style={{
//                                         width: `${(score / (questions.length * 20)) * 100}%`,
//                                         backgroundColor: '#ac5eaa'
//                                     }}
//                                 />
//                             </div>
//                             <p
//                                 className="font-bold"
//                                 style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                             >
//                                 {Math.round((score / (questions.length * 20)) * 100)}%
//                             </p>
//                         </div>
//
//                         <div className="rounded p-2 mb-3" style={{ backgroundColor: '#ac5eaa' }}>
//                             <p
//                                 className="font-bold text-white text-xs"
//                                 style={{ fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                             >
//                                 {getScoreMessage()}
//                             </p>
//                         </div>
//
//                         <button
//                             onClick={resetGame}
//                             className="w-full py-1 md:py-2 rounded-lg font-bold transition-all hover:opacity-90"
//                             style={{
//                                 backgroundColor: "#ac5eaa",
//                                 color: "#dbeecb",
//                                 fontFamily: "var(--font-helvetica, sans-serif)"
//                             }}
//                         >
//                             🔄 Jugar de Nuevo
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };