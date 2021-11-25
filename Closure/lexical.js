const construirContador = (i) => {
    let contador = i; //1ra vuelta -> 1
    //creamos otra funcion al interior
    const mostrarContador = () => {
        console.log(contador++); //1
    };
    return mostrarContador; //retornamos 1;
};

//definimos una variable que tendra nuestra funcion
const miContador = construirContador(1);
miContador(); //1
miContador(); //2
miContador(); //3

const otroContador = construirContador(10);
otroContador(); // 10
otroContador(); 
otroContador();