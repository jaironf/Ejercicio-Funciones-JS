//EJEMPLOS CLASE

console.log("first");

function suma(a, b) {
    return a + b
}
console.log(suma(3, 2))
console.log(suma(35, 87))

//funcion con objetos

const person ={
    firstName: "Jairo",
    lastName: "Núñez",
}

function sayMyFullName(person) {
    return 'Homa mi nombre completo es ' + person.firstName + ' ' + person.lastName
}
console.log(sayMyFullName(person));


//EJERCICIO FUNCIONES

function resta(a, b) {
    return a - b 
}
console.log(resta(8, 4));



function calculoNotas(nota) {
    switch (true) {
        case nota >= 0 && nota <= 4:
            return  'Insuficiente'
            break;
        case nota >= 5 && nota <= 6:
            return  'Suficiente'
        case nota >= 7 && nota <= 8:
            return 'Notable'
        case nota >= 9 && nota <= 10:
            return 'Sobresaliente'
        default:
            break;
    }
}
console.log(calculoNotas(0));



function duplicaNumero(num) {
    if (typeof num === 'number') {
        return num * 2;
    }else{
        return 'Debo ser ejecutada con un número'
    }
    }
console.log(duplicaNumero(6));



function caracterInicial(caracter) {
    switch (true) {
        case caracter.length === 0:
            return 'Debo ser ejecutada con un string no vacío'
        case (typeof caracter === 'string'):
            return caracter.charAt(0);
            break;
        case (typeof caracter !== 'string'): 
            return 'Debo ser ejecutada con un string'
        default:
            break;
    }
}
console.log(caracterInicial('hola'));
console.log(caracterInicial(3));
console.log(caracterInicial(''))



function ultimoCaracter(last) {
    switch (true) {
        case last.length === 0:
            return 'Debo ser ejecutada con un string no vacío'
            break;
        case (typeof last === 'string'):
            return last.slice(-1)
        case (typeof last !== 'string'):
            return 'Debo ser ejecutada con un string'
        default:
            break;
    }
}
console.log(ultimoCaracter('llave'));
console.log(ultimoCaracter(5));
console.log(ultimoCaracter(''));



function cuentaCaracteres(palabra) {
    switch (true) {
        case (typeof palabra ==='string'):
            return palabra.length
            break;
        case (typeof palabra !== 'string'):
            return 'Debo ser ejecutada con un string'
        default:
            break;
    }
}
console.log(cuentaCaracteres('pizarra'))
console.log(cuentaCaracteres(5));




function esPalindromo(reverse) {
    switch (true) {
        case reverse.length === 0:
            return 'No es un formato correcto'
            break;
        case (typeof reverse === 'string'):
            return reverse.split('').reverse().join('')
        case (typeof reverse !== 'string'):
            return 'No es un formato correcto'
        default:
            break;
    }
}
console.log(esPalindromo('hola esto está al revés'));
console.log(esPalindromo(''));
console.log(esPalindromo(3));



function getPrecioMostrar(precio) {
    switch (true) {
        case typeof precio !== 'number':
            return 'No es el formato correcto'
            break;
        case (typeof precio === 'number'):
            return precio.toFixed(2) + ' €'
        default:
            break;
    }
}
console.log(getPrecioMostrar(3));
console.log(getPrecioMostrar('hola'));



function division(a, b) {
    
}