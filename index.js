


//const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10]

//console.log("hola".length)

// CLOUSURE | LAMDA


/*
// console.log(valores[0]) // [indice] indice == posición del objeto en el array, ARRANCA EN 0 

const numerosFiltrados = listaDeNumeros.filter(x => x % 2 == 0)
console.log(listaDeNumeros.filter(x => { // { } CUANDO HAY LLAVES ES PORQUE TENES QUE PONER RETURN, SI NO. HAY IMPLICITAMENTE UN RETURN
    return x <= 5
}))

listaDeNombres.forEach((name, index) => {
    console.log(name + " " + listaDeApellidos[index])
})
const lista = listaDeNumeros.map(x => x * 2)

// listaDeNumeros.push(11)
valores.length => 10
valores.filter => (menores de 3) [1,2]
valores.forEach => 
valores.some -> any
valores.every -> all
valores.map -> transforma

true && true -> true
true && false -> false
false && true -> false
false && false -> false

true || true -> true
true || false -> true
false || true -> true
false || false -> false

// EVERY DEVUELVE TRUE SI TODOS LOS ELEMENTOS DE LA LISTA DAN TRUE
// SOME DEVUELVE TRUE SI HAY AL MENOS UNO QUE DE TRUE
// const todosPares = listaDeNumeros.every(x => x % 2 == 0)
// const todosPares = listaDeNumeros.some(x => x % 2 == 0)

for(var i = 0; i < valores.length - 1; i++){
    const valor = valores[i]
}

EJERCICIOS:

1) Sacar el 


Ejercicio:

Consolear los resultados

Escribir una función que tome por parámetro una lista de enteros encontrar el número mas alto
'' enteros encontrar el número mas bajo
'' enteros calcular el promedio

Escribir una función que tome por parámetro una lista de strings eliminar la palabra mas corta ("hola".length => 4)
'' eliminar la palabra mas corta ("hola".length => 4)
'' saber si todas las palabras son de tamaño mayor a 6 (ES 1 LINEA)
'' saber si hay alguna palabras de tamaño menor a 4 (ES 1 LINEA)

Un poco mas dificil
Teniendo una lista vacía const palabras = []
Escribir una función que reciba por parámetro una palabra (String), verificar que la misma no se encuentre en la lista y si es así agregarla
 
Pista: hay un mensaje que se llama .includes() que recibe un objeto por parámetro para saber si ese elemento está incluido en la lista
Ej: [1,2,3,4].includes(2) -> true; [1,2,3,4].includes(5) -> false
*/


/*function numeroMasAltoDeLista(lista){    
    let numeroMasAlto = -99999999999
    lista.forEach(element => {
        console.log("NUMERO MAS ALTO ACTUAL: " + numeroMasAlto)
        console.log("NUMERO ITERACIÓN: " + element)
        if(element > numeroMasAlto){
            numeroMasAlto = element
        }
    });
    
    return numeroMasAlto
}

console.log(numeroMasAltoDeLista(listaDeNumero))*/
/*
const listaDeNumero = [19, 23, 150, 20, 10, 13, 200]
// PRIMER VALOR MAYOR A 100
let numeroMayorA100 = 0
let index = listaDeNumero.length - 1
while(numeroMayorA100 < 100){
    const valorDelArray = listaDeNumero[index]
    numeroMayorA100 = valorDelArray
    index--;
}

let lista = ["telefono", "soga", "paraidas", "antorcha"];

function eliminarPalabra() {
    //ENCONTRAMOS LA PALABRA MAS CORTA
    let palabraMasCorta = "aaaaaaaaaaaaaaaaaaaaa"
    lista.forEach(palabra => {
        if(palabra.length < palabraMasCorta.length){
            palabraMasCorta = palabra
        }
    })
        
    //ELIMINAR LA PALABRA DEL ARRAY
    return lista.filter(elemento => elemento != palabraMasCorta)
}

console.log(eliminarPalabra())
*/


/*
function promedio(listaDeNumeros) {

    let suma= listaDeNumeros.reduce(function (valoresAcumulados = 0, nuevoElemento){
        return valoresAcumulados + nuevoElemento;
    });

    return suma / listaDeNumeros.lengt
    let sumaTotal = 0
    listaDeNumero.forEach((num) => sumaTotal += num)
    return sumaTotal / listaDeNumero.length
}


// saber si todas las palabras son de tamaño mayor a 6 (ES 1 LINEA)
// saber si hay alguna palabras de tamaño menor a 4 (ES 1 LINEA)

function todasPalabrasMayoresA6(listaDePalabras) {
    return listaDePalabras.every(palabra => palabra.length > 6)
}

function algunaPalabraMenorA4(listaDePalabras) {
    return listaDePalabras.some(palabra => palabra.length < 4)
}


Teniendo una lista vacía const palabras = []
Escribir una función que reciba por parámetro una palabra (String), verificar que la misma no se encuentre en la lista y si es así agregarla

Pista: hay un mensaje que se llama .includes() que recibe un objeto por parámetro para saber si ese elemento está incluido en la lista
Ej: [1,2,3,4].includes(2) -> true; [1,2,3,4].includes(5) -> false
// OBJETO.MENSAJE(ARGUMENTOS/PARÁMETROS)


const listaDePalabras = ["hola, como estas?", "todo bien", "may"]

// function nombre de la funcion (argumentos/parámetros)

// if(booleano -> condicion)

function agregarPalabraQueNoEsteEnLista(palabra) {
    if (!listaDePalabras.includes(palabra)) {
        listaDePalabras.push(palabra)
    }
}

agregarPalabraQueNoEsteEnLista("may")
console.log(listaDePalabras)


SI ES MENOR A 10 -> SOY UN BEBE
SI ES MAYOR A 10 Y MENOR A 30 -> SOY UN ADOLENCENTE
SI ES MAYOR A 30 Y MENOR A 50 -> SOY UN ADULTO
SI ES MAYOR A 50 -> SOY UN VIEJO


DE ARRIBA PARA ABAJO HASTA QUE ENCUENTRE LA PRIMER CONDICIÓN QUE CUMPLA
if
else if
else if
else if
else if
else if
else

FORMATEAR CÓDIGO
SHIFT + ALT + F
*/

const listaDeObjetos = [
    { nombre: "Joaco", edad: 22 },
    { nombre: "Juli", edad: 30 },
    { nombre: "Chiffi", edad: 40 }
]

function consolearNombres() {
    return listaDeObjetos.filter(obj => obj.nombre.length >= 5 && obj.edad > 25)
}

console.log(consolearNombres())
