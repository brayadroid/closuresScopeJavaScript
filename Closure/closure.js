const alcancia = () => {
    var guardarDinero = 0;

    const contarDinero = (dinero) => {
        guardarDinero += dinero;
        console.log(`Alcancia: $${guardarDinero}`);        
    }

    return contarDinero;
};

let miAlcancia = alcancia();

miAlcancia(10);
miAlcancia(100);
miAlcancia(200);
