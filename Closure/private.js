//CREAR VARIABLES PRIVADAS CON CLOSURE

/* 
Crearemos una funcion persona que tendra unos metodos internos
con los que podamos obtener la informacion en una variable o asignarle algun valor 
a esta variable pero nunca vamos a poder hacer desde afuera
*/

const persona = () => {
    //Nuestra funcion protege de alguna manera nuestra variable guardarNombre.
    var guardarNombre = "Nombre";

    //vamos a retornar los metodos que vamos a utilizar.
    return{
        getNombre: () => {return guardarNombre;},
        setNombre: (nombre) => {guardarNombre = nombre;}
    };
};

//creamos un nuevo valor nuevaPersona
nuevaPersona = persona();
//ver que valor me va a traer
console.log(nuevaPersona.getNombre());
nuevaPersona.setNombre("Brayan");
//Imprimimos nuevamente para ver lo que trae
console.log(nuevaPersona.getNombre());

/* 
En resumen, podemos crear privacidad a traves de closure.
*/