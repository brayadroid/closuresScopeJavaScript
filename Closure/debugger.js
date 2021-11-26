const alcancia = () => {
    var guardarDinero = 0;
    debugger
    const contarDinero = (dinero) => {
        guardarDinero += dinero;
        debugger
        console.log(`Alcancia: $${guardarDinero}`);        
    }

    return contarDinero;
};

let miAlcancia = alcancia();

miAlcancia(10);
miAlcancia(100);
miAlcancia(200);
