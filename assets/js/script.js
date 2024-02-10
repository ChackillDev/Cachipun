
document.write(`<h1>Ejercicios Guiados JS</h1>`)

//EJERCICIO 1

document.write(`<h3> Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma,
Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
ingresados por el usuario.</h3>
`)
document.write(`<img src="./assets/img/Operaciones.drawio.png" alt="Op matematicas">`)

//EJERCICIO 2
// Se solicitan los numeros para realizar los calculos 
document.write(`<h3>Realizar operaciones con dos números. Pedir al usuario que ingrese dos números
diferentes y mayores a cero. Para ambos números, calcular lo siguiente:
 Suma
 Resta
 División
 Multiplicación
 Módulo
</h3>`)

let number1 = parseFloat(prompt('Ingrese el 1er Numero mayor a 0'));
let number2 = parseFloat(prompt('Ingrese el 2do Numero mayor a 0'));

//resultados
let suma = (number1*1) + (number2*1);
let resta = (number1*1) - (number2*1);
let multiplicacion = (number1*1) * (number2*1);
let division = (number1*1) / (number2*1);
let resto = (number1*1) % (number2*1);


document.write(`<p>El resultado es : suma ${suma}</p>`)
document.write(`<p>El resultado es : resta ${resta}</p>`)
document.write(`<p>El resultado es : multiplicacion ${multiplicacion}</p>`)
document.write(`<p>El resultado es : division ${division}</p>`)
document.write(`<p>El resultado es : resto ${resto}</p>`)

//Ejercicio 3

document.write(`<h3>Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
la transforme a grados Kelvin y Fahrenheit.</h3>`)

let number3 = prompt('Ingrese temperatura Cº:');

let kelvin = (number3*1) + 273.15;
let fahrenheit =((number3*1)* 9/5) + 32;
document.write(`<p>El resultado es : kelvin ${kelvin}</p>`)
document.write(`<p>El resultado es : fahrenheit ${fahrenheit}</p>`)

//Ejercicio 4

document.write(`<h3>Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos) </h3>`)

let number4 = prompt('Ingrese cantidad de dias:');

let anios = Math.floor((number4*1) / 365);
let semanas =(Math.floor((number4*1) % 365))/7;
let dias = semanas % 7;

document.write(`<p>El resultado es : años ${anios}</p>`)
document.write(`<p>El resultado es : semanas ${semanas}</p>`)
document.write(`<p>El resultado es : dias ${dias}</p>`)

//Ejercicio 5

document.write(`<h3>Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación
● La suma de todos los números.
● El promedio de los 5 números ingresados.
</h3>
<p> Ejercicio Largo y fome</p>
`)
