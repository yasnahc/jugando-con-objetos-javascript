// Jugando con Objetos / Objetivos
// Practica iterar por medio de un array de objetos/diccionarios.
// Imagina que se te entrega un array de objetos. Por ejemplo,

var users = [{name: "Michael", age:37}, {name: "John", age:15}, {name: "David", age:27}];

// ¿Cómo harías print/log de la edad de John?
console.log(users[1].age)
// ¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0].name)

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

function nombre_edad(array){
    array.forEach(element => {
        console.log(element.name + " - " + element.age)
    });
}
nombre_edad(users)

// ¿Cómo harías para imprimir el nombre de los mayores de edad?
// Michael - 37
// John - 30
// David - 27

function mayor_edad(array){
    array.forEach(element => {
        if(element.age >= 18){
            console.log(element.name + " - " + element.age)
        }
    });
}
mayor_edad(users)
