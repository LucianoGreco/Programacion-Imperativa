
> PROGRAMACION IMPERATIVA - Certified Tech Developer - Digital House - luciano Greco

**EJERCICIO N° 4**
=================

## ¿Qué devuelve cada función?
En este ejercicio, se te pedirá analizar el código de diferentes funciones y determinar qué valor devolverá cada una, sin ejecutarlas directamente en la consola.

# Micro Desafío 1

```javascript
function test1(x,y) {
    return y - x
}
test1(10,40);
```
> [!IMPORTANT]
>Pista: No importa el orden en que pasemos los Argumentos, sino el de los Parámetros en el return

# Micro Desafío 2

```javascript
function test2(x,y) {
    return x * 2;
    console.log(x);  // Este console.log nunca se ejecutará
    return x / 2;    // Esta línea nunca se alcanzará
}
test2(10);
```

> [!IMPORTANT]
> Pista: Cuando JS encuentra la palabra clave return, devuelve el valor de la expresión que tiene a su derecha y termina la ejecución del bloque.

## Funciones simples
En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores

    1. Crear una función que convierta pulgadas en centímetros.
        Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

    2. Crear una función que recibe un string y lo convierte en una URL.
        Ej: “pepito” es devuelto como “http://www.pepito.com”

    3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

    4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

    5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
        PD: considerá que tu mes de trabajo tiene 40 horas.

    6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

    Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha.

    Si llegamos hasta este punto estamos más que satisfechos. Ahora te dejamos unos ejercicios con una dificultad extra, tendrás que buscar algunos conceptos para poder resolverlos. Es una práctica que los programadores realizamos todos los días. Como siempre te decimos, una parte importante del aprendizaje en programación es
    ignorar la complejidad, e ir estrictamente a lo que necesitamos. Sabemos que no es una práctica fácil de realizar, pero con el tiempo va a ir haciéndose más sencilla y divertida.


    7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
        Investigá qué hace el método de strings .toUpperCase()

    8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
    Pista: te servirá revisar qué hace la palabra reservada typeof.

    9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
        Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.