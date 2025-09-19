import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const DisclaimerInfo = () => {
  const codeString = `// Algoritmo Fisher-Yates modificado para garantizar preguntas únicas
const selectRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
};`;

  return (
    <div className="text-justify w-full text-xs md:text-base disclaimer-info">
      <h1 className="heading-1">Trivia de conducción</h1>

      <h2 className="heading-2">¿Qué es esta herramienta?</h2>
      <p>
        Una aplicación web educativa desarrollada para practicar conocimientos de tránsito basada en preguntas del balotario oficial del Ministerio de Transportes y Comunicaciones (MTC) del Perú. Funciona como un simulador de práctica con fines exclusivamente educativos.
      </p>
      <br/>


      <h2 className="heading-2">¿Cómo funciona?</h2>
      <h3 className="heading-3">El Examen</h3>
      <ul className="list-disc pl-8">
        <li>8 preguntas aleatorias sacadas del balotario oficial del MTC</li>
        <li>20 segundos para responder cada pregunta</li>
        <li>4 opciones de respuesta múltiple por pregunta</li>
        <li>Sin repetir: cada vez salen preguntas diferentes</li>
      </ul>
      <h3 className="heading-3">Sistema de Puntuación</h3>
      <ul className="list-disc pl-8">
        <li>10 puntos base por respuesta correcta</li>
        <li>Puntos extra si se responde rápido (hasta 10 puntos adicionales)</li>
        <li>Máximo posible: 160 puntos (20 puntos × 8 preguntas)</li>
      </ul>
      <h3 className="heading-3">¿Cómo se califica?</h3>
      <ul className="list-disc pl-8">
        <li>80% o más (&gt;=128 puntos): Aprobado – Conductor aprobado </li>
        <li>60-80% (96-127 puntos): Regular – Requiere más práctica</li>
        <li>Menos de 60% (&lt;127 puntos): Necesita estudio adicional</li>
      </ul>


      <br />
      <h2 className="heading-2">Desarrollo técnico
      </h2>
      <h3 className="heading-3">Arquitectura de Software</h3>
      <ul className="list-disc pl-8">
        <li>Framework: React 18+ con TypeScript para mayor robustez y mantenibilidad</li>
        <li>Gestión de Estado: Hooks nativos de React (useState, useEffect)</li>
        <li>Estilos: Tailwind CSS con paleta de colores personalizada</li>
        <li>Tipografías: Bitcount Mono y Helvetica Neue para mejor experiencia visual</li>
      </ul>
      <br />


      <h2 className="heading-2">Algoritmos Implementados</h2>
      <h3 className="heading-3">Selección Aleatoria:</h3>
      <SyntaxHighlighter language="javascript">
        {codeString}
      </SyntaxHighlighter>
      <h3 className="heading-3">Sistema de Puntuación Ponderada:</h3>
      <ul className="list-disc pl-8">
        <li>Puntuación = (Respuestas Correctas × 10) + Σ(Bonus Temporal)</li>
        <li>Bonus Temporal = floor(tiempo restante / 2) por pregunta correcta</li>
        <li>Máximo: 160 puntos (8 × 20 puntos)</li>
      </ul>
      <h3 className="heading-3">Flujo de Estados</h3>
      <ul className="list-disc pl-8">
        <li>LOADING: Inicialización del balotario de preguntas</li>
        <li>IDLE: Pantalla de inicio y configuración</li>
        <li>ACTIVE: Pregunta activa con cronómetro de 20 segundos</li>
        <li>RESULT: Feedback inmediato de respuesta individual</li>
        <li>FINISHED: Evaluación final y opción de reinicio</li>
      </ul>

      <br/>

      <h2 className="heading-2">Optimizaciones Técnicas</h2>
      <ul className="list-disc pl-8">
        <li>Performance: Limpieza automática de timers para evitar memory leaks</li>
        <li>Responsividad: Diseño adaptativo para dispositivos móviles y desktop</li>
        <li>Accesibilidad: Contraste de colores y navegación por teclado</li>
        <li>Validación: Control de estados para prevenir respuestas múltiples</li>
      </ul>

      <br/>
      <br/>

      <h1 className="heading-1">Funcionamiento del sistema</h1>
      <h3 className="heading-3">Mecánica de Evaluación</h3>
      <ul className="list-disc pl-8">
        <li>Pool de Preguntas: Base de datos basada en normativa MTC vigente</li>
        <li>Selección: 8 preguntas aleatorias por sesión (sin repetición)</li>
        <li>Temporización: 20 segundos por pregunta con avance automático</li>
        <li>Puntuación: Sistema híbrido que premia precisión y velocidad</li>
        <li>Feedback: Retroalimentación inmediata con códigos de color</li>
      </ul>
      <h3 className="heading-3">Criterios de Evaluación</h3>
      <ul className="list-disc pl-8">
        <li>≥80% (128+ puntos): Nivel experto - Dominio sólido</li>
        <li>60-80% (96-127 puntos): Nivel intermedio - Requiere refuerzo</li>
        <li>60% (&lt;127 puntos): Nivel básico - Necesita estudio adicional</li>
      </ul>
      <h3 className="heading-3">Categorías Temáticas Incluidas</h3>
      <ul className="list-disc pl-8">
        <li>Señalización vial oficial y su interpretación</li>
        <li>Normativas de velocidad urbana y interurbana</li>
        <li>Procedimientos de adelantamiento y cambio de carril</li>
        <li>Límites legales de alcoholemia y sustancias</li>
        <li>Protocolos de emergencia y primeros auxilios</li>
        <li>Técnicas de conducción defensiva</li>
      </ul>

      <br />
      <br />

      <h1 className="heading-1">Funcionamiento del sistema</h1>
      <h2 className="heading-2">Principios Éticos de Desarrollo</h2>
      <h3 className="heading-3">Transparencia:</h3>
      <ul className="list-disc pl-8">
        <li>Código fuente auditable y metodología documentada</li>
        <li>Algoritmos de puntuación claramente explicados</li>
        <li>Fuentes de información explícitamente citadas</li>
      </ul>
      <h3 className="heading-3">Responsabilidad Educativa:</h3>
      <ul className="list-disc pl-8">
        <li>Contenido basado exclusivamente en normativa oficial MTC</li>
        <li>Actualización periódica según cambios regulatorios</li>
        <li>Evita simplificación excesiva de conceptos complejos</li>
      </ul>
      <h3 className="heading-3">Privacidad:</h3>
      <ul className="list-disc pl-8">
        <li>No recolección de datos personales</li>
        <li>Funcionamiento completamente local (sin servidores externos)</li>
        <li>Sin tracking ni análisis de comportamiento de usuarios</li>
      </ul>
      <br/>

      <h2 className="heading-2">Limitaciones y Descargos de Responsabilidad</h2>
      <h3 className="heading-3">Importante – Esta no es una herramienta oficial:</h3>
      <ul className="list-disc pl-8">
        <li>No es el examen real: Esta trivia es un simulador educativo independiente</li>
        <li>No garantiza aprobación: El éxito aquí no asegura éxito en el examen oficial</li>
        <li>No reemplaza la capacitación formal: Se recomienda tomar cursos oficiales en escuelas de manejo certificadas</li>
        <li>Alcance limitado: Cubre aspectos teóricos básicos, no incluye práctica de manejo</li>
        <li>Sin validez legal: Los resultados no tienen valor oficial ante el MTC</li>
      </ul>


      <br />
      <br />

      <h1 className="heading-1">Recomendaciones de Uso Responsable</h1>
      <h3 className="heading-3">Usar como:</h3>
      <ul className="list-disc pl-8">
        <li>Herramienta de práctica complementaria</li>
        <li>Recurso de repaso antes del examen oficial</li>
        <li>Instrumento de autoevaluación de conocimientos básicos</li>
        <li>Material de estudio para reforzar conceptos específicos</li>
      </ul>
      <h3 className="heading-3">No usar como:</h3>
      <ul className="list-disc pl-8">
        <li>Único método de preparación para el examen</li>
        <li>Reemplazo de educación vial formal</li>
        <li>Herramienta de certificación oficial</li>
        <li>Fuente única de conocimientos de tránsito</li>
      </ul>


      <br />
      <br />

      <h1 className="heading-1">Videos generados con IA</h1>
      <p>
        Para el especial periodístico sobre las licencias de conducir, se aplicó una metodología
        de producción innovadora que combinó el rigor de la investigación periodística con las capacidades
        de la inteligencia artificial. El proceso se centró en el uso de Gemini 2.5 Flash para generar
        prompts detallados, que luego alimentaron el generador de videos Google Veo 3, permitiendo recrear
        situaciones narradas por los entrevistados.
      </p>
      <br/>
      <h2 className="heading-2">Fases de la metodología</h2>
      <br />

      <h3 className="heading-3 font-semibold">1. Investigación y captura de testimonios</h3>
      <p>
        El primer paso fue la investigación preliminar y la recolección de testimonios. Se realizaron entrevistas a cuatro personas que habían rendido los exámenes de manejo, con el objetivo de capturar situaciones atípicas y vívidas. Las grabaciones fueron meticulosamente transcritas a texto, convirtiendo las experiencias verbales en material narrativo.
      </p>

      <br />

      <h3 className="heading-3 font-semibold">2. Análisis y extracción de contenido clave</h3>
      <p>
        El equipo periodístico analizó manualmente las transcripciones para identificar las citas más importantes y representativas. Se buscó capturar no solo los hechos, sino también las emociones y la atmósfera de cada relato. Estas citas se convirtieron en la base para la construcción de los guiones visuales.
      </p>

      <br />

      <h3 className="heading-3 font-semibold">3. Generación de prompts con IA</h3>
      <p>
        Aquí es donde la inteligencia artificial jugó un papel crucial. Se utilizó Gemini 2.5 Flash para generar los prompts que guiarían la creación de los videos. El proceso se estructuró en cinco secciones clave:
      </p>
      <ul className="list-disc pl-8">
        <li>
          <span className="font-semibold">Prompt a reescribir:</span> Una versión inicial y básica de la escena.
        </li>
        <li>
          <span className="font-semibold">Consideraciones:</span> Instrucciones detalladas para la IA, especificando la coherencia, el nivel de detalle, la ausencia de pronombres y la necesidad de una descripción exhaustiva para cada elemento.
        </li>
        <li>
          <span className="font-semibold">Ejemplo detallado:</span> Un prompt modelo que servía como referencia estilística y de formato para asegurar la calidad y el nivel de precisión deseado.
        </li>
        <li>
          <span className="font-semibold">Descripciones adicionales:</span> Detalles complementarios sobre la iluminación, el sonido, los vehículos y el entorno, cruciales para replicar la atmósfera real del circuito de manejo en Lima.
        </li>
        <li>
          <span className="font-semibold">Premisa:</span> La instrucción final a la IA para reescribir el prompt inicial, utilizando la estructura del ejemplo y conservando los elementos clave.
        </li>
      </ul>
      <p>
        Este enfoque modular permitió a la IA crear descripciones extremadamente detalladas y
        coherentes, traduciendo la riqueza de los testimonios en guiones visuales precisos.
      </p>

      <br />

      <h3 className="heading-3 font-semibold">4. Creación de Videos con IA</h3>
      <p>
        Los prompts generados por Gemini 2.5 Flash se ingresaron en Google Veo 3. Esta herramienta, con su
        capacidad de interpretar descripciones complejas, generó secuencias de video que recrearon con
        fidelidad los escenarios, personajes y emociones descritos. El resultado final fue un conjunto
        de videos que, sin ser grabaciones reales, capturaron la esencia y la verosimilitud de las experiencias
        narradas, ofreciendo un nuevo formato para el periodismo narrativo.
      </p>


      <br />
      <br />

      <h1 className="heading-1">Modelo predictivo</h1>
      <div className="space-y-[8px]">
        <p>
          En este proyecto se construyó un modelo predictivo para estimar la cantidad de intentos que una persona
          podría necesitar para obtener su licencia de conducir en el Perú. La base de datos utilizada corresponde a
          los exámenes de conducir del MTC, obtenidos mediante una solicitud de acceso a la información pública, de acuerdo
          con la Ley de Transparencia y su reglamento. El conjunto de datos fue entregado de forma anonimizada e
          incluye aproximadamente 3 millones de registros de candidatos que rindieron los exámenes teórico y práctico
          de manejo en los años 2020-2024.
        </p>
        <p>
          El proceso inició con un análisis exploratorio de datos (EDA), que permitió identificar
          patrones relevantes. Posteriormente, se aplicaron técnicas de preprocesamiento como la agrupación de
          participantes por rangos etarios y la creación de variables dummy, con el fin de mejorar la representatividad
          y manejabilidad de la información.
        </p>
        <p>
          El EDA reveló que la mayoría de postulantes aprueba en uno o dos intentos, mientras que tres o más intentos
          constituyen casos atípicos. Por ello, se discretizó la variable objetivo en tres categorías: 1, 2 y
          ≥3 intentos. Entre los modelos evaluados, el Random Forest Classifier obtuvo el mejor desempeño: accuracy de
          92%, macro promedio de 0.75 en precisión, 0.76 en recall y 0.75 en F1-score, además de valores ponderados
          de 0.92, 0.91 y 0.91, respectivamente.
        </p>
        <p>
          El análisis de importancia de variables mostró que el puntaje del examen teórico y la región de procedencia
          fueron los factores más influyentes, seguidos por el grupo etario. El género resultó ser la variable con menor impacto.
        </p>
      </div>
    </div>
  )
}
