/*ejercicio 1 Realizar un programa que permita generar 100 números e imprimir solo los
números pares.

for( let i=0; i<=100; i++){
 if( i % 2 === 0)
  console.log ( "EJ 1.- tus numeros pares son:"+i)        
}

//ejercicio 2 Realizar un programa que permita sumar los 150 primeros números.
let suma = 0
for( let i = 0; i <=150; i++) {

suma += i
}

console.log( " EJ.-tu resultado es:" + suma)
    

//ejercicio 7

    let tamaño = parseFloat(prompt("ingresar un numero impar"))
    const arreglo = []
    while (tamaño % 2 === 0){
        tamaño =parseFloat(prompt("no es impar"))
    }
    for ( let i = 1; i<=tamaño; i++ ) {
        if(i % 2 === 0 )
       arreglo.push (2*i) 
    }
    console.log(arreglo)*/

    //Ejercicio 12 Función para calcular los números de Fibonacci
    function fibonacci(num){
        const fibon =[0, 1]
    
        for(let i = 2; i <= num; i++){
            fibon[i] = fibon[i - 1] + fibon[i - 2]
            
        }
        console.log("Tu secuencia fibonacci : "+ fibon[num]);
    }
    fibonacci(100);

    /* ejercicio13 Llenar un arreglo con los primeros 100 números pares y muestre la suma de
los elementos del arreglo.*/

pares=[];
sumaPares = 0;
function numerospares(){
    for ( i = 2; i <= 200; i += 2){
        pares.push(i);
        sumaPares += i;
    }
    alert("El arreglo es : " + pares)  
    alert("La suma del arreglo es : " + sumaPares)  
    console.log("El arreglo es : " + pares)  
    console.log("La suma del arreglo es : " + sumaPares)  
}
numerospares();

/*Ejercicio 14 Llenar un arreglo de tamaño n que se llene con números ingresados por el
usuario y determine cantidad de positivos y negativos.*/
contPositivo = 0;
contNegativo = 0;
arreglo=[];
function positivonegativo(){
for(i = 0; i <= 5; i++){
    let numero = parseInt (prompt('Ingrese Numero: '));
    arreglo.push(numero);
    if(numero >= 0){
        contPositivo++;
    }else{
        contNegativo++;    
    } 
}
alert("los numeros positivos son : "+ contPositivo);
alert("los numeros negativos son : "+ contNegativo);
console.log("los numeros positivos son : "+ contPositivo);
console.log("los numeros negativos son : "+ contNegativo);
}
positivonegativo();



