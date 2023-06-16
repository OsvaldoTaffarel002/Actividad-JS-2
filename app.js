//Ejercicio 1:
var numero1 = 7

function numeroParOImpar(numero1){
    if (numero1 === 0){
        return "El numero es 0";
    }
    if (numero1 % 2 === 0){
        return "El numero es Par";
    }
    else {
        return "El numero es Impar";
    }
}

var resultado1 = numeroParOImpar(numero1)
console.log(resultado1)

//Ejercicio 2:
var numero2 = 2

function numeroPositivoONegativo(numero2){
    if (numero2 === 0){
        return "El numero es 0"
    }
    if (numero2 < 0){
        return "El numero es Negativo";
    }
    else (numero2 > 0);{
        return "El numero es Positivo";
    }
}

var resultado2 = numeroPositivoONegativo(numero2)
console.log(resultado2)

//Ejercicio 3:
var palabraAMedir = "Palabra"

function contadorDeCaracteres(palabraAMedir){
    var totalCaracteres = 0;
    for (var i = 0; i < palabraAMedir.length; i++){
        totalCaracteres += palabraAMedir[i].length;
    }
    return totalCaracteres;
}
var totalLetras = contadorDeCaracteres(palabraAMedir)

function palabraCortaOLarga(totalLetras){
    if (totalLetras < 10) {
        return "La palabra es Corta"
    } else {
        return "La palabra es Larga"
    }
}
var resultadoPalabra = palabraCortaOLarga(totalLetras)

console.log(resultadoPalabra)

//ARRAYS:
//Ejercicio 1:
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < arrayNumeros.length; i++){
    console.log(arrayNumeros[i]);
}

//Ejercicio 2:
var arrayNombreAmigos = ['JoaquinR', 'JoaquinB', 'Valentina']
var lista = document.getElementById('listaAmigos')

for (var i = 0; i < arrayNombreAmigos.length; i++){
    var amigoActual = arrayNombreAmigos[i]

    var nuevoElementoLista = document.createElement('li');

nuevoElementoLista.textContent = amigoActual

lista.appendChild(nuevoElementoLista)
}

//Ejercicio 3:
                 //RIZO, BREGLIA, VALEN, MAMA, PAPA
let arrayEdadesPromediar = [21, 21, 20, 55, 60]
let sumaEdades = 0

for (let i = 0; i < arrayEdadesPromediar.length; i++) {
    sumaEdades += arrayEdadesPromediar[i];
}

let edadPromedio = sumaEdades / arrayEdadesPromediar.length;

console.log(edadPromedio)

//Bucle for con arrays:
//Ejercicio 1:
var coloresFav = ["amarillo", "azul", "celeste", "blanco", "verde"];

for (var i = 0; i < coloresFav.length; i++) {
  console.log(coloresFav[i]);
}

//Ejercicio 2:
var frutasFav = ["naranja", "manzana", "pomelo", "melon", "mandarina"];

var listaDeFrutas = document.getElementById("lista-frutas");

for (var i = 0; i < frutasFav.length; i++) {
  var fruta = frutasFav[i];
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(fruta));
  listaDeFrutas.appendChild(li);
}

//Ejercicio 3:
var arrayPredeterminado = [1, 4, 6, 7, 20, 18];
var longitudDelArray = arrayPredeterminado.length;

for (var i = 0; i < longitudDelArray - 1; i++) {
  for (var j = 0; j < longitudDelArray - i - 1; j++) {
    if (arrayPredeterminado[j] > arrayPredeterminado[j + 1]) {
      var ayuda = arrayPredeterminado[j];
      arrayPredeterminado[j] = arrayPredeterminado[j + 1];
      arrayPredeterminado[j + 1] = ayuda;
    }
  }
}

console.log(arrayPredeterminado);

//Funciones:
//Ejercicio 1:
function sumarNumerosPares(n) {
    var suma = 0;
  
    for (var i = 2; i <= n; i += 2) {
    suma += i;
    }
  
    return suma;
}
  
var numero = 12;
var resultado = sumarNumerosPares(numero);
console.log("La suma hasta", numero, "da como resultado:", resultado);

//Ejercicio 2:
function calcularLosImp(monto) {
    if (monto >= 1000) {
      return monto * 0.2;
    } else {
      return monto * 0.1;
    }
}
  
var monto = 2500;
var impuestos = calcularLosImp(monto);
console.log("El total de impuestos es:", impuestos);

//Ejercicio 3:
function contadorDeVocales(texto) {
    var contador = 0;
  
    for (var i = 0; i < texto.length; i++) {
      var caracter = texto[i];
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') { //------ PARA INCLUIR MAYUSCULAS DEBERIA LLEVAR ESTA LINEA DE CODIGO DE A CONTINUACION... || caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U')
        contador++;
      }
    }
  
    return contador;
}
 
var texto = 'Osvaldo';
var cantidadVocales = contadorDeVocales(texto);
console.log("La cantidad de vocales es:", cantidadVocales);

//Ejercicio 4: 
function generarContraseña(n) {
    var almacenDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var almacenDeContraseña = '';
  
    for (var i = 0; i < n; i++) {
      var indice = Math.floor(Math.random() * almacenDeCaracteres.length);
      almacenDeContraseña += almacenDeCaracteres.charAt(indice);
    }
  
    return almacenDeContraseña;
  }

var longitud = 8;
var contraseñaGenerada = generarContraseña(longitud);
console.log("Contraseña generada:", contraseñaGenerada);
  