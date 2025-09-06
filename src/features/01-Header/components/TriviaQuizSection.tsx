// import { useState, useEffect, type SetStateAction } from "react";
// import { allQuestions, type Question } from "./questions";
// import hero from "@/assets/hero.png";
//
// export const TriviaQuizGame = ({
//                                  heroImage = hero,
//                                  heroContainerWidth = "w-full",
//                                  heroContainerMaxWidth = "w-full",
//                                  // Props para personalizar el overlay/pantalla del quiz
//                                  overlayWidth="60%",
//                                  overlayHeight="49%",
//                                  overlayLeft="20%",
//                                  overlayTop="18%",
//                                  overlayAspectRatio = "483 / 230",
//                                  overlayPadding = "p-2 sm:p-4",
//                                  overlayRounded = "rounded-sm",
//                                  // Props para el juego y pantalla final (cuando se expande)
//                                  gameContainerWidth = "w-full",
//                                  gameContainerMaxWidth = "max-w-[924px]",
//                                  gameContainerHeight = "min-h-[600px]"
//                                } = {}) => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [showResult, setShowResult] = useState(false);
//   const [score, setScore] = useState(0);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameFinished, setGameFinished] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(20);
//
//   const selectRandomQuestions = () => {
//     const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 8);
//   };
//
//   useEffect(() => {
//     setQuestions(selectRandomQuestions());
//   }, []);
//
//   useEffect(() => {
//     if (gameStarted && !gameFinished && !showResult && timeLeft > 0 && questions.length > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0 && !showResult) {
//       setShowResult(true);
//     }
//   }, [timeLeft, gameStarted, gameFinished, showResult, questions.length]);
//
//   const startGame = () => {
//     setQuestions(selectRandomQuestions());
//     setGameStarted(true);
//     setCurrentQuestion(0);
//     setScore(0);
//     setTimeLeft(20);
//     setSelectedAnswer("");
//     setShowResult(false);
//     setGameFinished(false);
//   };
//
//   const handleAnswerSelect = (answer: SetStateAction<string>) => {
//     if (!showResult) setSelectedAnswer(answer);
//   };
//
//   const handleSubmitAnswer = () => {
//     if (selectedAnswer === questions[currentQuestion].correctAnswer) {
//       const timeBonus = Math.floor(timeLeft / 2);
//       const basePoints = 10;
//       setScore(score + basePoints + timeBonus);
//     }
//     setShowResult(true);
//   };
//
//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer("");
//       setShowResult(false);
//       setTimeLeft(20);
//     } else {
//       setGameFinished(true);
//     }
//   };
//
//   const resetGame = () => {
//     setGameStarted(false);
//     setGameFinished(false);
//     setCurrentQuestion(0);
//     setScore(0);
//     setSelectedAnswer("");
//     setShowResult(false);
//     setTimeLeft(20);
//   };
//
//   const getScoreMessage = () => {
//     const maxPossibleScore = questions.length * 20;
//     const percentage = (score / maxPossibleScore) * 100;
//
//     if (percentage >= 80) return "¡Excelente! Conductor experto 🏆";
//     if (percentage >= 60) return "¡Muy bien! Buen conocimiento 👍";
//     if (percentage >= 40) return "Regular, sigue practicando 📚";
//     return "Necesitas estudiar más las reglas 📖";
//   };
//
//   const getHeaderMessage = () => {
//     const maxPossibleScore = questions.length * 20;
//     const percentage = (score / maxPossibleScore) * 100;
//
//     if (percentage >= 85) {
//       return { emoji: "🎉", title: "¡Felicitaciones!", subtitle: "Aprobaste el examen" };
//     } else if (percentage >= 65) {
//       return { emoji: "😐", title: "Sigue Intentando", subtitle: "Regular, sigue practicando" };
//     } else {
//       return { emoji: "😔", title: "Sigue Intentando", subtitle: "Fallaste, sigue practicando" };
//     }
//   };
//
//   // Estado de carga
//   if (questions.length === 0) {
//     return (
//       <div className={`relative ${heroContainerWidth} ${heroContainerMaxWidth} mx-auto`}>
//         <img
//           src={heroImage}
//           alt="Hero"
//           className="w-full h-auto block"
//         />
//         <div
//           className={`absolute bg-[#131a31]/90 ${overlayRounded} shadow-lg ${overlayPadding} flex flex-col items-center justify-center`}
//           style={{
//             top: overlayTop,
//             left: overlayLeft,
//             width: overlayWidth,
//             height: overlayHeight === "auto" ? undefined : overlayHeight,
//             aspectRatio: overlayHeight === "auto" ? overlayAspectRatio : undefined,
//             color: "#dbeecb",
//           }}
//         >
//           <div className="text-2xl sm:text-4xl mb-2 animate-spin" style={{ color: '#58b7cf' }}>🔄</div>
//           <h2
//             className="text-sm sm:text-lg font-bold text-center"
//             style={{ fontFamily: 'var(--font-bitcount, sans-serif)', color: '#dbeecb' }}
//           >
//             Cargando preguntas...
//           </h2>
//         </div>
//       </div>
//     );
//   }
//
//   // Pantalla inicial con hero image - RESPONSIVE MEJORADA PARA MÓVIL
//   if (!gameStarted) {
//     return (
//       <div className={`relative ${heroContainerWidth} ${heroContainerMaxWidth} mx-auto`}>
//         <img
//           src={heroImage}
//           alt="Hero"
//           className="w-full h-auto block"
//         />
//
//         <div
//           className={`absolute bg-[#131a31]/90 ${overlayRounded} shadow-lg flex flex-col`}
//           style={{
//             top: overlayTop,
//             left: overlayLeft,
//             width: overlayWidth,
//             height: overlayHeight === "auto" ? undefined : overlayHeight,
//             aspectRatio: overlayHeight === "auto" ? overlayAspectRatio : undefined,
//             color: "#dbeecb",
//             padding: "clamp(0.25rem, 1.5vw, 1rem)", // Padding más reducido en móvil
//             overflow: "hidden",
//           }}
//         >
//           <div className="flex flex-col justify-between h-full">
//             {/* Título principal */}
//             <div className="text-center">
//               <h2
//                 className="font-bold leading-none"
//                 style={{
//                   fontFamily: "var(--font-bitcount, sans-serif)",
//                   color: "#58b7cf",
//                   fontSize: "clamp(0.6rem, 2.8vw, 1.25rem)",
//                   marginBottom: "clamp(0.125rem, 0.5vw, 0.25rem)"
//                 }}
//               >
//                 🚗 Trivia de Conducir
//               </h2>
//               <p
//                 className="leading-none"
//                 style={{
//                   fontFamily: "var(--font-helvetica, sans-serif)",
//                   color: "#ffaf42",
//                   fontSize: "clamp(0.5rem, 2.2vw, 0.875rem)",
//                   marginBottom: "clamp(0.25rem, 1vw, 0.5rem)"
//                 }}
//               >
//                 ¿Qué tanto sabes sobre manejo seguro?
//               </p>
//             </div>
//
//             {/* Reglas - ultra compactas para móvil */}
//             <div
//               className="rounded border"
//               style={{
//                 backgroundColor: '#58b7cf',
//                 borderColor: '#131a31',
//                 padding: "clamp(0.25rem, 1vw, 0.5rem)",
//                 marginBottom: "clamp(0.25rem, 1vw, 0.5rem)"
//               }}
//             >
//               <h4
//                 className="font-bold leading-none"
//                 style={{
//                   color: '#131a31',
//                   fontFamily: 'var(--font-bitcount, sans-serif)',
//                   fontSize: "clamp(0.5rem, 2vw, 0.75rem)",
//                   marginBottom: "clamp(0.125rem, 0.5vw, 0.25rem)"
//                 }}
//               >
//                 📋 Reglas
//               </h4>
//               <ul
//                 className="leading-none"
//                 style={{
//                   color: '#131a31',
//                   fontFamily: 'var(--font-helvetica, sans-serif)',
//                   fontSize: "clamp(0.375rem, 1.8vw, 0.625rem)",
//                   lineHeight: "1.1"
//                 }}
//               >
//                 <li style={{ marginBottom: "clamp(0.0625rem, 0.25vw, 0.125rem)" }}>• {questions.length} preguntas desafiantes</li>
//                 <li style={{ marginBottom: "clamp(0.0625rem, 0.25vw, 0.125rem)" }}>• 20 segundos por pregunta</li>
//                 <li>• Una sola oportunidad</li>
//               </ul>
//             </div>
//
//             {/* Botón */}
//             <button
//               onClick={startGame}
//               className="w-full rounded font-bold transition-all hover:opacity-90 leading-none"
//               style={{
//                 backgroundColor: "#ed548c",
//                 color: "#131a31",
//                 fontFamily: "var(--font-helvetica, sans-serif)",
//                 padding: "clamp(0.25rem, 1.5vw, 0.75rem) clamp(0.375rem, 2vw, 1rem)",
//                 fontSize: "clamp(0.5rem, 2.2vw, 0.875rem)"
//               }}
//             >
//               🚀 Comenzar Trivia
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
//
//   // Juego activo - ocupa el espacio del componente
//   if (gameStarted && !gameFinished) {
//     return (
//       <div className={`${gameContainerWidth} ${gameContainerMaxWidth} ${gameContainerHeight} mx-auto bg-[#131a31] rounded-lg shadow-lg p-4 md:p-6 flex flex-col`} style={{ color: "#dbeecb" }}>
//         {/* Header del juego */}
//         <div className="flex justify-between items-center mb-4 p-3 md:p-4 rounded flex-shrink-0" style={{ backgroundColor: '#ffaf42' }}>
//           <div>
//             <h3
//               className="font-bold text-sm md:text-base"
//               style={{ color: '#131a31', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//             >
//               Pregunta {currentQuestion + 1} / {questions.length}
//             </h3>
//             <div className="flex items-center space-x-2 mt-1">
//                             <span
//                               className="text-xs md:text-sm"
//                               style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//                             >
//                                 Puntos:
//                             </span>
//               <span
//                 className="px-2 py-1 rounded font-bold text-xs md:text-sm text-white"
//                 style={{ backgroundColor: '#ac5eaa', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//               >
//                                 {score}
//                             </span>
//             </div>
//           </div>
//           <div className="text-center">
//             <div
//               className={`text-lg md:text-xl font-bold ${timeLeft <= 5 ? "animate-pulse" : ""}`}
//               style={{
//                 color: timeLeft <= 5 ? '#ed548c' : '#131a31',
//                 fontFamily: 'var(--font-bitcount, sans-serif)'
//               }}
//             >
//               ⏰ {timeLeft}s
//             </div>
//           </div>
//         </div>
//
//         {/* Barra de progreso */}
//         <div className="bg-white rounded-full h-2 mb-6 overflow-hidden">
//           <div
//             className="h-2 rounded-full transition-all duration-500"
//             style={{
//               width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//               backgroundColor: '#58b7cf'
//             }}
//           />
//         </div>
//
//         {/* Contenido del juego */}
//         <div className="flex-1 flex flex-col">
//           <h3
//             className="mb-6 text-lg md:text-xl font-bold text-center"
//             style={{ color: '#dbeecb', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//           >
//             {questions[currentQuestion].question}
//           </h3>
//
//           {/* Imagen de pregunta si existe */}
//           {questions[currentQuestion].image && (
//             <div className="mb-4 text-center">
//               <img
//                 src={questions[currentQuestion].image}
//                 alt={questions[currentQuestion].imageAlt || 'Imagen de la pregunta'}
//                 className="max-w-full max-h-32 mx-auto rounded border"
//                 style={{ borderColor: '#868686' }}
//               />
//             </div>
//           )}
//
//           {/* Opciones */}
//           <div className="space-y-3 flex-1">
//             {questions[currentQuestion].options.map((option, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleAnswerSelect(option)}
//                 disabled={showResult}
//                 className="w-full py-3 px-4 rounded-lg text-left text-sm md:text-base transition-all hover:scale-[1.02]"
//                 style={{
//                   backgroundColor: showResult
//                     ? option === questions[currentQuestion].correctAnswer
//                       ? '#58b7cf'
//                       : option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
//                         ? '#ed548c'
//                         : '#868686'
//                     : selectedAnswer === option
//                       ? '#ac5eaa'
//                       : '#868686',
//                   color: showResult || selectedAnswer === option ? 'white' : '#131a31',
//                   fontFamily: 'var(--font-helvetica, sans-serif)'
//                 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                                         <span className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold mr-3 bg-white text-sm md:text-base" style={{ color: '#131a31' }}>
//                                             {String.fromCharCode(65 + i)}
//                                         </span>
//                     <span className="flex-1">{option}</span>
//                   </div>
//                   {showResult && option === questions[currentQuestion].correctAnswer && (
//                     <span className="text-white text-lg">✓</span>
//                   )}
//                   {showResult && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
//                     <span className="text-white text-lg">✗</span>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
//
//           {/* Feedback de respuesta correcta */}
//           {showResult && selectedAnswer === questions[currentQuestion].correctAnswer && (
//             <div className="mt-4 p-3 rounded-lg text-center font-bold" style={{ backgroundColor: '#58b7cf', color: 'white' }}>
//               ¡Correcto! +{10 + Math.floor(timeLeft / 2)} puntos
//               {Math.floor(timeLeft / 2) > 0 && (
//                 <div className="text-xs md:text-sm mt-1">(Bonus velocidad: +{Math.floor(timeLeft / 2)})</div>
//               )}
//             </div>
//           )}
//
//           {/* Botones de acción */}
//           <div className="mt-4">
//             {!showResult && selectedAnswer && (
//               <button
//                 onClick={handleSubmitAnswer}
//                 className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
//                 style={{
//                   backgroundColor: "#dbeecb",
//                   color: "#131a31",
//                   fontFamily: "var(--font-helvetica, sans-serif)"
//                 }}
//               >
//                 ✅ Confirmar Respuesta
//               </button>
//             )}
//
//             {showResult && (
//               <button
//                 onClick={handleNextQuestion}
//                 className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
//                 style={{
//                   backgroundColor: "#ffaf42",
//                   color: "#131a31",
//                   fontFamily: "var(--font-helvetica, sans-serif)"
//                 }}
//               >
//                 {currentQuestion < questions.length - 1 ? "➡️ Siguiente Pregunta" : "🎯 Ver Resultados"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
//
//   // Pantalla final - ocupa el espacio del componente
//   if (gameFinished) {
//     return (
//       <div className={`${gameContainerWidth} ${gameContainerMaxWidth} ${gameContainerHeight} mx-auto bg-[#131a31] rounded-lg shadow-lg p-4 md:p-6 flex flex-col justify-center text-center`}>
//         <div className="max-w-lg mx-auto w-full">
//           <div className="text-4xl md:text-6xl mb-4">{getHeaderMessage().emoji}</div>
//           <h2
//             className="text-2xl md:text-3xl font-bold mb-3"
//             style={{ color: '#ed548c', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//           >
//             {getHeaderMessage().title}
//           </h2>
//           <p
//             className="mb-6 text-lg"
//             style={{ color: '#868686', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//           >
//             {getHeaderMessage().subtitle}
//           </p>
//
//           {/* Puntuación detallada */}
//           <div className="rounded-lg p-4 mb-4 max-w-md mx-auto border" style={{ backgroundColor: '#ffaf42', borderColor: '#131a31' }}>
//             <div
//               className="text-3xl font-bold mb-2"
//               style={{ color: '#131a31', fontFamily: 'var(--font-bitcount, sans-serif)' }}
//             >
//               {score}
//             </div>
//             <p
//               className="mb-3 text-sm"
//               style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//             >
//               de {questions.length * 20} puntos posibles
//             </p>
//             <div className="bg-white rounded-full h-3 mb-3 overflow-hidden">
//               <div
//                 className="h-3 rounded-full transition-all duration-1000"
//                 style={{
//                   width: `${(score / (questions.length * 20)) * 100}%`,
//                   backgroundColor: '#ac5eaa'
//                 }}
//               />
//             </div>
//             <p
//               className="font-bold text-xl"
//               style={{ color: '#131a31', fontFamily: 'var(--font-helvetica, sans-serif)' }}
//             >
//               {Math.round((score / (questions.length * 20)) * 100)}%
//             </p>
//           </div>
//
//           <div className="rounded-lg p-3 mb-6 max-w-md mx-auto" style={{ backgroundColor: '#ac5eaa' }}>
//             <p
//               className="font-bold text-white text-base"
//               style={{ fontFamily: 'var(--font-helvetica, sans-serif)' }}
//             >
//               {getScoreMessage()}
//             </p>
//           </div>
//
//           <button
//             onClick={resetGame}
//             className="w-full max-w-md mx-auto py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
//             style={{
//               backgroundColor: "#ac5eaa",
//               color: "#dbeecb",
//               fontFamily: "var(--font-helvetica, sans-serif)"
//             }}
//           >
//             🔄 Jugar de Nuevo
//           </button>
//         </div>
//       </div>
//     );
//   }
//
//   return null;
// };