/* 
Cuando quiero PEDIR INFORMACIÓN el método se llama GET 
Cuando quiero ENVIAR información se envía con POST. Va a "viajar" mi pedido por POST 
Cuando quiero ACTUALIZAR algo que ya está en la base de datos PUT
Cuando quiero ELIMINAR lo hago por DELETE

MIDDELWARES: Bloques de seguridad.
Cuando me quiero loggear y no estoy registrado, estoy haciendo - como cliente-
 un pedido. No hace falta que llegue al servido y se fije si estoy en la base de dato. 
Puedo tener un bloque en el medio que compare si dicha persona está registrado

REQUEST - MIDDELWARES - REPORT

API . Interfaz de programacion de aplicaciones.
Pieza de código que permite a diferentes aplicaciones comunicarse entre si y compartir 
información. Es como un intérprete.
Es lo que permite que "hablemos" el mismo idioma entre el cliente y el servidor. El 
middelware es como la "carta" que le muestra al mozo el contenido de lo que hay o no hay.
API: Forma de compartir información. Intermediario entre dos sistemas.

CORS: Permite autorizar la intercomunicación. Información cruzada.

*/
/* 
FUNCION ASINCRONA
Cuando se hace una función que pide algo a una API, esa información puede fallar
entonces se debe preveer ese fallo. Instrucciones que se ejecutan
mediante un mecanismo específico: Una promesa, un evento, lo que hace posible que 
sea procesado en otro momento. Podemos cargar que no sea bloqueante del programa madre
Que se puedan seguir haciendo pedidos hasta que llegue la respuesta.
Si la respuesta es que no se puede acceder a la información, que lo estoy pidiendo mal o
o que se cayo el servidor, podemos hacer que el bloque de código siga.

FUNCION SINCRONA
Funciones que se ejecutan en el mismo bloque de código. 
*/



/*  ***API*** 
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/users

JSON: JAVASCRIPT OBJECT NOTATION
Es el formato de cambio de datos. Es como el lenguaje en el que nos vamos a comunicar.
Conjunto de notación literal de JAvascript.
 */

/* 
BASE DE DATOS RELACIONAL
*/

// FUNCION QUE ENVÍO UN NRO DE POST Y ME VA A DECIR QUIÉN LO ESCRIBIÓ

const getNameFetch = (idPost) => {
   fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}` ) //FETCH : Permite hacer llamadas asincronas en JS.
   //traer información de esta API

   //Tengo que guardarlo en una variable y separar el JSON

   .then((respuesta)=>{ /* ESTO ES UN CALLBACK */
      return respuesta.json() // Lo convierto en JSON
   })
//Lo convertido lo tengo que guardar en una variable
   .then((posteo)=>{ 
      fetch(`https://jsonplaceholder.typicode.com/users/${posteo.userId}`)
      .then((respuesta)=>{ /* ESTO ES UN CALLBACK */
         return respuesta.json() // Lo convierto en JSON
         })
         .then((user)=>{
            console.log(user); 
            console.log(`${user.name}`)
            console.log(`vive en la calle ${user.address.street}`)
            console.log(`${user.address.geo.lat}`)
         })
   })


}

getNameFetch(48) //id POST

