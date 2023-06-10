

//ejercicio 3 Leer 10 precios de productos y calcular cuánto cuestan los 10 productos

function preciose3(){
let costo = 0
for (let i=0; i<10 ; i++){
let precio = parseFloat(prompt("ingresar precio"))
costo += precio
    
console.log(precio)
}
document.write("la suma es:"+ costo + "<br>")
}

/*Ejercicio 4 Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.*/
aprob = 0;
reprob = 0;
function alumnos(){
for(i = 1; i <=12; i++){
let notas = parseInt(prompt("Ingresa tu nota:"));
if(notas >= 0 && notas <= 5){
reprob++;
console.log("Materia reprobada : "+reprob);
}else {
aprob++;
console.log("Materia aprobada : "+ prob);
}
}
document.write("Materia Reprobada : "+reprob +"<br>");
document.write("Materia Aprobada : "+aprob);
}
alumnos();

/*Ejercicio 5 Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir
la cantidad.*/
      
function ejerciociosMD3(){
    let mult3 = 0
    for ( let i = 1; i <= 50; i++){
        if (i % 3 === 0){
            mult3++
        document.write ( "Es multiplo de 3:"+ i + "<br>")}
        
    }

    document.write ( "la cantidad de multiplos de 3 encontrados es;"+ mult3 + "<br>")
}
ejerciociosMD3();

/*ejercicio 6 Leer n cantidad de notas de un estudiante e imprimir por pantalla.*/
function calificaciones() {
    let finalizar = false;
    const arregloss = [];

    for (let i = 0; !finalizar; i++) {
      const valor = prompt("Ingrese un valor o clic en 'Cancelar' para finalizar):");
    

      if (valor === null) {
        finalizar = true}
        else {arregloss.push (valor)}    
    }
    document.write("Notas ingresadas:"+ arregloss+"<br>");
    for( let i = 0; i < arregloss.length;i++){
        if (arregloss[i] !== null){  
    document.write ("<br>"); }
}}
   
     
calificaciones();  


/*Ejercicio8 Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo,
imprimir los sueldos y el sueldo más bajo.*/
function sueldomin(){
    function sueldomin() {
        let finalizar = false;
        const arregloss = [];
        const sueld = [];
      
        for (let i = 0; !finalizar; i++) {
          const valor = prompt("Ingrese sueldos o 'Cancelar' para finalizar:");
      
          if (valor === null) {
            finalizar = true;
          } else {
            arregloss.push(valor);
          }
        }
      
        document.write("Sueldos: " + arregloss + "<br>");
      
        
        let sueldoMinimo = parseFloat(arregloss[0]);
        for (let i = 1; i < arregloss.length; i++) {
          const sueldoActual = parseFloat(arregloss[i]);
          if (!isNaN(sueldoActual) && sueldoActual < sueldoMinimo) {
            sueldoMinimo = sueldoActual;
          }
        }
      
        document.write("El sueldo mínimo ingresado es: " + sueldoMinimo + "<br>");
      }
      
      sueldomin();
      
}
sueldomin()

/*ejercicio9 Realizar un programa que pida la base, el exponente y se ejecute el cálculo
sin uso de bibliotecas.*/

function exponente(){
    let dat1 = parseInt (prompt('tu base'));
    let dat2= parseInt (prompt(' tu exponente'));
    let result = dat1**dat2;
    alert("La potencia es :"+ result)
 
}
exponente();

/*ejercicio 10 Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0 alternado e
imprimir por consola.*/
function llenarArreglo() {
    arregloos=[];     
    for(i = 0; i <= 4; i++){
     let numing = parseInt (prompt('Ingrese numero 1 y 0: '));
     if(numing >= 0 && numing <= 1){
     console.log("El numero es : "+ numing);
     arregloos.push(numing);
     }else{
        alert("El numero es diferente de 1 y 0");
     }
    }
    
    document.write("El arrreglo es : " +arregloos + "<br>");

    
   
 }
  llenarArreglo();
   
  /*ejercicio 11 Llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido
del arreglo deben ser los números pares partiendo de 2.*/
  function pares(){
    
let prueba;
do {
  prueba= parseInt(prompt("coloca un numero impar:"));
} while (prueba % 2 === 0);
var arreglo = [];

for (var i = 2; i <= prueba; i += 2) {
  arreglo.push(i);
}


document.write("tu impresion "+ arreglo + "<br>");


}  
pares(); 



 
   










    
 


    
 
 

     

