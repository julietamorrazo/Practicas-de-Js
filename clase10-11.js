/*
Tarea: 
Dificultad: fácil porque ya vimos como hacerlo
1) Dada la lista con objetos de productos quedarse con los productos con precio mayor a 90

Dificultad: Si lo haces combinado al punto 1 debería ser Medio/dificil. Si no sale dejalo y lo vemos después
2) Usando la función del punto 1. Quedarse con los productos con precio mayor a 90 y que además sean comestibles
//IMPORTANTE: intentar hacer una función que resuelva lo del punto 1 y crear otra función para el punto 2,
donde agarre por variable lo que devuelve la función del punto 1.

La idea es reutilizar la función

Dificultad: Debería ser fácil
3) De la lista productos obtener una lista de los nombres de todos los productos (ver que mensaje se le puede aplicar a la lista, hay que transformar la lista)
OBJETO.MENSAJE(ARGUMENTOS)

SI PONÍA LOS DATOS ACÁ IBA A QUEDAR MUY LARGO EL ARCHIVO, TE DEJO LAS LISTAS EN OTRO ARCHIVO (datosDePrueba.js)
Si das control + click te lleva directamente a la lista

4) Obtener los negocios que se encuentran en Lanus

MAS DIFICIL: jeje a ver como haces estos
5) Obtener los negocios que tienen al menos 1 producto comestible 
6) Obtener al "carero" el cual es el negocio que tiene todos sus productos con precio mayor a 200
7) Obtener los productos de cada negocio que sean de precio mayor a 90


Fijate que hay mucha lógica que se repite, intentá hacer funciones que resuelvan estas cosas aplicando la lógica una única vez.
Cualquier cosa me escribis
*/

//Si queres probar tu código acordate que tenes que tener instalado Node, y corres el archivo con "node clase10-11.js"








const productos = [
    {
        name: "manzana",
        precio: 50,
        comestible: true,
    },
    {
        name: "pera",
        precio: 100,
        comestible: true,
    },
    {
        name: "escoba",
        precio: 75,
        comestible: false,
    },
    {
        name: "detergente",
        precio: 120,
        comestible: false,
    }
]

const negociosConProductos = [
    {
        nombre: "Almacén Don Carlos",
        ubicacion: "Isidro Casanova",
        productos: [
            {
                name: "manzana",
                precio: 50,
                comestible: true,
            },
            {
                name: "pera",
                precio: 100,
                comestible: true,
            },
            {
                name: "escoba",
                precio: 75,
                comestible: false,
            },
            {
                name: "detergente",
                precio: 120,
                comestible: false,
            }
        ]
    },
    {
        nombre: "Carnicería de Joaquin",
        ubicacion: "Castelar",
        productos: [
            {
                name: "Higado",
                precio: 350,
                comestible: true,
            },
            {
                name: "Colita de cuadril",
                precio: 600,
                comestible: true,
            },
            {
                name: "Vacío",
                precio: 575,
                comestible: true,
            },
            {
                name: "Chorizo",
                precio: 320,
                comestible: true,
            }
        ]
    },
    {
        nombre: "Gym de Juli",
        ubicacion: "Lanus",
        productos: [
            {
                name: "Proteina",
                precio: 550,
                comestible: true, // Hagamos de cuenta que es comestible
            },
            {
                name: "Cinta para correr",
                precio: 2600,
                comestible: false,
            },
            {
                name: "Bicicleta",
                precio: 1500,
                comestible: false,
            },
            {
                name: "Pesas 20 k",
                precio: 100,
                comestible: false,
            }
        ]
    }
]

//1) Dada la lista con objetos de productos quedarse con los productos con precio mayor a 90

function ProductosMayoresA90 (){
    return productos.filter(obj => obj.precio >= 90)
}
console.log(ProductosMayoresA90())

//Dificultad: Si lo haces combinado al punto 1 debería ser Medio/dificil. Si no sale dejalo y lo vemos después
//2) Usando la función del punto 1. Quedarse con los productos con precio mayor a 90 y que además sean comestibles
//IMPORTANTE: intentar hacer una función que resuelva lo del punto 1 y crear otra función para el punto 2,
//donde agarre por variable lo que devuelve la función del punto 1.


function ProductosMayores90YComestibles (){
    return productos.filter(obj => obj.precio >= 90 && obj.comestible)
}

console.log(ProductosMayores90YComestibles())

//3) De la lista productos obtener una lista de los nombres de todos los productos (ver que mensaje se le puede aplicar a la lista, hay que transformar la lista)
//oBJETO.MENSAJE(ARGUMENTOS)

function ListaDeTodosLosProductos (){
     return (productos.filter(obj => obj.name.match))

}

console.log (ListaDeTodosLosProductos(name))




