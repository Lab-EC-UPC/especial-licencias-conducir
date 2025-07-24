import quizImages from "@/features/08-TriviaQuiz/quizImages.ts";

export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
    image?: string; // URL de la imagen
    imageAlt?: string; // Texto alternativo para la imagen
}

export const allQuestions: Question[] = [
    {
        question: "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa:",
        options: [
            "Obligación de detenerse de quien así lo enfrente.",
            "Continuar la marcha por el carril izquierdo de la calzada.",
            "Continuar la marcha.",
            "Ninguna de las alternativas es correcta."
        ],
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
        options: [
            "En su derecho - negarse.",
            "Facultado - Rechazar.",
            "Obligado - someterse.",
            "Ninguna de las alternativas es correcta."
        ],
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
        options: [
            "Acudir a la estación de bomberos.",
            "Llamar a un familiar.",
            "Solicitar la intervención de la autoridad policial.",
            "Abandonar el lugar donde ocurrió el accidente."
        ],
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
    },
    {
        question: "¿Cuál es la función principal de los espejos retrovisores?",
        options: [
            "Observar el estado del motor del vehículo.",
            "Permitir la visión hacia atrás y los costados del vehículo.",
            "Reflejar la luz solar para otros conductores.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Permitir la visión hacia atrás y los costados del vehículo."
    },
    {
        question: "Al estacionar en una pendiente, ¿qué medida de seguridad debe tomar?",
        options: [
            "Dejar el vehículo en punto muerto.",
            "Accionar el freno de mano y orientar las ruedas hacia el sardinel.",
            "Solo accionar el freno de mano.",
            "Dejar las luces encendidas."
        ],
        correctAnswer: "Accionar el freno de mano y orientar las ruedas hacia el sardinel."
    },
    {
        question: "¿Cuándo debe usar las luces altas de su vehículo?",
        options: [
            "En zonas urbanas para mejor visibilidad.",
            "Cuando hay neblina intensa.",
            "En carreteras oscuras sin tráfico en sentido contrario.",
            "Siempre que conduzca de noche."
        ],
        correctAnswer: "En carreteras oscuras sin tráfico en sentido contrario."
    },
    {
        question: "¿Qué debe hacer al aproximarse a un cruce de peatones?",
        options: [
            "Acelerar para pasar rápidamente.",
            "Tocar el claxon continuamente.",
            "Reducir la velocidad y estar preparado para detenerse.",
            "Mantener la velocidad constante."
        ],
        correctAnswer: "Reducir la velocidad y estar preparado para detenerse."
    },
    {
        question: "La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:",
        options: [
            "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.",
            "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
            "El único sentido de desplazamiento es continuar de frente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.",
        image: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Señal+R-6+Prohibido+Voltear+Izquierda",
        imageAlt: "Señal de tránsito R-6 que prohíbe voltear a la izquierda"
    },
    {
        question: "Está permitido en la vía:",
        options: [
            "Recoger o dejar pasajeros o carga en cualquier lugar",
            "Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito",
            "Recoger o dejar pasajeros en lugares autorizados.",
            "Ejercer el comercio ambulatorio o estacionario"
        ],
        correctAnswer: "Recoger o dejar pasajeros en lugares autorizados."
    },
    {
        question: "Respecto de los dispositivos de control o regulación del tránsito:",
        options: [
            "Solo los peatones están obligados a su obediencia",
            "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario",
            "Solo los conductores están obligados a su obediencia.",
            "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario."
        ],
        correctAnswer: "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario"
    },
    {
        question: "La siguiente señal vertical reglamentaria R-53:",
        options: [
            "Prohíbe estacionar.",
            "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
            "Prohíbe la carga y descarga.",
            "Prohíbe la circulación de vehículos motorizados"
        ],
        correctAnswer: "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
        image: "https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Señal+R-53+No+Bloquear+Intersección",
        imageAlt: "Señal de tránsito R-53 que prohíbe bloquear la intersección"
    },
    {
        question: "El color ámbar o amarillo del semáforo significa que:",
        options: [
            "Los vehículos deben avanzar.",
            "Los vehículos deben detenerse.",
            "Los vehículos deben acelerar la marcha.",
            "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección."
        ],
        correctAnswer: "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.",
        image: "https://via.placeholder.com/300x200/FFD93D/000000?text=Semáforo+Amarillo",
        imageAlt: "Semáforo en color amarillo o ámbar"
    },
    {
        question: "Al cambiar de dirección, un conductor debe:",
        options: [
            "Señalizar toda la maniobra hasta su culminación.",
            "Cambiar de dirección y luego señalizar.",
            "No existe ninguna obligación.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Señalizar toda la maniobra hasta su culminación."
    },
    {
        question: "En caso de accidentes, el SOAT cubre los daños que sufren:",
        options: [
            "Solo los ocupantes del vehículo.",
            "Los ocupantes y terceros no ocupantes del vehículo.",
            "Solo terceros afectados.",
            "Solo el conductor del vehículo."
        ],
        correctAnswer: "Los ocupantes y terceros no ocupantes del vehículo."
    },
    {
        question: "¿Cuál es el plazo de vigencia del SOAT?",
        options: ["1 año.", "6 meses.", "4 años.", "2 años."],
        correctAnswer: "1 año."
    },
    {
        question: "¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?",
        options: ["Bajas.", "Altas.", "Luces altas en las intersecciones y bajas en las avenidas.", "Ninguna de las alternativas es correcta."],
        correctAnswer: "Bajas."
    },
    {
        question: "¿Cuál es la función principal de los semáforos?",
        options: [
            "Regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas.",
            "Regular el paso de peatones únicamente.",
            "Emitir advertencias acústicas.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas."
    },
    {
        question: "Sobre el uso del cinturón de seguridad, es correcto afirmar que:",
        options: [
            "Es obligatorio solo para el conductor.",
            "Es obligatorio para todos los ocupantes si los cinturones están incorporados de fábrica.",
            "No es obligatorio en zonas urbanas.",
            "Solo es obligatorio para los pasajeros en asientos delanteros."
        ],
        correctAnswer: "Es obligatorio para todos los ocupantes si los cinturones están incorporados de fábrica."
    },
    {
        question: "La frecuencia de la inspección técnica de un vehículo particular es:",
        options: ["Cada medio año.", "Cada año.", "Cada dos años.", "Cada tres años."],
        correctAnswer: "Cada año."
    },
    {
        question: "¿Qué te indica la siguiente señal reglamentaria (R-28)?",
        options: [
            "Que está prohibido adelantar a otros vehículos en ese tramo.",
            "Que solo los camiones tienen prohibido adelantar.",
            "Que es una zona segura y recomendada para adelantar.",
            "Que debes mantener una distancia de 50 metros con el otro vehículo."
        ],
        correctAnswer: "Que está prohibido adelantar a otros vehículos en ese tramo.",
        image: '/senal-prohibido-adelantar.png',
        imageAlt: "Señal de tránsito circular con borde rojo que muestra un auto rojo adelantando a un auto negro, indicando prohibición."
    },
    {
        question: "Esta señal de tránsito triangular significa que debes...",
        options: [
            "Reducir la velocidad y ceder el paso a los vehículos que circulan por la vía preferencial.",
            "Detenerte completamente, sin importar si vienen otros vehículos.",
            "Aumentar la velocidad para incorporarte rápidamente al tráfico.",
            "Tocar el claxon dos veces antes de pasar."
        ],
        correctAnswer: "Reducir la velocidad y ceder el paso a los vehículos que circulan por la vía preferencial.",
        // URL de la imagen para la señal de "Ceda el Paso".
        image: '/senal-ceda-paso.png',
        // Texto descriptivo para accesibilidad.
        imageAlt: "Señal de tránsito triangular invertida con borde rojo y fondo blanco que indica ceder el paso."
    },
    {
        question: "La frecuencia de la inspección técnica de un vehículo particular es:",
        options: ["Cada medio año.", "Cada año.", "Cada dos años.", "Cada tres años."],
        correctAnswer: "Cada año."
    },
    {
        question: "Al encontrar esta señal en su camino, ¿qué acción debe realizar?",
        options: [
            "Detenerse por completo antes de continuar.",
            "Reducir la velocidad y ceder el paso.",
            "Continuar con la misma velocidad si no vienen vehículos.",
            "Estacionar solo si es una emergencia."
        ],
        correctAnswer: "Detenerse por completo antes de continuar.",
        image: '/senal-pare.jpg',
        imageAlt: "Señal de tránsito octogonal de color rojo con la palabra PARE en letras blancas."
    },

    //BALOTARIO
    {
        question: "Está permitido en la vía:",
        options: [
            "Recoger o dejar pasajeros o carga en cualquier lugar",
            "Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito",
            "Recoger o dejar pasajeros en lugares autorizados.",
            "Ejercer el comercio ambulatorio o estacionario"
        ],
        correctAnswer: "Recoger o dejar pasajeros en lugares autorizados."
    },
    {
        question: "Respecto de los dispositivos de control o regulación del tránsito:",
        options: [
            "Solo los peatones están obligados a su obediencia",
            "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario",
            "Solo los conductores están obligados a su obediencia.",
            "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario."
        ],
        correctAnswer: "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario"
    },
    {
        question: "La señal vertical reglamentaria R-6 \"prohibido voltear a la izquierda\", significa que",
        options: [
            "Está prohibido voltear a la izquierda y, por lo tanto, también está prohibido el giro en U.",
            "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
            "El único sentido de desplazamiento es continuar de frente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Está prohibido voltear a la izquierda y, por lo tanto, también está prohibido el giro en U."
    },
    {
        question: "La señal vertical reglamentaria R-3 significa que:",
        options: [
            "Nos acercamos a una zona restringida al tránsito.",
            "Está permitido adelantar vehículos.",
            "El único sentido de desplazamiento es continuar de frente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "El único sentido de desplazamiento es continuar de frente.",
        image: "1",
        imageAlt: "Señal de sentido obligatorio"
    },
    {
        question: "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:",
        options: [
            "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.",
            "No está permitido cruzar al otro carril para el adelantamiento vehicular.",
            "Se está reduciendo el ancho de la calzada de la vía por donde se circula.",
            "Se está frente a un lugar de cruce peatonal."
        ],
        correctAnswer: "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo."
    },
    {
        question: "El color ámbar o amarillo del semáforo significa que:",
        options: [
            "Los vehículos deben avanzar.",
            "Los vehículos deben detenerse.",
            "Los vehículos deben acelerar la marcha.",
            "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección."
        ],
        correctAnswer: "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección."
    },
    {
        question: "Los colores del semáforo tienen el siguiente significado: rojo: _____ ; ámbar o amarillo: _____; verde: ____",
        options: [
            "Detención - prevención - paso.",
            "Detención - paso con prevención - circulación rápida.",
            "Disminución de la velocidad - prevención - paso rápido.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Detención - prevención - paso."
    },
    {
        question: "¿Qué indica una flecha verde en un semáforo vehicular",
        options: [
            "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.",
            "No está permitida la circulación en el sentido que indica la flecha.",
            "Se debe respetar únicamente la luz circular.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla."
    },
    {
        question: "La siguiente señal vertical reglamentaria R-53:",
        options: [
            "Prohíbe estacionar.",
            "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
            "Prohíbe la carga y descarga.",
            "Prohíbe la circulación de vehículos motorizados."
        ],
        correctAnswer: "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
        image: quizImages[2],
        imageAlt: "Señal de prohibición de bloqueo de intersección"
    },
    {
        question: "Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
        options: [
            "Avanzar en cualquier sentido, ya que la luz circular está en verde.",
            "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.",
            "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja."
    },
    {
        question: "Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:",
        options: [
            "Si la luz intermitente es roja, ésta es equivalente a un \"CEDA EL PASO\".",
            "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.",
            "Si la luz intermitente es verde, ésta es equivalente a un \"PARE\".",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución."
    },
    {
        question: "¿La luz intermitente roja es igual que una señal de PARE?",
        options: [
            "Verdad.",
            "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.",
            "Falso.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Verdad."
    },
    {
        question: "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
        options: [
            "Girar desde cualquier carril.",
            "Colocarse en el carril derecho, luego girar con precaución.",
            "Colocarse en el carril más despejado de tráfico, luego girar con precaución.",
            "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución."
        ],
        correctAnswer: "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución."
    },
    {
        question: "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
        options: [
            "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.",
            "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.",
            "Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.",
            "Está prohibido el cambio de carril en vías de un solo sentido."
        ],
        correctAnswer: "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución."
    },
    {
        question: "Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:",
        options: [
            "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.",
            "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.",
            "El vehículo que llegue primero tiene preferencia.",
            "Tiene preferencia el conductor que viene por la derecha del otro."
        ],
        correctAnswer: "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza."
    },
    {
        question: "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:",
        options: [
            "Detenerse hasta que cambie a luz verde.",
            "Continuar la marcha.",
            "Estar prevenido.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Continuar la marcha."
    },
    {
        question: "Está prohibido estacionar un vehículo:",
        options: [
            "En las curvas.",
            "Dentro de una intersección.",
            "Frente a la entrada de garajes y de recintos militares o policiales.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Todas las alternativas son correctas."
    },
    {
        question: "La siguiente señal vertical reglamentaria (R-29)",
        options: [
            "Prohíbe el uso de la bocina en vías urbanas.",
            "Prohíbe el uso de la bocina en carreteras.",
            "Prohíbe el uso de la bocina.",
            "Prohíbe hacer ruido."
        ],
        correctAnswer: "Prohíbe el uso de la bocina.",
        image: quizImages[3],
        imageAlt: "Señal de prohibición de bocina"
    },
    {
        question: "Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:",
        options: [
            "Conduzca un vehículo automotor sin tener licencia de conducir.",
            "Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.",
            "Conduzca un vehículo sin contar con el SOAT.",
            "a y c son correctas."
        ],
        correctAnswer: "Conduzca un vehículo automotor sin tener licencia de conducir."
    },
    {
        question: "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
        options: [
            "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.",
            "No debe aumentar la velocidad hasta que el vehículo lo sobrepase.",
            "Debe disminuir drásticamente la velocidad de su vehículo.",
            "Debe detener su vehículo."
        ],
        correctAnswer: "No debe aumentar la velocidad hasta que el vehículo lo sobrepase."
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es correcta?",
        options: [
            "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.",
            "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.",
            "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos."
    },
    {
        question: "¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?",
        options: [
            "Bajas.",
            "Altas.",
            "Luces altas en las intersecciones y bajas en las avenidas.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Bajas."
    },
    {
        question: "En caso de accidentes, el SOAT cubre los daños que sufren:",
        options: [
            "Solo los ocupantes del vehículo.",
            "Los ocupantes y terceros no ocupantes del vehículo.",
            "Solo terceros afectados.",
            "Solo el conductor del vehículo."
        ],
        correctAnswer: "Los ocupantes y terceros no ocupantes del vehículo."
    },
    {
        question: "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
        options: [
            "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.",
            "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.",
            "El Seguro Obligatorio de Accidentes de Tránsito - SOAT.",
            "No es obligatorio contar con un seguro."
        ],
        correctAnswer: "El Seguro Obligatorio de Accidentes de Tránsito - SOAT."
    },
    {
        question: "Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:",
        options: [
            "Cuando emita señales visibles.",
            "Cuando emita señales audibles.",
            "Cuando emita señales audibles y visibles.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Cuando emita señales audibles y visibles."
    },
    {
        question: "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?",
        options: [
            "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.",
            "Adelantar por el lado izquierdo, pero con precaución.",
            "Tocar el claxon para alertar que está pasando.",
            "Adelantar muy despacio."
        ],
        correctAnswer: "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares."
    },
    {
        question: "¿Qué significa un triángulo rojo de seguridad colocado en la calzada?",
        options: [
            "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.",
            "Zona de obras por reparación en la calzada.",
            "Que el vehículo que lo enfrenta debe detenerse.",
            "a y c son correctas."
        ],
        correctAnswer: "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia."
    },
    {
        question: "La siguiente señal vertical reglamentaria P-22C indica que:",
        options: [
            "Está permitido adelantar.",
            "Se aproxima un carril adicional.",
            "Está permitido cambiar de carril.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Se aproxima un carril adicional.",
        image: quizImages[4],
        imageAlt: "Señal de carril adicional"
    },
    {
        question: "Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:",
        options: [
            "Para girar en las intersecciones y para advertir los cambios de carril.",
            "Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.",
            "Durante toda la circulación del vehículo.",
            "En cada intersección."
        ],
        correctAnswer: "Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas."
    },
    {
        question: "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?",
        options: [
            "No.",
            "Si.",
            "Depende de la intersección.",
            "No se encuentra regulado en el reglamento."
        ],
        correctAnswer: "Si."
    },
    {
        question: "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
        options: [
            "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.",
            "Disminuir su velocidad y pasar con cuidado.",
            "Sobre parar y pasar rápidamente.",
            "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución."
        ],
        correctAnswer: "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución."
    },
    {
        question: "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
        options: [
            "No hay diferencia, se usan indistintamente.",
            "La señal P-2A se utiliza en situaciones de mayor riesgo.",
            "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.",
            "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha."
        ],
        correctAnswer: "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.",
        image: quizImages[5],
        imageAlt: "Comparación de señales de curva"
    },
    {
        question: "¿Qué indica la señal R-30F?",
        options: [
            "Tener precaución con vehículos lentos.",
            "Regula la velocidad máxima permitida en curvas.",
            "Regula la velocidad máxima en zonas rurales.",
            "No se encuentra regulada en el reglamento."
        ],
        correctAnswer: "Regula la velocidad máxima permitida en curvas.",
        image: quizImages[6],
        imageAlt: "Señal de velocidad máxima en curvas"
    },
    {
        question: "¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?",
        options: [
            "Luces direccionales.",
            "Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.",
            "Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.",
            "Luces bajas."
        ],
        correctAnswer: "Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo."
    },
    {
        question: "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
        options: [
            "Cualquiera de los dos.",
            "El que se aproxime por la derecha del otro.",
            "El que se aproxime por la izquierda del otro.",
            "El que haga sonar la bocina primero."
        ],
        correctAnswer: "El que se aproxime por la derecha del otro.",
        image: quizImages[7],
        imageAlt: "Intersección no regulada con preferencia de paso"
    },
    {
        question: "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
        options: [
            "El vehículo que ingresó primero a la intersección.",
            "El vehículo que haga sonar la bocina primero.",
            "El vehículo que haga cambio de luces primero.",
            "Cualquier vehículo."
        ],
        correctAnswer: "El vehículo que ingresó primero a la intersección."
    },
    {
        question: "En una rotonda, tiene prioridad de paso el vehículo que:",
        options: [
            "Quiere ingresar a la rotonda.",
            "Circula por ella.",
            "Acelera primero.",
            "Hace sonar la bocina."
        ],
        correctAnswer: "Circula por ella."
    },
    {
        question: "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.",
        options: [
            "Derecha.",
            "Izquierda.",
            "Berma.",
            "Por la derecha o izquierda."
        ],
        correctAnswer: "Izquierda."
    },
    {
        question: "Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?",
        options: [
            "Manejar normalmente.",
            "Manejar despacio.",
            "Abstenerse de manejar.",
            "Manejar con un copiloto."
        ],
        correctAnswer: "Abstenerse de manejar."
    },
    {
        question: "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
        options: [
            "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.",
            "Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.",
            "Contrato de compraventa del vehículo.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular."
    },
    {
        question: "En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:",
        options: [
            "No tiene preferencia de paso.",
            "Tiene preferencia de paso.",
            "Debe detenerse.",
            "Debe retroceder."
        ],
        correctAnswer: "Tiene preferencia de paso."
    },
    {
        question: "Al cambiar de dirección, un conductor debe:",
        options: [
            "Señalizar toda la maniobra hasta su culminación.",
            "Cambiar de dirección y luego señalizar.",
            "No existe ninguna obligación.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Señalizar toda la maniobra hasta su culminación."
    },
    {
        question: "¿Se puede conducir un vehículo con el motor en punto neutro?",
        options: [
            "Sí, pero solo si está bajando una pendiente.",
            "No, está prohibido.",
            "Sí, en caso de que el conductor no sea novato.",
            "No se encuentra regulado en la norma."
        ],
        correctAnswer: "No, está prohibido."
    },
    {
        question: "Para girar o cambiar de carril hacia la derecha, el conductor debe utilizar las luces direccionales y, en casos de fuerza mayor, la siguiente señal manual:",
        options: [
            "Brazo, antebrazo izquierdo y mano extendidos hacia afuera del vehículo.",
            "Antebrazo izquierdo y mano extendidos hacia arriba fuera del vehículo, formando un ángulo recto con el brazo.",
            "Brazo, antebrazo derecho y mano extendidos hacia afuera del vehículo.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Antebrazo izquierdo y mano extendidos hacia arriba fuera del vehículo, formando un ángulo recto con el brazo."
    },
    {
        question: "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
        options: [
            "No podrán ser conducidos.",
            "Podrán ser conducidos únicamente en zonas urbanas.",
            "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia.",
            "Podrán ser conducidos con normalidad hasta que renueve su licencia."
        ],
        correctAnswer: "No podrán ser conducidos."
    },
    {
        question: "De acuerdo con el sistema de control de licencias de conducir por puntos",
        options: [
            "Determinadas infracciones suman puntos.",
            "Una infracción puede sumar o disminuir puntos, a elección del infractor.",
            "Determinadas infracciones restan puntos.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Determinadas infracciones suman puntos."
    },
    {
        question: "¿Cuál es la consecuencia de acumular 100 puntos en la licencia de conducir en un período de 24 meses?",
        options: [
            "Suspensión de licencia de conducir.",
            "Anulación de la Placa Única Nacional de Rodaje.",
            "Inhabilitación definitiva para obtener una licencia de conducir.",
            "Internamiento vehicular."
        ],
        correctAnswer: "Suspensión de licencia de conducir."
    },
    {
        question: "Se entiende por carril a la:",
        options: [
            "Parte de la vía destinada a la circulación de peatones.",
            "Parte de la calzada destinada al tránsito de una fila de vehículos.",
            "Vía rural destinada a la circulación de peatones y animales.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Parte de la calzada destinada al tránsito de una fila de vehículos."
    },
    {
        question: "Se entiende por línea de parada a:",
        options: [
            "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo.",
            "Las líneas que se encuentran en los lugares del estacionamiento.",
            "El lugar utilizado para embarcar y desembarcar pasajeros.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo."
    },
    {
        question: "La siguiente señal vertical reglamentaria P-17A, indica:",
        options: [
            "Reducción de la calzada al lado derecho.",
            "Reducción de la calzada al lado izquierdo.",
            "Reducción de la calzada en ambos lados.",
            "Ensanchamiento de la calzada en ambos lados."
        ],
        correctAnswer: "Reducción de la calzada en ambos lados.",
        image: quizImages[8],
        imageAlt: "Señal de reducción de calzada"
    },
    {
        question: "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
        options: [
            "Se puede adelantar en ambos sentidos.",
            "No está permitido adelantar en ningún sentido.",
            "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).",
            "Respetar la línea que está de su lado (si es discontinua, no adelantar; si es continua, está permitido adelantar)."
        ],
        correctAnswer: "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar)."
    },

    {
        question: "Se define como zona rígida al:",
        options: [
            "Área donde se prohíbe la circulación de vehículos.",
            "Área donde se prohíbe la circulación de peatones.",
            "Área de la vía en la que se prohíbe el estacionamiento de vehículos.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Área de la vía en la que se prohíbe el estacionamiento de vehículos."
    },
    {
        question: "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa",
        options: [
            "Obligación de detenerse de quien así lo enfrente.",
            "Continuar la marcha por el carril izquierdo de la calzada.",
            "Continuar la marcha.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Obligación de detenerse de quien así lo enfrente."
    },
    {
        question: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
        options: [
            "30km/h.",
            "40km/h.",
            "60km/h.",
            "80km/h."
        ],
        correctAnswer: "40km/h."
    },
    {
        question: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
        options: [
            "30km/h.",
            "40km/h.",
            "60km/h.",
            "80km/h."
        ],
        correctAnswer: "60km/h."
    },
    {
        question: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en vías expresas es de:",
        options: [
            "60km/h.",
            "70km/h.",
            "80km/h.",
            "100km/h."
        ],
        correctAnswer: "80km/h."
    },
    {
        question: "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
        options: [
            "20km/h.",
            "30km/h.",
            "35km/h.",
            "50km/h."
        ],
        correctAnswer: "30km/h."
    },
    {
        question: "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
        options: [
            "80km/h.",
            "90km/h.",
            "100km/h.",
            "110km/h."
        ],
        correctAnswer: "100km/h."
    },
    {
        question: "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
        options: [
            "30km/h.",
            "La mitad de la velocidad máxima establecida para cada tipo de vía.",
            "20 km/h.",
            "15 km/h."
        ],
        correctAnswer: "La mitad de la velocidad máxima establecida para cada tipo de vía."
    },
    {
        question: "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal, o bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobados con el examen respectivo, o por negarse al mismo y que haya participado en un accidente de tránsito?",
        options: [
            "Multa.",
            "Cancelación de licencia de conducir.",
            "Suspensión de la licencia de conducir.",
            "Multa, cancelación de la licencia de conducir e inhabilitación definitiva para obtener una licencia de conducir."
        ],
        correctAnswer: "Multa, cancelación de la licencia de conducir e inhabilitación definitiva para obtener una licencia de conducir."
    },
    {
        question: "¿Cuál es la sanción si en un operativo de alcoholemia usted es intervenido y se comprueba que ha consumido alcohol por encima del límite legal, o está conduciendo bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobada con el examen respectivo?",
        options: [
            "Una multa.",
            "La suspensión de la licencia de conducir.",
            "Multa y suspensión de la licencia de conducir por 3 años.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Multa y suspensión de la licencia de conducir por 3 años."
    },
    {
        question: "La frecuencia de la inspección técnica de un vehículo particular es:",
        options: [
            "Cada medio año.",
            "Cada año.",
            "Cada dos años.",
            "Cada tres años."
        ],
        correctAnswer: "Cada año."
    },
    {
        question: "¿A partir de qué año de antigüedad debe realizarse la inspección técnica de un vehículo particular para transporte de personas de hasta 9 asientos incluido el conductor de la categoría M1?",
        options: [
            "A partir del segundo año contado desde el año siguiente de su fabricación.",
            "A partir del cuarto año contado desde el año siguiente de su fabricación.",
            "A partir del quinto año contado desde el año siguiente de su fabricación.",
            "No está sujeto a inspección técnica."
        ],
        correctAnswer: "A partir del cuarto año contado desde el año siguiente de su fabricación."
    },
    {
        question: "¿Cuál es el plazo de vigencia del SOAT?",
        options: [
            "1 año.",
            "6 meses.",
            "4 años.",
            "2 años."
        ],
        correctAnswer: "1 año."
    },
    {
        question: "Si ocurre un accidente de tránsito, ¿qué obligación tiene el conductor, el propietario del vehículo o el prestador del servicio de transporte?",
        options: [
            "Dar aviso a los bomberos.",
            "Dar aviso solo a la compañía de seguros.",
            "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más cercana.",
            "Dar aviso únicamente a la Policía Nacional del Perú."
        ],
        correctAnswer: "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más cercana."
    },
    {
        question: "Si una licencia de conducir consiga alguna restricción, es correcto afirmar que:",
        options: [
            "Dicha restricción es meramente informativa.",
            "Es una obligación cumplir con la restricción.",
            "Incumplir la restricción no genera un riesgo para la seguridad vial.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Es una obligación cumplir con la restricción."
    },
    {
        question: "La señal preventiva P-33A, significa:",
        options: [
            "Señal de curva sinuosa.",
            "Señal de proximidad a un badén.",
            "Señal de proximidad de un reductor de velocidad tipo resalto.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Señal de proximidad de un reductor de velocidad tipo resalto.",
        image: quizImages[9],
        imageAlt: "Señal de proximidad a reductor de velocidad"
    },
    {
        question: "Si su vehículo deja de funcionar o comienza a tener problemas y usted trata de moverlo al costado de la autopista, debe:",
        options: [
            "Activar las luces intermitentes de emergencia.",
            "Parar en su posición actual.",
            "Salir del vehículo rápidamente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Activar las luces intermitentes de emergencia."
    },
    {
        question: "¿Está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante, que será adelantado?",
        options: [
            "Sí, siempre y cuando el sonido no sea estridente.",
            "Si, salvo prohibición expresa mediante la correspondiente señal.",
            "No, está prohibido.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "No, está prohibido."
    },
    {
        question: "Si observa que se aproxima una ambulancia sin las luces especiales encendidas y sin sirena, es correcto afirmar que:",
        options: [
            "No estamos obligados a darle preferencia de paso.",
            "Estamos obligados a darle prioridad de paso por ser una ambulancia.",
            "Está informando que está en servicio de urgencia.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "No estamos obligados a darle preferencia de paso."
    },
    {
        question: "Si se encuentra en una intersección y se enciende la luz verde del semáforo y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer?",
        options: [
            "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar.",
            "Tocar el claxon para que se apuren en pasar.",
            "Bajar del vehículo y reclamar la falta al infractor.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar."
    },
    {
        question: "En señalética vial, el color __________ en el pavimento es utilizado para carriles de tráfico en sentido opuesto y el color __________ en el pavimento es utilizado como separador de carriles de tráfico en el mismo sentido.",
        options: [
            "Amarillo - blanco.",
            "Blanco - Amarillo.",
            "Azul - rojo.",
            "Rojo - Amarillo."
        ],
        correctAnswer: "Amarillo - blanco."
    },
    {
        question: "Si una fila de escolares cruza la calzada fuera del crucero peatonal, ¿qué acción se debe tomar?",
        options: [
            "Advertir con el claxon.",
            "Advertir a viva voz.",
            "Parar y ceder el paso.",
            "Continuar la marcha lentamente."
        ],
        correctAnswer: "Parar y ceder el paso."
    },
    {
        question: "Si se aproxima a una zona escolar, ¿qué acción debe realizar?",
        options: [
            "No tiene ninguna obligación si no hay señalización.",
            "Disminuir la velocidad a 40 Km/h.",
            "Disminuir la velocidad a 30 Km/h.",
            "Disminuir la velocidad a 35 km/h."
        ],
        correctAnswer: "Disminuir la velocidad a 30 Km/h."
    },
    {
        question: "Tienen el objetivo de notificar a los usuarios las limitaciones, prohibiciones o restricciones en el uso de la vía.",
        options: [
            "Señales reguladoras o de reglamentación.",
            "Señales preventivas.",
            "Señales informativas.",
            "Señales horizontales."
        ],
        correctAnswer: "Señales reguladoras o de reglamentación."
    },
    {
        question: "Tienen el propósito de advertir a los usuarios sobre la existencia y naturaleza de un peligro en la vía.",
        options: [
            "Señales reguladoras o de reglamentación.",
            "Señales preventivas.",
            "Señales informativas.",
            "Señales horizontales."
        ],
        correctAnswer: "Señales preventivas."
    },
    {
        question: "Es una infracción de tránsito:",
        options: [
            "No detenerse totalmente en una señal de PARE.",
            "Arrojar, depositar o abandonar objetos o sustancias en la vía pública que dificulten la circulación.",
            "Utilizar la bocina para llamar la atención en forma innecesaria.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Todas las alternativas son correctas."
    },
    {
        question: "¿Qué debería hacer el conductor al acercarse a una señal de \"CEDA EL PASO\" en una intersección?",
        options: [
            "Ceder el paso a los vehículos de emergencia.",
            "Mantener la velocidad y avanzar con cuidado.",
            "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía transversal.",
            "Parar totalmente y luego avanzar con cuidado."
        ],
        correctAnswer: "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía transversal."
    },
    {
        question: "No se debe conducir un vehículo:",
        options: [
            "Si no se cuenta con el SOAT.",
            "En retroceso, salvo las excepciones que establece la norma.",
            "Si no se tiene la licencia para el tipo de vehículo que se quiere conducir.",
            "Todas son correctas."
        ],
        correctAnswer: "Todas son correctas."
    },
    {
        question: "¿Qué debe hacer si se aproxima a una intersección sin semáforo y sin presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
        options: [
            "Disminuir la velocidad y pasar con cuidado.",
            "Detener el vehículo y ceder el paso al peatón.",
            "Continuar porque usted tiene la prioridad.",
            "Incrementar la velocidad para adelantar el cruce el peatón."
        ],
        correctAnswer: "Detener el vehículo y ceder el paso al peatón."
    },
    {
        question: "Sobre el uso del cinturón de seguridad en los vehículos que se encuentran en circulación, es correcto afirmar que:",
        options: [
            "El uso del cinturón de seguridad es obligatorio para las personas que ocupen los asientos delanteros.",
            "En los asientos posteriores el uso del cinturón de seguridad es obligatorio en todos los vehículos cuando los tengan incorporados de fábrica y en los casos en que, de acuerdo a las normas se encuentren obligados a tenerlos.",
            "El uso del cinturón de seguridad no solo es obligatorio para el conductor.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Todas las alternativas son correctas."
    },
    {
        question: "Si en una vía de dos carriles con tránsito en un mismo sentido usted se desplaza lentamente en su vehículo, debe circular por el carril de la _________ y los vehículos que circulen a mayor velocidad deben hacerlo por el carril de la ___________",
        options: [
            "Izquierda / Derecha.",
            "Derecha / Derecha.",
            "Derecha / Izquierda.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Derecha / Izquierda."
    },
    {
        question: "Sobre el uso de la bocina del vehículo, es correcto afirmar que:",
        options: [
            "El conductor debe tratar de no utilizar la bocina para llamar la atención en forma innecesaria.",
            "El uso de la bocina para llamar la atención en forma innecesaria no es una infracción al tránsito.",
            "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas.",
            "a y b son correctas."
        ],
        correctAnswer: "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas."
    },
    {
        question: "Una línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
        options: [
            "Que se puede adelantar, debido a que la línea no es amarilla continua.",
            "Que está prohibido cruzar la línea y no hay excepciones.",
            "Que está prohibido pasar al otro lado de la línea con algunas excepciones.",
            "Que es zona de peatones."
        ],
        correctAnswer: "Que está prohibido pasar al otro lado de la línea con algunas excepciones."
    },
    {
        question: "¿Cuál es el número máximo de personas que puede transportar un vehículo particular?",
        options: [
            "Es igual al número de asientos señalados en la tarjeta de identificación vehicular, con la excepción de niños en brazos en los asientos posteriores.",
            "No existe prohibición sobre un número máximo de personas que se puede transportar.",
            "La restricción sobre un número máximo de personas que se puede transportar se aplica para los asientos delanteros, para los asientos posteriores no hay restricción.",
            "Se puede transportar a todas las personas que entren en el vehículo, sin restricción, siempre y cuando no obstaculicen la visibilidad del conductor y todos sean de la misma familia."
        ],
        correctAnswer: "Es igual al número de asientos señalados en la tarjeta de identificación vehicular, con la excepción de niños en brazos en los asientos posteriores."
    },
    {
        question: "La acción correcta al abastecer de combustible su vehículo, es:",
        options: [
            "Asegurarse de que todos los pasajeros permanezcan a bordo del vehículo.",
            "Abstenerse de fumar tanto el conductor como sus acompañantes.",
            "Mantener encendido el motor del vehículo.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Abstenerse de fumar tanto el conductor como sus acompañantes."
    },
    {
        question: "Mientras usted está conduciendo su vehículo automotor, ¿puede llevar sujeto a su auto al conductor de una bicicleta mientras éste la conduce?",
        options: [
            "Sí, siempre y cuando el conductor de la bicicleta se sujete a la parte posterior del auto, pero nunca a la parte lateral de éste.",
            "Sí, siempre y cuando se prevean todas las medidas de seguridad respectivas.",
            "Sí, siempre y cuando esta acción sea realizada a una velocidad no mayor a",
            "No, es una acción prohibida y quien la cometa puede ser sancionado con una multa."
        ],
        correctAnswer: "No, es una acción prohibida y quien la cometa puede ser sancionado con una multa."
    },
    {
        question: "Si usted desea realizar una competencia de carreras entre su vehículo y otro vehículo motorizado; para ello puede utilizar:",
        options: [
            "Las vías aledañas del parque del distrito en el cual reside, en el horario de 11:00 pm. a 5:00 am.",
            "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente.",
            "Las vías aledañas del parque del distrito en el cual reside, siempre y cuando tenga el permiso municipal correspondiente.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente."
    },
    {
        question: "Señale cuáles de las siguientes conductas constituye una infracción al tránsito:",
        options: [
            "Tener la puerta, capot o maletera del vehículo abierta, cuando el vehículo está en marcha.",
            "Conducir un vehículo lentamente por el carril de la izquierda causando congestión.",
            "Conducir un vehículo con el motor en punto neutro o apagado.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Todas las alternativas son correctas."
    },
    {
        question: "La marcas en el pavimento constituyen un elemento indispensable para la operación vehicular, pues su función es:",
        options: [
            "Reemplazar a la señalización vertical cuando ésta no se encuentra en la vía, por tal motivo son colocadas donde no existe señales verticales.",
            "Guiar a los usuarios únicamente en las vías que presentan peligros.",
            "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía."
    },
    {
        question: "Las marcas en el pavimento de color __________ complementan las señales informativas, como por ejemplo las zonas de estacionamiento para personas con movilidad reducida.",
        options: [
            "Blanco.",
            "Azul.",
            "Rojo.",
            "Gris."
        ],
        correctAnswer: "Azul."
    },
    {
        question: "La línea central de color amarillo en el pavimento es continua cuando:",
        options: [
            "No está permitido cruzar al otro carril.",
            "Está permitido cruzar al otro carril para el adelantamiento.",
            "Se trata de una vía de doble sentido de circulación, que permite cruzar al otro carril.",
            "Separa corrientes de tráfico en el mismo sentido."
        ],
        correctAnswer: "No está permitido cruzar al otro carril."
    },
    {
        question: "Si un conductor que circula por el carril derecho de una vía se encuentra con las flechas inclinadas que se muestran en la figura, su conducta correcta es:",
        options: [
            "Continuar la circulación por el carril en que se encuentra.",
            "Adelantar al vehículo que se encuentra delante de él y que circula por el carril izquierdo.",
            "No adelantar al vehículo que tiene adelante y que circula por el carril izquierdo y continuar por su carril.",
            "Cambiarse al carril izquierdo con precaución."
        ],
        correctAnswer: "Cambiarse al carril izquierdo con precaución.",
        image: quizImages[10],
        imageAlt: "Flechas de cambio de carril"
    },
    {
        question: "Si durante la conducción vehicular, un efectivo de la Policía de Tránsito le solicita al conductor someterse a una prueba de alcoholemia; la acción correcta del conductor es:",
        options: [
            "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de Tránsito.",
            "Someterse o negarse a la prueba de alcoholemia, ya que no constituye una obligación del conductor realizarse dicha prueba.",
            "Negarse a la prueba de alcoholemia, ya que únicamente es exigible si ha participado en un accidente de tránsito.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de Tránsito."
    },
    {
        question: "¿Cuál de las siguientes conductas no es una infracción de tránsito?",
        options: [
            "Llevar las placas de rodaje en el lugar que no corresponde.",
            "Seguir a los vehículos de emergencia y vehículos oficiales para avanzar más rápidamente.",
            "Arrojar objetos en la vía pública que dificulten la circulación.",
            "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehículos circulando por la vía transversal."
        ],
        correctAnswer: "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehículos circulando por la vía transversal."
    },
    {
        question: "Si un conductor sale de su propiedad y tiene que cruzar la acera e ingresar a una vía, la conducta correcta es:",
        options: [
            "Dar preferencia de paso solo a los vehículos que circulan por la vía, pero no a los peatones.",
            "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan por la acera.",
            "Tocar el claxon para advertir a los peatones que circulen por la acera, que se detengan.",
            "Salir rápidamente, a fin de evitar accidentes."
        ],
        correctAnswer: "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan por la acera."
    },
    {
        question: "¿Qué significa una línea continua blanca pintada entre el carril de la derecha y la berma de una carretera?",
        options: [
            "Un carril para motocicletas.",
            "Una línea que divide el área peatonal y el área de vehículos.",
            "Una línea que puede cruzarse para rebasar en caso de congestión.",
            "Que no se debe conducir atravesándola, al menos que haya una situación de emergencia."
        ],
        correctAnswer: "Que no se debe conducir atravesándola, al menos que haya una situación de emergencia."
    },
    {
        question: "Si maneja de noche, hubiera neblina y tuviera luces rompenieblas, debe utilizar:",
        options: [
            "Las luces bajas junto con las rompenieblas.",
            "Solo las luces altas.",
            "Solo las luces bajas.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Las luces bajas junto con las rompenieblas."
    },
    {
        question: "En el caso representado en el siguiente gráfico ¿el vehículo rojo puede rebasar al azul?",
        options: [
            "Puede hacerlo si no viene un vehículo en el sentido contrario.",
            "Puede hacerlo solo si, el vehículo en sentido contrario está lejos y alcanza hacer la maniobra con seguridad.",
            "No puede hacerlo.",
            "Puede hacerlo por la izquierda."
        ],
        correctAnswer: "No puede hacerlo.",
        image: quizImages[11],
        imageAlt: "Situación de adelantamiento vehicular"
    },
    {
        question: "La siguiente señal (R-17), significa:",
        options: [
            "Prohibido estacionar.",
            "Prohibida la circulación de vehículos automotores.",
            "Prohibida la circulación de autos particulares.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Prohibida la circulación de vehículos automotores.",
        image: quizImages[12],
        imageAlt: "Señal de prohibición de circulación de vehículos automotores"
    },
    {
        question: "Si usted se encuentra conduciendo su vehículo por una vía y antes de cruzar la intersección se encuentra con la señal R-4, esta le indica:",
        options: [
            "Que la calle está clausurada.",
            "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
            "Que debe parar totalmente antes de poder ingresar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
        image: quizImages[13],
        imageAlt: "Señal R-4: sentido contrario prohibido"
    },
    {
        question: "La siguiente señal (P-36), significa:",
        options: [
            "Proximidad de un túnel.",
            "Superficie deslizante.",
            "Prender las luces bajas.",
            "Mantener la distancia entre vehículos por seguridad."
        ],
        correctAnswer: "Superficie deslizante.",
        image: quizImages[14],
        imageAlt: "Señal P-36: superficie deslizante"
    },
    {
        question: "La siguiente señal (R-14), significa:",
        options: [
            "Circular por el carril de la derecha.",
            "Circular por el carril central.",
            "Circular solo en el sentido indicado por la flecha.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Circular solo en el sentido indicado por la flecha.",
        image: quizImages[15],
        imageAlt: "Señal R-14: sentido obligatorio"
    },
    {
        question: "Si usted circula por una vía y se encuentra con la señal (R-11a), ésta le indica:",
        options: [
            "Que es una vía de tres carriles de un solo sentido.",
            "Que es una vía de tres carriles y usted puede utilizar solo uno de ellos.",
            "Que es una vía de tres carriles y usted puede utilizar los dos de la derecha.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que es una vía de tres carriles y usted puede utilizar los dos de la derecha.",
        image: quizImages[16],
        imageAlt: "Señal R-11a: carriles permitidos"
    },
    {
        question: "La siguiente señal (R-30c), significa:",
        options: [
            "Que la velocidad máxima de la vía es de 50 km/h.",
            "Que la velocidad mínima de la vía es de 50 km/h.",
            "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
            "Que al salir de la vía por donde está circulando, la velocidad mínima es 50 km/h."
        ],
        correctAnswer: "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
        image: quizImages[17],
        imageAlt: "Señal R-30c: límite de velocidad al salir"
    },
    {
        question: "La siguiente señal (R-5-4), significa:",
        options: [
            "Que la vía no continúa y los conductores deben girar a la izquierda.",
            "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos.",
            "Que la intersección está en mantenimiento y que por el momento solo se puede girar a la izquierda.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos.",
        image: quizImages[18],
        imageAlt: "Señal R-5-4: giros tangentes a la izquierda"
    },
    {
        question: "La siguiente señal (R-9), significa:",
        options: [
            "Que no está permitido girar en U.",
            "Que está permitido el giro en U.",
            "Que si desea puede girar a la izquierda.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que está permitido el giro en U.",
        image: quizImages[19],
        imageAlt: "Señal R-9: giro en U permitido"
    },
    {
        question: "La siguiente señal (R-5-2), significa:",
        options: [
            "Que la vía solo permite girar a la izquierda.",
            "Prevención por bifurcación de la vía.",
            "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
            "No es una señal válida en el Perú."
        ],
        correctAnswer: "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
        image: quizImages[20],
        imageAlt: "Señal R-5-2: giro a la izquierda o de frente"
    },
    {
        question: "La siguiente señal (R-20), significa:",
        options: [
            "Que el peatón antes de cruzar debe mirar si se acercan autos por la derecha.",
            "Que el conductor que viene por la derecha debe tener cuidado con los peatones.",
            "Que los peatones deben circular por la izquierda.",
            "Que los peatones deben circular por la derecha."
        ],
        correctAnswer: "Que los peatones deben circular por la derecha.",
        image: quizImages[21],
        imageAlt: "Señal R-20: circulación peatonal por la derecha"
    },
    {
        question: "La siguiente señal (R-40), significa:",
        options: [
            "Crucero tipo cebra.",
            "Control policial.",
            "Pavimento deslizante.",
            "Circular con luces bajas."
        ],
        correctAnswer: "Circular con luces bajas.",
        image: quizImages[22],
        imageAlt: "Señal R-40: circular con luces bajas"
    },
    {
        question: "La siguiente señal (R-48), significa:",
        options: [
            "Los peatones deben circular por la derecha y los camiones por la izquierda.",
            "Los peatones deben tener cuidado con los camiones.",
            "Zona de carga y descarga.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Zona de carga y descarga.",
        image: quizImages[23],
        imageAlt: "Señal R-48: zona de carga y descarga"
    },
    {
        question: "La siguiente señal (R-49), significa:",
        options: [
            "Está permitido cambiar de carril por la izquierda y por la derecha.",
            "Se debe mantener la distancia de seguridad entre vehículos.",
            "Está permitido cambiar de carril por la izquierda para adelantar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Se debe mantener la distancia de seguridad entre vehículos.",
        image: quizImages[24],
        imageAlt: "Señal R-49: mantener distancia de seguridad"
    },
    {
        question: "La siguiente señal (R-50), significa:",
        options: [
            "Que si solo hay un carril tiene preferencia de paso el conductor que llegó primero.",
            "Que si solo hay un carril tiene preferencia el conductor que está mirando la señal.",
            "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido contrario.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido contrario.",
        image: quizImages[25],
        imageAlt: "Señal R-50: dar paso al sentido contrario"
    },
    {
        question: "La señal (R-5-1), es:",
        options: [
            "Una señal informativa.",
            "Una señal preventiva.",
            "Una señal de obligación.",
            "No es una señal válida en el Perú."
        ],
        correctAnswer: "Una señal de obligación.",
        image: quizImages[26],
        imageAlt: "Señal R-5-1: señal de obligación"
    },
    {
        question: "La señal (P-3a), le indica al conductor que:",
        options: [
            "Hay una curva y contra-curva a la izquierda.",
            "Hay una curva y contra-curva a la derecha.",
            "Hay una curva y contra-curva pronunciada a la derecha.",
            "Hay una curva y contra-curva pronunciada a la izquierda."
        ],
        correctAnswer: "Hay una curva y contra-curva pronunciada a la derecha.",
        image: quizImages[27],
        imageAlt: "Señal P-3a: curva y contra-curva pronunciada a la derecha"
    },
    {
        question: "La siguiente señal (P-5-1a), le advierte al conductor que:",
        options: [
            "Se aproxima a una curva y contra-curva a la izquierda.",
            "Se aproxima a una curva y contra-curva a la derecha.",
            "Se aproxima a un camino sinuoso a la derecha.",
            "Se aproxima a un camino sinuoso a la izquierda."
        ],
        correctAnswer: "Se aproxima a un camino sinuoso a la izquierda.",
        image: quizImages[28],
        imageAlt: "Señal P-5-1a: camino sinuoso a la izquierda"
    },
    {
        question: "La siguiente señal (P-61), le advierte al conductor que:",
        options: [
            "El sentido del tránsito es el que indica la flecha.",
            "Se aproxima a una reducción de la vía en ambos sentidos.",
            "Está circulando por una curva horizontal.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Está circulando por una curva horizontal.",
        image: quizImages[29],
        imageAlt: "Señal P-61: curva horizontal"
    },
    {
        question: "La siguiente señal (P-34), le advierte al conductor que:",
        options: [
            "La vía está en mal estado y tiene baches.",
            "Se aproxima a un resalto.",
            "Se aproxima a un rompe muelles.",
            "Se aproxima a un badén."
        ],
        correctAnswer: "Se aproxima a un badén.",
        image: quizImages[30],
        imageAlt: "Señal P-34: badén próximo"
    },
    {
        question: "La siguiente señal (P-60), es:",
        options: [
            "Una señal turística.",
            "Una señal informativa.",
            "Una señal preventiva.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Una señal preventiva.",
        image: quizImages[31],
        imageAlt: "Señal P-60: señal preventiva"
    },
    {
        question: "La siguiente señal (P-46), indica:",
        options: [
            "Existencia de una ciclovía.",
            "Autorización para el cruce de ciclistas.",
            "Ciclistas en la vía.",
            "Cercanía de una ciclovía."
        ],
        correctAnswer: "Ciclistas en la vía.",
        image: quizImages[32],
        imageAlt: "Señal P-46: ciclistas en la vía"
    },
    {
        question: "La siguiente señal (P-46-a), indica:",
        options: [
            "Que los ciclistas deben usar la ciclovía.",
            "Que nos aproximamos a un cruce de ciclovía.",
            "Que la ciclovía es solo para los ciclistas.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Que nos aproximamos a un cruce de ciclovía.",
        image: quizImages[33],
        imageAlt: "Señal P-46-a: cruce de ciclovía próximo"
    },
    {
        question: "La siguiente señal (P-46b), indica:",
        options: [
            "Que los ciclistas deben detenerse en ese punto.",
            "Que nos aproximamos a un cruce de ciclovía.",
            "Que la ciclovía es solo para los ciclistas.",
            "La ubicación de un cruce de ciclistas."
        ],
        correctAnswer: "La ubicación de un cruce de ciclistas.",
        image: quizImages[34],
        imageAlt: "Señal P-46b: ubicación de cruce de ciclistas"
    },
    {
        question: "La siguiente señal (P-48), indica:",
        options: [
            "Vía es de uso exclusivo de los peatones.",
            "Zona con presencia de peatones.",
            "Ubicación de un cruce escolar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Zona con presencia de peatones.",
        image: quizImages[35],
        imageAlt: "Señal P-48: zona con presencia de peatones"
    },
    {
        question: "La siguiente señal (P-48a), indica:",
        options: [
            "Vía es de uso exclusivo de peatones.",
            "Proximidad a un cruce peatonal.",
            "Ubicación de un cruce escolar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Proximidad a un cruce peatonal.",
        image: quizImages[36],
        imageAlt: "Señal P-48a: proximidad a cruce peatonal"
    },
    {
        question: "La siguiente señal (P-48-b), indica:",
        options: [
            "Ubicación de un cruce escolar.",
            "Proximidad a una calzada.",
            "Ubicación de un cruce peatonal.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Ubicación de un cruce peatonal.",
        image: quizImages[37],
        imageAlt: "Señal P-48-b: ubicación de cruce peatonal"
    },
    {
        question: "La siguiente señal (P-49), indica:",
        options: [
            "Zona escolar.",
            "Proximidad a un cruce peatonal.",
            "Zona transitada.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Zona escolar.",
        image: quizImages[38],
        imageAlt: "Señal P-49: zona escolar"
    },
    {
        question: "La siguiente señal (P-49a), indica:",
        options: [
            "Zona escolar.",
            "Proximidad a un cruce escolar.",
            "Ubicación de un cruce escolar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Proximidad a un cruce escolar.",
        image: quizImages[39],
        imageAlt: "Señal P-49a: proximidad a cruce escolar"
    },
    {
        question: "La siguiente señal (P-49b), indica:",
        options: [
            "Zona transitada.",
            "Proximidad a un cruce peatonal.",
            "Ubicación de un cruce escolar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Ubicación de un cruce escolar.",
        image: quizImages[40],
        imageAlt: "Señal P-49b: ubicación de cruce escolar"
    },
    {
        question: "La siguiente señal (P-50), indica:",
        options: [
            "Zona de deportes.",
            "Proximidad a campo deportivo.",
            "Proximidad a zona urbana.",
            "Niños jugando."
        ],
        correctAnswer: "Niños jugando.",
        image: quizImages[41],
        imageAlt: "Señal P-50: niños jugando"
    },
    {
        question: "La siguiente señal (P-51), indica:",
        options: [
            "Zona de parqueo de vehículos pesados.",
            "Proximidad a zona rural.",
            "Maquinaria agrícola en la vía.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Maquinaria agrícola en la vía.",
        image: quizImages[42],
        imageAlt: "Señal P-51: maquinaria agrícola en la vía"
    },
    {
        question: "La siguiente señal (P-53), indica:",
        options: [
            "Proximidad a un establo.",
            "Proximidad a zona agrícola.",
            "Animales en la vía.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Animales en la vía.",
        image: quizImages[43],
        imageAlt: "Señal P-53: animales en la vía"
    },
    {
        question: "La siguiente señal (P-55), indica:",
        options: [
            "Semáforo malogrado.",
            "Proximidad a un semáforo.",
            "Semáforos en ola verde.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Proximidad a un semáforo.",
        image: quizImages[44],
        imageAlt: "Señal P-55: proximidad a semáforo"
    },
    {
        question: "La siguiente señal (P-58), le indica:",
        options: [
            "Que usted se aproxima a una señal de PARE.",
            "Que usted debe parar donde está la señal P-58.",
            "Que se trata de un PARE, pero puede seguir adelante.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que usted se aproxima a una señal de PARE.",
        image: quizImages[45],
        imageAlt: "Señal P-58: proximidad a señal PARE"
    },
    {
        question: "La siguiente señal (P-59), le indica:",
        options: [
            "Que usted se aproxima a una señal de CEDA EL PASO.",
            "Que usted debe ceder el paso donde está la señal P-59.",
            "Que se trata de un PARE, pero puede seguir adelante.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que usted se aproxima a una señal de CEDA EL PASO.",
        image: quizImages[46],
        imageAlt: "Señal P-59: proximidad a señal CEDA EL PASO"
    },
    {
        question: "La siguiente señal (P-41), le indica:",
        options: [
            "Que usted se aproxima a una zona de camiones.",
            "Que usted debe encender sus luces pues se aproxima a una zona con poca visibilidad.",
            "Que usted se aproxima a un túnel.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que usted se aproxima a un túnel.",
        image: quizImages[47],
        imageAlt: "Señal P-41: proximidad a túnel"
    },
    {
        question: "La siguiente señal (P-45), indica:",
        options: [
            "Proximidad a un aeropuerto.",
            "Proximidad a una pista de aviones.",
            "Vuelo de aviones a baja altura.",
            "Aviones que generan ruido."
        ],
        correctAnswer: "Vuelo de aviones a baja altura.",
        image: quizImages[48],
        imageAlt: "Señal P-45: vuelo de aviones a baja altura"
    },
    {
        question: "La siguiente señal (P-52), le indica:",
        options: [
            "Que usted debe dar prioridad de paso a las ambulancias.",
            "Que usted debe dar prioridad de paso a los bomberos.",
            "Que se aproxima a una salida de vehículos de bomberos.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que se aproxima a una salida de vehículos de bomberos.",
        image: quizImages[49],
        imageAlt: "Señal P-52: salida de vehículos de bomberos"
    },
    {
        question: "La siguiente señal (P-66), le indica:",
        options: [
            "Que se aproxima un desierto.",
            "Que se aproxima una zona donde hay ráfagas de viento lateral.",
            "Que se acerca a una zona de arenamiento en la vía.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que se aproxima una zona donde hay ráfagas de viento lateral.",
        image: quizImages[50],
        imageAlt: "Señal P-66: ráfagas de viento lateral"
    },
    {
        question: "La siguiente señal (P-66a), le indica:",
        options: [
            "Que se aproxima una tormenta.",
            "Que está pasando por una zona donde hay ráfagas de viento lateral.",
            "Que se acerca a una zona de arenamiento en la vía.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Que se acerca a una zona de arenamiento en la vía.",
        image: quizImages[51],
        imageAlt: "Señal P-66a: zona de arenamiento en la vía"
    },
    {
        question: "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
        options: [
            "La vía está interrumpida y debe tomar el camino alternativo que muestra la señal.",
            "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
            "En la siguiente intersección está prohibido girar a la derecha y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
        image: quizImages[52],
        imageAlt: "Señal: desvío por prohibición de giro a la izquierda"
    },
    {
        question: "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
        options: [
            "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
            "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe hacerlo una cuadra antes.",
            "En esa dirección hay una zona de parqueo.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
        image: quizImages[53],
        imageAlt: "Señal: desvío para giro a la izquierda"
    },
    {
        question: "La siguiente señal (I-14), significa:",
        options: [
            "Señal de hostal.",
            "Señal de hospedaje.",
            "Señal de hospital.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Señal de hospital.",
        image: quizImages[54],
        imageAlt: "Señal I-14: hospital"
    },
    {
        question: "La siguiente señal (I-31), significa:",
        options: [
            "Proximidad de una bahía de taxis.",
            "Proximidad a un estacionamiento permitido.",
            "Proximidad de una zona de parqueo para vecinos.",
            "Proximidad de un estacionamiento para emergencias."
        ],
        correctAnswer: "Proximidad de un estacionamiento para emergencias.",
        image: quizImages[55],
        imageAlt: "Señal I-31: estacionamiento para emergencias"
    },
    {
        question: "La siguiente señal (I-9), significa:",
        options: [
            "Zona de control policial.",
            "Zona de control de aduanas.",
            "Zona militar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Zona militar.",
        image: quizImages[56],
        imageAlt: "Señal I-9: zona militar"
    },
    {
        question: "La siguiente señal (I-18), se utiliza para indicar:",
        options: [
            "Cercanía a una ferretería.",
            "Cercanía a un servicio mecánico.",
            "Cercanía a un grifo.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Cercanía a un servicio mecánico.",
        image: quizImages[57],
        imageAlt: "Señal I-18: servicio mecánico"
    },
    {
        question: "La siguiente señal (I-19), se utiliza para indicar:",
        options: [
            "Cercanía a un servicio mecánico.",
            "Cercanía a una tienda.",
            "Cercanía a un grifo.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Cercanía a un grifo.",
        image: quizImages[58],
        imageAlt: "Señal I-19: grifo"
    },
    {
        question: "La siguiente señal (I-20), se utiliza para indicar:",
        options: [
            "Cercanía a un servicio mecánico.",
            "Cercanía a una zona donde debe circular con cadenas en las llantas.",
            "Cercanía a un grifo.",
            "Cercanía a una llantería."
        ],
        correctAnswer: "Cercanía a una llantería.",
        image: quizImages[59],
        imageAlt: "Señal I-20: llantería"
    },
    {
        question: "La siguiente señal (R-16a), se utiliza para indicar:",
        options: [
            "Fin de la restricción de circulación de automotores.",
            "Fin de la restricción de prohibido adelantar.",
            "Fin de la restricción de circulación en doble sentido.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Fin de la restricción de prohibido adelantar.",
        image: quizImages[60],
        imageAlt: "Señal R-16a: fin de prohibido adelantar"
    },
    {
        question: "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
        options: [
            "Valor por la vida.",
            "Respeto por la integridad física del resto de los usuarios.",
            "Respeto a la autoridad encargada de la vigilancia y disciplina de tráfico.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Todas las alternativas son correctas."
    },
    {
        question: "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
        options: [
            "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas.",
            "Únicamente los peatones y ciclistas.",
            "Únicamente los peatones y niños.",
            "Todas las alternativas son correctas, con excepción de los ciclistas."
        ],
        correctAnswer: "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas."
    },
    {
        question: "La siguiente señal (P-61), muestra:",
        options: [
            "Flechas retroreflectivas que indican peligro.",
            "Delineadores de curva, que guían al conductor.",
            "Advertencia al conductor sobre la proximidad de un puente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Delineadores de curva, que guían al conductor.",
        image: quizImages[61],
        imageAlt: "Señal P-61: delineadores de curva"
    },
    {
        question: "Si usted es titular de una licencia particular A-I, está autorizado a conducir el siguiente vehículo:",
        options: [
            "Camión, tipo volquete.",
            "Ómnibus, tipo panorámico.",
            "Mototaxi.",
            "Automóvil, tipo sedan."
        ],
        correctAnswer: "Automóvil, tipo sedan."
    },
    {
        question: "Mientras la persona conduce, le está permitido:",
        options: [
            "Compartir su asiento con un niño, siempre y cuando éste sea menor de un año de edad.",
            "Que otra persona tome el control de la dirección del vehículo, siempre y cuando sea mayor de edad.",
            "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad."
    },
    {
        question: "El conductor está ________ a ___________ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos",
        options: [
            "En su derecho - negarse.",
            "Facultado - Rechazar.",
            "Obligado - someterse.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Obligado - someterse."
    },
    {
        question: "Ante un conductor con evidente discapacidad física, la cual no figura en el rubro de restricciones de su licencia de conducir, procede:",
        options: [
            "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación.",
            "Que la autoridad competente expida un permiso excepcional para dicho conductor.",
            "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor.",
            "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continúe conduciendo."
        ],
        correctAnswer: "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación."
    },
    {
        question: "¿Una persona con discapacidad física puede obtener una licencia de conducir particular?",
        options: [
            "Sí, siempre y cuando dicha discapacidad pueda ser superada con algún corrector que establezca alguna de las restricciones que prevé la norma vigente.",
            "No, está terminantemente prohibido.",
            "Depende del criterio del centro de emisión de la licencia de conducir.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Sí, siempre y cuando dicha discapacidad pueda ser superada con algún corrector que establezca alguna de las restricciones que prevé la norma vigente."
    },
    {
        question: "¿Puede una persona menor de edad conducir un vehículo?",
        options: [
            "Nunca.",
            "Sí, siempre y cuando vaya acompañada de una personas mayor de edad y titular de una licencia de conducir.",
            "No, salvo que conduzca un vehículo de dimensión reducida.",
            "Sí, siempre y cuando sea mayor de 16 años y cuente con licencia de conducir o permiso provisional, conforme a lo dispuesto en el Reglamento Nacional del Sistema de Emisión de Licencias de Conducir."
        ],
        correctAnswer: "Sí, siempre y cuando sea mayor de 16 años y cuente con licencia de conducir o permiso provisional, conforme a lo dispuesto en el Reglamento Nacional del Sistema de Emisión de Licencias de Conducir."
    },
    {
        question: "Es una obligación general de tránsito que, los ____________ circulen respetando los mensajes de _______________, las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
        options: [
            "Peatones - los letreros instalados en las vías públicas.",
            "Los usuarios de la vía pública - los dispositivos de control de tránsito.",
            "Vehículos - los medios de comunicación.",
            "Menores de edad - los adultos mayores."
        ],
        correctAnswer: "Los usuarios de la vía pública - los dispositivos de control de tránsito."
    },
    {
        question: "Marque la afirmación incorrecta:",
        options: [
            "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda dificultar la circulación.",
            "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la vía.",
            "Los vehículos deben circular en vías urbanas con las luces bajas las 24 horas del día.",
            "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones, para evitar que ésta pueda mojar la acera y los peatones."
        ],
        correctAnswer: "Los vehículos deben circular en vías urbanas con las luces bajas las 24 horas del día."
    },
    {
        question: "¿Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
        options: [
            "Debe obedecer la señal de velocidad instalada en la vía.",
            "Puede ir a una velocidad máxima de 60 km/h.",
            "Debe ir a una velocidad máxima de 60 km/h.",
            "Debe ir a una velocidad entre 50 y 60 km/h."
        ],
        correctAnswer: "Debe obedecer la señal de velocidad instalada en la vía."
    },
    {
        question: "Sobre la conducción en retroceso, marque la opción correcta:",
        options: [
            "Está prohibida, salvo en casos estrictamente justificados.",
            "Nunca debe realizarse.",
            "Está permitida.",
            "Está permitida, salvo en carreteras."
        ],
        correctAnswer: "Está prohibida, salvo en casos estrictamente justificados."
    },
    {
        question: "El uso de la luz ___________ es obligatorio en __________ , debiendo cambiar por luz ____________ momentos previos al cruce con otro vehículo que circule en sentido contrario.",
        options: [
            "Baja - carreteras - alta.",
            "Alta - vías urbanas - baja.",
            "Rompenieblas - carreteras - baja.",
            "Alta - carretereras - baja."
        ],
        correctAnswer: "Alta - carretereras - baja."
    },
    {
        question: "Indique la conducta permitida:",
        options: [
            "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento.",
            "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible.",
            "El estacionamiento de un vehículo después de 1 metro de un paso peatonal.",
            "El estacionamiento de un vehículo sobre las aceras."
        ],
        correctAnswer: "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible."
    },
    {
        question: "Se considera el abandono de un vehículo cuando:",
        options: [
            "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 72 horas.",
            "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 96 horas.",
            "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de 48 horas.",
            "La norma de tránsito no establece nada sobre el abandono del vehículo."
        ],
        correctAnswer: "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de 48 horas."
    },
    {
        question: "Al transportar carga en su vehículo, usted debe:",
        options: [
            "Asegurarse, en caso la carga sobresalga lateralmente de la carrocería, esté bien sujeta.",
            "Evitar todo riesgo de caída de la carga que sobresale lateralmente de la carrocería.",
            "Tratar que la carga no sea arrastrada.",
            "Asegurarse que la carga no sobrepase las dimensiones de la carrocería."
        ],
        correctAnswer: "Asegurarse que la carga no sobrepase las dimensiones de la carrocería."
    },
    {
        question: "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
        options: [
            "Está permitida.",
            "Está prohibida, en un índice superior al límite máximo que permite la norma.",
            "Está prohibida en el ámbito urbano.",
            "La norma no regula sobre ello."
        ],
        correctAnswer: "Está prohibida, en un índice superior al límite máximo que permite la norma."
    },
    {
        question: "La autoridad competente, ______________ puede prohibir o restringir _____________________ en determinadas vías públicas.",
        options: [
            "Cuando la situación lo justifique - la circulación o estacionamiento de vehículos.",
            "Aun cuando la situación lo justifique no - circulación o estacionamiento de vehículos.",
            "No se encuentra facultada ni - circulación de vehículos.",
            "Únicamente con el consentimiento del conductor - circulación de vehículos."
        ],
        correctAnswer: "Cuando la situación lo justifique - la circulación o estacionamiento de vehículos."
    },
    {
        question: "Si al conducir en una carretera de noche se aproxima un vehículo en sentido contrario; usted debe:",
        options: [
            "Cambiar de luces bajas a luces altas",
            "Encender las luces de emergencia.",
            "Cambiar de luces altas a luces bajas.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Cambiar de luces altas a luces bajas."
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
        question: "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
        options: [
            "Acudir a la estación de bomberos.",
            "Llamar a un familiar.",
            "Solicitar la intervención de la autoridad policial.",
            "Abandonar el lugar donde ocurrió el accidente."
        ],
        correctAnswer: "Solicitar la intervención de la autoridad policial."
    },
    {
        question: "El conductor antes de iniciar la conducción de un vehículo no está obligado a:",
        options: [
            "Portar la tarjeta de identificación vehicular del vehículo que conduce.",
            "Portar y exhibir la Placa Única de Rodaje.",
            "Constatar que el vehículo tiene SOAT vigente.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Ninguna de las alternativas es correcta."
    },
    {
        question: "La ____________ faculta y autoriza la circulación del vehículo por la vía pública, identifica el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
        options: [
            "Tarjeta de identificación vehicular.",
            "Municipalidad provincial.",
            "La Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT.",
            "Placa Única Nacional de Rodaje."
        ],
        correctAnswer: "Placa Única Nacional de Rodaje."
    },
    {
        question: "A fin de determinar la presencia de alcohol o sustancias estupefacientes en el conductor, el efectivo de la Policía de Tránsito puede exigirle al momento de la intervención:",
        options: [
            "Que realice pruebas de coordinación y equilibrio.",
            "Uso del alcoholímetro.",
            "Prueba de alcoholemia.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Todas las alternativas son correctas."
    },
    {
        question: "¿El Reglamento Nacional de Tránsito considera la reincidencia en las infracciones de tránsito?",
        options: [
            "No, el conductor puede cometer la misma infracción varias veces y la sanción será la misma.",
            "Si, cuando el conductor comete la misma infracción dentro de los 12 meses será sancionado con el doble de la multa.",
            "Solo en los casos en que se cometan infracciones gravísimas.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Si, cuando el conductor comete la misma infracción dentro de los 12 meses será sancionado con el doble de la multa."
    },
    {
        question: "¿Después de qué tiempo de haber cometido la misma infracción se llama reincidencia y es sancionada con el doble de la multa establecida?",
        options: [
            "06 meses.",
            "12 meses.",
            "24 meses.",
            "35 meses."
        ],
        correctAnswer: "12 meses."
    },
    {
        question: "Si a un conductor infractor le suspendieron su licencia de conducir, éste se encuentra facultado para:",
        options: [
            "Tramitar el duplicado de su licencia de conducir.",
            "Tramitar la revalidación de su licencia de conducir.",
            "Tramitar la recategorización de su licencia de conducir.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Ninguna de las alternativas es correcta."
    },
    {
        question: "Las __________________ tienen por función informar a los usuarios sobre los servicios generales existentes próximos a la vía, tales como teléfono, hospedaje, restaurante, primeros auxilios, estación de combustibles, talleres, y otros.",
        options: [
            "Señales de localización.",
            "Señales de salida inmediata.",
            "Señales de servicios generales.",
            "Señales ordinarias."
        ],
        correctAnswer: "Señales de servicios generales."
    },
    {
        question: "¿Constituye una infracción tramitar el duplicado de una licencia de conducir que se encuentra retenida?",
        options: [
            "No constituye una infracción.",
            "Solo cuando la licencia de conducir ha sido retenida por la comisión de una infracción muy grave.",
            "Si, constituye una infracción.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Si, constituye una infracción."
    },
    {
        question: "Las marcas en el pavimento constituyen la señalización ___________ y se emplean para _____________ la circulación.",
        options: [
            "Horizontal - reglamentar.",
            "Vertical - reglamentar.",
            "Más importante - mejorar.",
            "Menos importante - adornar."
        ],
        correctAnswer: "Horizontal - reglamentar."
    },
    {
        question: "Ciclista es a ciclovía como:",
        options: [
            "Conductor - acera.",
            "Conductor - calzada.",
            "Conductor - berma.",
            "Peatón - autopista."
        ],
        correctAnswer: "Conductor - calzada."
    },
    {
        question: "La siguiente señal (P-15), se utiliza para advertir al conductor:",
        options: [
            "La proximidad a una vía de tres carriles.",
            "La proximidad a un huracán.",
            "La proximidad a un camino sinuoso.",
            "La proximidad de una intersección rotatoria (óvalo o rotonda)."
        ],
        correctAnswer: "La proximidad de una intersección rotatoria (óvalo o rotonda).",
        image: quizImages[62],
        imageAlt: "Señal preventiva P-15 que advierte sobre la proximidad de una rotonda u óvalo"
    },
    {
        question: "La siguiente señal (P-31a), indica:",
        options: [
            "La proximidad del final de la vía.",
            "La proximidad de una vía asfaltada.",
            "La proximidad de una pendiente leve.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "La proximidad del final de la vía.",
        image: quizImages[63],
        imageAlt: "Señal preventiva P-31a indicando proximidad del final de la vía"
    },
    {
        question: "Es una línea transversal a la calzada, que indica al conductor que debe detener completamente el vehículo, no debiendo sobrepasar el inicio de la indicada línea:",
        options: [
            "Línea de carril.",
            "Línea de borde de calzada.",
            "Línea de pare.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Línea de pare."
    },
    {
        question: "Los semáforos son:",
        options: [
            "Dispositivos de control del tránsito que tienen por finalidad regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas.",
            "Dispositivos de control del tránsito que tienen por finalidad regular y controlar únicamente el tránsito vehicular motorizado y peatonal, a través de las indicaciones de luces.",
            "Señales de color rojo, verde y amarillo, que tienen como único fin regular la corriente vehicular.",
            "Artefactos que emiten luces de colores y cuyo único fin es regular la corriente de vehículos motorizados y peatones."
        ],
        correctAnswer: "Dispositivos de control del tránsito que tienen por finalidad regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas."
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
    },
    {
        question: "¿Cuál es la acción correcta del conductor, según las normas de tránsito, en la situación que plantea el siguiente gráfico?",
        options: [
            "Girar rápidamente a la derecha antes que el peatón cruce la calzada.",
            "Dar preferencia de paso al peatón para que cruce la calzada.",
            "Girar lentamente a la derecha antes que el peatón cruce la calzada.",
            "Tocar el claxon para que el peatón no cruce la calzada."
        ],
        correctAnswer: "Dar preferencia de paso al peatón para que cruce la calzada.",
        image: quizImages[64],
        imageAlt: "Gráfico mostrando situación de conductor girando a la derecha con peatón cruzando"
    },
    {
        question: "¿En cuál de las siguientes opciones, los factores mencionados contribuyen a una colisión vehicular?",
        options: [
            "Pavimento seco, somnolencia, frenos desgastados.",
            "Pavimento húmedo, neumáticos desgastados, cansancio.",
            "Reductores de velocidad, falta de atención, uso del teléfono celular.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Pavimento húmedo, neumáticos desgastados, cansancio."
    },
    {
        question: "La __________ es la parte de una carretera o camino contigua a la calzada, no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
        options: [
            "Berma.",
            "Autopista.",
            "Acera.",
            "Demarcación."
        ],
        correctAnswer: "Berma."
    },
    {
        question: "Es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales.",
        options: [
            "La calzada.",
            "La acera.",
            "La berma.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "La calzada."
    },
    {
        question: "Es una parte de la vía destinada al uso de peatones.",
        options: [
            "La acera.",
            "La calzada.",
            "La berma.",
            "La autopista."
        ],
        correctAnswer: "La acera."
    },
    {
        question: "Son señales que regulan el tránsito:",
        options: [
            "Las bocinas y las marcas en la calzada o señales horizontales.",
            "Las bocinas y las señales verticales.",
            "Las señales verticales, las marcas en la calzada o señales horizontales y las bocinas.",
            "Las señales verticales y las marcas en la calzada o señales horizontales."
        ],
        correctAnswer: "Las señales verticales y las marcas en la calzada o señales horizontales."
    },
    {
        question: "Los vehículos deben ser conducidos con:",
        options: [
            "Puertas y capot cerrados, permitiéndose la maletera entreabierta para casos especiales.",
            "Puertas, capot y maletera cerrados.",
            "Puertas, capot y maletera cerrados, salvo autorización especial.",
            "Capot y maletera cerrados, permitiéndose dos puertas entreabiertas para casos especiales."
        ],
        correctAnswer: "Puertas, capot y maletera cerrados."
    },
    {
        question: "El conductor que en una vía urbana va a girar a la izquierda, a la derecha o en \"U\" debe hacer la señal respectiva con la luz direccional, por lo menos:",
        options: [
            "2 segundos antes de realizar la maniobra.",
            "1 metro antes de realizar la maniobra.",
            "20 metros antes de realizar la maniobra.",
            "3 metros antes de realizar la maniobra."
        ],
        correctAnswer: "20 metros antes de realizar la maniobra."
    },
    {
        question: "Si usted está conduciendo por una carretera y va girar a la izquierda, debe realizar la señal respectiva con la luz direccional por lo menos:",
        options: [
            "2 segundos antes de realizar la maniobra.",
            "2 metros antes de realizar la maniobra.",
            "30 metros antes de realizar la maniobra.",
            "1 metro antes de realizar la maniobra."
        ],
        correctAnswer: "30 metros antes de realizar la maniobra."
    },
    {
        question: "La licencia particular de la Clase y Categoría A-I, permite conducir motos?",
        options: [
            "Si.",
            "No.",
            "Únicamente en el ámbito urbano.",
            "Únicamente en carreteras."
        ],
        correctAnswer: "No."
    },
    {
        question: "El siguiente gráfico muestra:",
        options: [
            "Señalización de tránsito vertical y horizontal en una zona escolar.",
            "Únicamente señalización de tránsito vertical en una zona escolar.",
            "Únicamente señalización de tránsito horizontal en una zona escolar.",
            "Ninguna de las alternativas es correcta."
        ],
        correctAnswer: "Señalización de tránsito vertical y horizontal en una zona escolar.",
        image: quizImages[65],
        imageAlt: "Gráfico mostrando señalización de tránsito en zona escolar"
    },
    {
        question: "Las __________canalizadoras, tiene por función conformar las islas canalizadoras del tránsito automotor en una _________.",
        options: [
            "Islas canalizadoras - vía.",
            "Líneas - intersección.",
            "Vías - intersección.",
            "Todas las alternativas son correctas."
        ],
        correctAnswer: "Líneas - intersección."
    },
    {
        question: "Si al conducir en una intersección se encuentra con las siguientes marcas en el pavimento (malla ortogonal de color amarillo), significa:",
        options: [
            "Que no puede detener el vehículo dentro del área de intersección.",
            "Que se están realizando trabajos de emergencia en el área demarcada.",
            "Que únicamente puede detener el vehículo dentro del área de intersección.",
            "Que es una isla de refugio peatonal."
        ],
        correctAnswer: "Que no puede detener el vehículo dentro del área de intersección.",
        image: quizImages[66],
        imageAlt: "Malla ortogonal amarilla en pavimento de intersección"
    },
    {
        question: "De acuerdo al siguiente gráfico, es correcto afirmar que:",
        options: [
            "La zona que permite adelantar inicia con las líneas amarillas continuas.",
            "Los conductores pueden estacionarse al empezar las líneas continuas.",
            "La zona de no adelantar inicia con las líneas amarillas continuas.",
            "El conductor del camión puede estacionarse antes de empezar las líneas continuas."
        ],
        correctAnswer: "La zona de no adelantar inicia con las líneas amarillas continuas.",
        image: quizImages[67],
        imageAlt: "Gráfico mostrando líneas amarillas continuas en carretera y zona de no adelantar"
    }
];