let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi funcion que suma dos números
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (euro) => {
    let result = 0;
    result = euro*oneEuroIs["USD"];
    return result
}

const fromDollarToYen = (dollar) => {
    let result = 0;
    result = ((dollar/1.2)*oneEuroIs["JPY"]).toFixed(2);
    return result
}

const fromYenToPound = (yen) => {
    let result = 0;
    result = ((yen/127.9)*oneEuroIs["GBP"]).toFixed(2);
    return result
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log(fromEuroToDollar(8))
console.log(fromDollarToYen(100))
console.log(fromYenToPound(100))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
