// 1-Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas
//litro a centilitros 
var litros = 50;
var centilitros = litros * 100;
console.log( " EJERCICIO 1: tus centilitros son", + centilitros);

// litros a decilitros

var dato1 = 20;
var decilitros = dato1 * 10;
console.log( "tus decilitros son", + decilitros)

//litros a galones

var dato2 = 400;
var galones= dato2 / 3.78541;
console.log( "tus galones son", + galones)

//litros a onzas

var dato3 = 2  ;
var onzas= dato3*33.8140;
console.log( "tus onzas son", + onzas)

//2 - Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada.

var numero1 = 100
var numero2 = 20
var suma = numero1 + numero2;
console.log( "EJERCICIO 2: Suma:", suma);
var resta = numero1 - numero2;
console.log("Resta", resta);
var multi = numero1 * numero2;
console.log("Multiplicacion", multi);
var division = numero1 / numero2;
console.log("Division",division)

//3-Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.
var cantidad = 25;
var temperaturacentigrados = (cantidad * 9 / 5) + 32;
console.log(" EJERCICIO 3: Fahrenheit", + temperaturacentigrados)
var Fahrenheit = 77;
var tempereturacelsius= (Fahrenheit - 32) * 5/9;
console.log ("Centigrados", + tempereturacelsius );

//4-Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina sisabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad gasolina despachada en litros
 var galongasolina = 70;
 var costocentilitro = 25;
 var conversiongc = 70 * 3.78541;
 console.log( "EJERCICIO 4: litros despachados:" + (conversiongc/100) +
 " , costo pagado $"
  + (costocentilitro * conversiongc) );

  // Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.
let salariobase = 500000;
let destopension = 0
let auxtransporte = 0
let subfamiliar = 0

if (salariobase < 699999){
      destopension = salariobase* 0.02;
      auxtransporte =  salariobase *0.06; 
      subfamiliar=0;
     
 }
else if ( salariobase >= 700000 && salariobase <= 999999)  {  
  destopension = salariobase * 0.04;
  subfamiliar = 12000;
  auxtransporte = 0;
}
else if ( salariobase >= 1000000) {
 destopension = salariobase * 0.06;

}

let salarioneto = (salariobase - destopension + auxtransporte + subfamiliar);

console.log( "EJERCICIO 5 :salario a cobrar:" + salarioneto);









