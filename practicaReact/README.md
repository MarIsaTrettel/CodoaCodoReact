DOM significa Document Object Model, en español sería Modelo de Objetos del Documento.
Es una interfaz de programación que nos permite crear, cambiar, o remover elementos del documento. 
También podemos agregar eventos a esos elementos para hacer más dinámica nuestra página.

El DOM visualiza el documento de HTML como un árbol de tres nodos. Un nodo representa un documento de HTML.

---

Si deseamos leer solamente el contenido de un párrafo, entonces podemos usar la propiedad  textContent  dentro del console.log().

const paragraph1 = document.getElementById("para1");
console.log(paragraph1.textContent);

---
Diferentes  métodos para seleccionar un elemento en el documento de HTML.

1. getElementById()

        <p id="para1">Este es mi primer parágrafo.</p>
        <p id="para2">Este es mi segundo parágrafo.</p>
        document.getElementById("nombre de id va aquí")

Este código le dice a la computadora que obtenga el elemento  <p>  que tiene el  id  de para1 y que imprima el elemento en la consola.

