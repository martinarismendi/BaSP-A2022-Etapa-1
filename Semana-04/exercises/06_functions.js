//Funciones

/* A) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
      Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
      dicha variable en la consola del navegador.  */

var n1 = 10;
var n2 = 10;
FuntionPlus(n1,n2);    
function FuntionPlus(num1, num2){
    return num1 + num2;
}



/* B) A la función suma anterior, agregarle una validación para controlar si alguno de los
      parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de 
      los parámetros tiene error y retornar el valor NaN como resultado.*/

function FuntionPlus(num1, num2){
var result = NaN;
if(num1.IsInteger() && num2.IsInteger()){
    result= num1 + num2;
}else{
    alert("Wrong value");
}
return result;
}


/* C) Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva 
      verdadero si es un número entero. */
    
function IsNumber(v1,v2){
  var number = false;
  if(v1.IsInteger() && v2.IsInteger()){
      number= true
  }
  return number;
}

/* D) A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. 
      y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con 
      el error y retornar el número convertido a entero (redondeado).*/

      
function FuntionPlusD(num1, num2){
  var result = NaN;
  if(IsNumber(num1,num2)){
      result= num1 + num2;
  }else{
      alert("Wrong value");
  }
  return result;
  }
               
function IsNumber(v1,v2){
  var number = false;
  if(v1.IsInteger() && v2.IsInteger()){
    if(v1 % 2 == 0 || v2 % 2 == 0){
      number= true
    }
    else{
      alert("numbers are not integers");
    }
  }
  return number;
}

/* E) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de
      la función suma probando que todo siga funcionando igual.*/

function IsNumber(v1,v2){
  var number = false;
  if(IsDecimal){
    number= true
  }
  return number;
}

function IsDecimal(x,y){
  var number = true;
  if(x % 2 == 0 || y % 2 == 0){
    number= false
  }
  else{
    alert("numbers are not integers");
  }
  return number;
}