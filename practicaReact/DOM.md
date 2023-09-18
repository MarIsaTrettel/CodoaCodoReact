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

2. querySelector()

Puedes usar este método para encontrar elementos con uno o más selectores de CSS.

        <h1>Favorite TV shows</h1>
        <ul class="list">
            <li>Golden Girls</li>
            <li>Archer</li>
            <li>Rick and Morty</li>
            <li>The Crown</li>
        </ul>

Si quisiera apuntar a  class="list"  para imprimir la lista no ordenada en la consola, entonces usaría  .list dentro del  querySelector().

        const list = document.querySelector(".list");
        console.log(list);

3. querySelectorAll()

Este método encuentra todos los elementos que coinciden con el selector de CSS y devuelve una lista de todos esos nodos.

Si quisiera encontrar todos los elementos  <li> en nuestro ejemplo, podría utilizar el combinador de hijos > para encontrar a todos los elementos hijos de <ul>.

        const listItems = document.querySelectorAll("ul > li");
        console.log(listItems); 

Si quisiéramos imprimir los elementos reales  <li> con los shows de tv, podemos usar el ciclo  forEach() para iterar sobre la NodeList e imprimir cada uno de los elementos.

const listaDeElementos = document.querySelectorAll("ul > li");

        listaDeElementos.forEach((item) => {
        console.log(item);
        });

---
Podemos utilizar  document.createElement()  para agregar nuevos elementos al árbol del DOM.

        let listSinOrden = document.createElement("ul");
        document.body.appendChild(listaSinOrden);

        let elemento1Lista = document.createElement("li");
        elemento1Lista.textContent = "It's Free";
        listaSinOrden.appendChild(elemento1Lista);

        let elemento2Lista = document.createElement("li");
        elemento2Lista.textContent = "It's Awesome";
        listaSinOrden.appendChild(elemento2Lista);

1. Primero podemos crear un elemento  <ul> usando document.createElement(). Asignaremos eso a una variable llamada listaSinOrden.
2. Después necesitaremos agregar ese elemento <ul> al documento usando el método appendChild() .
3. El siguiente paso es agregar un par de elementos  <li> dentro del elemento<ul> usando el método createElement() .
4. Después podemos usar la propiedad textContent para agregar texto para nuestros 4 elementos de la lista.
5. El último paso es usar el método appendChild() para que los elementos de la lista sean agregados a la lista sin orden.

---
addEventListener()
Este método te permite agregar un evento a un elemento de HTML como un botón.

        <button id="btn">Mostrar Alerta</button>
        const button = document.getElementById("btn");  // apuntar a ese elemento en nuestro  JavaScript
        button.addEventListener("click", () => {
        alert("Gracias por dar Click");
        });
1. En nuestro HTML, tenemos un elemento botón con el id de btn.
2. Podemos apuntar a ese elemento en nuestro  JavaScript usando el método getElementById() y asignando eso a una variable llamada button.
3. El addEventListener() toma un tipo de evento y una función.  El tipo de evento será un evento click  y la función activará el mensaje de alerta.