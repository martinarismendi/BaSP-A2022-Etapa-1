//Arrays
/* A) Dado el siguiente array:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
     "Octubre","Noviembre","Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

months = ["January","February","March","April","May","June","July","Augost","September","October","November","December"];
var monthFiveAndTen = months[4] + " " + months[10];
console.log(monthFiveAndTen);


/* B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).  */

let monthsPartB = ["January","February","March","April","May","June","July","Augost","September",
                  "October","November","December"];
let monthsSort = monthsPartB.sort();
console.log(monthsSort);

/* C) Agregar un elemento al principio y al final del array (utilizar unshift y push). */

let monthsPartC = ["January","February","March","April","May","June","July","Augost","September",
                  "October","November","December"];
monthsPartC.push("PostDecember");
monthsPartC.unshift("PreJanuary");
console.log(monthsPartC);


/* D) Quitar un elemento del principio y del final del array (utilizar shift y pop). */

let monthsPartD = ["January","February","March","April","May","June","July","Augost","September",
                  "October","November","December"];
monthsPartD.pop("PostDecember");
monthsPartD.shift("PreJanuary");
console.log(monthsPartD);


/* E) Invertir el orden del array (utilizar reverse). */

let monthsPartE = ["January","February","March","April","May","June","July","Augost","September",
                  "October","November","December"];
monthsReverse = monthsPartE.reverse();
console.log(monthsReverse);

/* F) Unir todos los elementos del array en un único string donde cada mes este separado
     por un guión - (utilizar join) */

let monthsPartF = ["January","February","March","April","May","June","July","Augost","September",
                  "October","November","December"];
var monthsjoin = monthsPartF.join("-");
console.log(monthsjoin);


/* G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

let monthsPartG = ["January","February","March","April","May","June","July","Augost","September",
                  "October","November","December"];
var monthsSlice = monthsPartG.slice(4,11);
console.log(monthsSlice);



