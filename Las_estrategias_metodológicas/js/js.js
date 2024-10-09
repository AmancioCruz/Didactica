const contenedor = document.querySelector("#contenido");
let clickeado = false;

class Tarjeta{
    constructor(titulo, descripcion, caracteristicas){
        this.Titulo = titulo;
        this.Descripcion = descripcion;
        this.Caracteristicas = caracteristicas
    }
    ImprimirDatos(){
        console.log(this.Titulo);
        console.log(this.Descripcion);
        console.log(this.Caracteristicas);
    }
}

let estrategias_metodológicas = [
    new Tarjeta(
        "¿Para qué se necesitan las estrategias metodológicas?",
        "Para facilitar la actividad repetitiva del alumno durante el aprendizaje se hace necesaria la utilización de diferentes estrategias didácticas",
        [
            "Flexibles: permiten una mayor riqueza preceptiva, una mayor motivación y una adecuación mayor a las diferencias individuales",
            "Concebir al alumno como agente activo",
            "Concebir al docente como mediador"
        ]),
    new Tarjeta(
        "¿Qué elementos esta implicados?",
        "Los elementos que están implicados y pueden estar relacionados de maneras diferentes",
        [
            "Profesor",
            "Alumno ",
            "Grupo",
            "Acción comunicativa",
            "Medio y recursos",
            "Organización espacial y temporal"
        ]
    ),
    new Tarjeta(
        "¿Qué potencian las estrategias metodológicas?",
        "Las diferentes estrategias metodológicas permiten y potencian la diferencia del campo perceptivo",
        [
            "Mayor almacenaje de la información",
            "Fluidez en su recuperación",
            "Integración",
            "Transferencia de los aprendizajes"
        ]
    )
]

let tipos_contenido = [
    new Tarjeta(
        "¿Qué nos hace plantearnos el análisis de contenido?",
        "Nos hace plantearnos el desarrollo de capacidades humanas y nos exige una base para que diversas capacidades actúen e interactúen.",
        [
            "Construcción del pensamiento",
            "Afectividad",
            "Ámbito psicomotor"
        ]
    ),
    new Tarjeta(
        "¿Qué características debe tener el contenido educativo?",
        "El contenido educativo debe cumplir con ciertos criterios para asegurar un aprendizaje efectivo y significativo.",
        [
            "Relevancia: El contenido debe ser pertinente a las necesidades y contextos actuales.",
            "Actualidad: Debe estar actualizado y reflejar los avances en el área de conocimiento.",
            "Objetividad: El contenido se debe presentar de manera imparcial y clara.",
            "Criterio de pertinencia: Debe estar alineado con los objetivos y competencias a desarrollar.",
            "Carácter integrador: El contenido debe abordar aspectos multidisciplinares, conectando conocimiento, procedimientos y actitudes."
        ]
    ),
    new Tarjeta(
        "¿Cómo se plantea el contenido de aprendizaje ?",
        "Desde el punto de vista de la normativa educativa vigente el contenido de aprendizaje es considerado una pieza clave en el currículum, insistiendo en su correcta selección y secuenciación.",
        [
            "Contenidos conceptuales",
            "Contenidos procedimentales",
            "Contenidos de actitudes",
            "La integración de conceptos, procedimientos y valores facilita el aprendizaje.",
            "La simple suma de acciones lleva a un aprendizaje desestructurado y sin significado."
        ]
    ),
]

let comunicacion =[
    new Tarjeta(
        "¿Cómo se entiende el acto didáctico como relación comunicativa?",
        "El acto didáctico es un proceso comunicativo en el que el contenido se convierte en un signo compartido entre emisor y receptor, destacando la enseñanza como una modalidad de comunicación.",
        [
            "Modelo didáctico informativo: unidireccional, con un solo emisor, como en una conferencia o clase magistral.",
            "Modelo didáctico interactivo: alternancia continua del emisor, con interacción y transacción informativa.",
            "Modelo didáctico retroactivo: síntesis de los modelos informativo e interactivo, donde el profesor ajusta la enseñanza según las respuestas o preguntas del alumno.",
            "Número de implicados: uno-grupo, uno-uno-uno, etc.",
            "Interactividad: intervenciones sin respuesta, intervención-respuesta, multilateralidad."
        ]
    ),
    new Tarjeta(
        "¿Cómo se entiende el acto didáctico como proceso de comunicación mediado?",
        "El aprendizaje se ve como una confluencia entre el profesor y el alumno, ambos actuando en un contexto institucional, con medios y recursos que facilitan el proceso de enseñanza-aprendizaje.",
        [
            "El aprendizaje se construye de forma activa y progresiva por el alumno a través de experiencias directas o mediadas.",
            "Los medios y recursos son herramientas al servicio del proceso de enseñanza-aprendizaje.",
            "Las nuevas tecnologías requieren entender el proceso didáctico como comunicación mediada.",
            "Teoría de autonomía e independencia: los discentes son responsables de su propio aprendizaje.",
            "Teoría de interacción y comunicación: mayor relación personal y organización genera mayor motivación.",
            "Teoría de industrialización: las TIC generan nuevos tipos de alumnos, profesores y roles en la enseñanza."
        ]
    ),
    new Tarjeta(
        "¿Cómo se relacionan la comunicación e interacción en el acto didáctico?",
        "El acto didáctico es un proceso de enseñanza que implica la comunicación y la interacción entre el profesor y el alumno, siendo fundamentales para facilitar el aprendizaje.",
        [
            "La enseñanza se ha conceptualizado de diversas maneras a lo largo del tiempo, desde la clase magistral expositiva hasta la enseñanza colaborativa.",
            "La comunicación es clave para transmitir competencias y desarrollar comportamientos sociales.",
            "La interacción se convierte en didáctica cuando ocurre en el acto de enseñanza-aprendizaje.",
            "La calidad de la interacción didáctica influye en el progreso del alumno y en la eficacia de los procesos interactivos.",
            "El acto didáctico requiere la interacción entre docente, discente y otros elementos como medios, estrategias, contenido y contexto.",
            "No toda comunicación genera un aprendizaje; es necesaria la interacción entre los componentes del acto didáctico para que se produzca."
        ]
    )  
]


function crearTarjetas(opcion){
    
        if(opcion == 1){
            contenedor.innerHTML = "";
            estrategias_metodológicas.forEach(element => {
                renderizarTarjeta(element)
            });
            clickeado=true;
        }
        if(opcion == 2){
            contenedor.innerHTML = "";
            tipos_contenido.forEach(element =>{
                renderizarTarjeta(element)
            });
            clickeado = true;
        }
        if(opcion == 3){
            contenedor.innerHTML = "";
            comunicacion.forEach(element =>{
                renderizarTarjeta(element)
            });
            clickeado = true;
        }
        /*const boton = document.createElement('button');
        boton.setAttribute("type", "button");
        boton.classList.add("action");
        contenedor.appendChild(boton);*/
    
}

function renderizarTarjeta(tarjeta){
    const card = document.createElement('div'); 
    card.classList.add("card");

    const header = document.createElement('div');
    header.classList.add("header");

    const span= document.createElement('span');
    span.classList.add("title");
    span.textContent = tarjeta.Titulo;

    const p = document.createElement('p');
    p.classList.add("desc");
    p.textContent = tarjeta.Descripcion;

    const list = document.createElement('ul');
    list.classList.add("lists");

    for(let i = 0; i < tarjeta.Caracteristicas.length; i ++){
        const item = document.createElement('li');
        item.classList.add("list");

        item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>`;

        const spanItem = document.createElement('span');

        spanItem.textContent = tarjeta.Caracteristicas[i];
        item.appendChild(spanItem);
        list.appendChild(item);
    }

    header.appendChild(span);
    card.appendChild(header);
    card.appendChild(p);
    card.appendChild(list);
    contenedor.appendChild(card);

}