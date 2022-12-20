//! selector de etiqueta -> p, div, h1
// selector por clase -> .nombreClase
// selector por id -> #nombreId

// querySelector -> selecciona el primer elemento que coincida con el parametro aportado.
// querySelectorAll -> selecciona todos los elementos que coincidan con el paramentro aportado.


//Iteración #1: Interacción con el DOM SI


// 1.1 Usa querySelector para mostrar por consola el botón 
// con la clase .showme

const buttonShowMe$$ = document.querySelector(".showme");

console.log(buttonShoyMe$$);

// 1.2 Usa querySelector para mostrar por consola el h1 con el 
// id #pillado

const pillado$$ = document.querySelector("#pillado");

console.log(pillado$$);

// 1.3 Usa querySelector para mostrar por consola todos los p

const ps$$ = document.querySelectorAll ("p");

console.log (ps$$);

// 1.4 Usa querySelector para mostrar por consola todos los 
// elementos con la clase.pokemon

const pokemons$$ = document.querySelectorAll (".pokemon");

console.log(pokemons$$);

// 1.5 Usa querySelector para mostrar por consola todos los 
// elementos con el atributo data-function="testMe"

const dataFunctions$$ = document.querySelectorAll("[data-function='testMe']")

console.log(dataFunctions$$);


// 1.6 Usa querySelector para mostrar por consola el 3 personaje 
// con el atributo data-function="testMe"

const arrayPersonajes$$ = document.querySelectorAll("[data-function='testMe']")

console.log(arrayPersonajes$$[2]);