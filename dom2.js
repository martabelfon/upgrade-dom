//Iteración #2: Modificando el DOM SI

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

// -> Crear el div 
// -> insertarlo en el HTML

const div$$ = document.createElement("div");

document.body.appendChild(div$$);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2$$ =document.createElement("div");

const p$$ = document.createElement("p");

div2$$.appendChild(p$$);

document.body.appendChild(div2$$);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ =document.createElement("div");

for (let i = 0; i < 6; i++) {

    const p2$$ = document.createElement("p");

    div3$$.appendChild(p2$$);
    
}

document.body.appendChild(div3$$);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p3$$ = document.createElement("p");
p3$$.textContent ="Soy dinámico!"

document.body.appendChild(p3$$)


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector("h2.fn-insert-here");

h2$$.innerText = "Wubba Lubba dub dub"

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const ul$$ = document.createElement("ul");

for (const app of apps) {

    const li$$ = document.createElement("li");
    li$$.append(app);
    ul$$.appendChild(li$$);
    
}

document.body.appendChild(ul$$);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const nodosRemove$$ = document.querySelectorAll(".fn-remove-me");

for (const nodoToRemove$$ of nodosRemove$$){
    nodoToRemove$$.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const p4$$ = document.createElement("p");

p4$$.textContent ="Voy en medio!";

const divs$$ = document.querySelectorAll("div");

document.body.insertBefore(p4$$, divs$$[1]);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInsert$$ = document.querySelectorAll(".fn-insert-here");

for (const div$$ of divsInsert$$) {
    

const p5$$ = document.createElement("p");

p5$$.textContent = "Voy dentro!";

div$$.appendChild(p5$$);

    
}