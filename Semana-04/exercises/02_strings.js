//String

// A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
// (utilizar toUpperCase).

var str ="Hello world, how are you?,How do you feel?";
var strUpCs =str.toUpperCase();
console.log(strUpCs);

/*B) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
     caracteres guardando el resultado en una nueva variable (utilizar substring). */

var str1 = "Hello world, how are you?,How do you feel?";
var str2 = str1.substring(0,5);
console.log(str2);

/* C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
      caracteres guardando el resultado en una nueva variable (utilizar substring). */

var strLastChar = "Hello world, how are you?,How do you feel?";
var strLastCharSub = strLastChar.substring(strLastChar.length-3);
console.log(strLastCharSub);

/* D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
      en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
      toLowerCase y el operador +). */

var strFirstChar = "javaSrcipt is an interpreted programming language";
var strFirstCharSub = strFirstChar.substring(0,1).toLocaleUpperCase() + strFirstChar.substring(1,strFirstChar.length);
console.log(strFirstCharSub);


/*E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
     primer espacio en blanco y guardarla en una variable (utilizar indexOf)*/

var strIndx = "javaSrcipt is an interpreted programming language";
var strSpaceIndx = strIndx.indexOf(" ");
console.log(strSpaceIndx);



/*F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
     Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
     palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var FirstAndLast1 = "javaScript was designed with syntax similar to C++ and java";
var FirstAndLast2 = "java and javascript have different semantics and purposes";
var FirstAndLast3 = FirstAndLast1.substring(0,1).toUpperCase() + FirstAndLast1.substring(1) +" "+ FirstAndLast2.substring(0,1).toUpperCase() + FirstAndLast2.substring(1);
console.log(FirstAndLast3); 









