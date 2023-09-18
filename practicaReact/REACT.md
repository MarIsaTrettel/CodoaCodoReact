1. Performance de react

IU = Interfaz de usario

¿Qué es el DOM virtual?

El DOM virtual (VDOM) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en 
memoria y en sincronía con el DOM “real”, mediante una biblioteca como ReactDOM. 
Este proceso se conoce como reconciliación.

Este enfoque hace posible la API declarativa de React: le dices a React en qué estado quieres que esté la interfaz de usuario,
y se hará cargo de llevar el DOM a ese estado. Esto abstrae la manipulación de atributos, manejo de eventos y actualización 
manual del DOM que de otra manera tendrías que usar para construir tu aplicación.

El “DOM virtual” es más un patrón que una tecnología. En el mundo de React, el término “DOM virtual” es normalmente asociado con 
elementos de React ya que son objetos representando la interfaz de usuario. Sin embargo, React también usa objetos internos llamados 
“fibers” para mantener información adicional acerca del árbol de componentes. Éstos pueden ser también considerados como parte de 
la implementación de “DOM virtual” de React.

¿Qué es React Fiber?

"React Fiber es una reimplementación del algoritmo central ", es una nueva tarea de reconciliación.

¿Por qué se llama "fibra"?

- El proceso es la unidad más pequeña de asignación de recursos del sistema operativo.
- El subproceso es la unidad más pequeña de programación del sistema operativo. 
- Fibra es un subproceso que es más delgado que Thread, es un mecanismo de procesamiento concurrente que es más sofisticado que Thread. 
  La fibra y la fibra React mencionadas anteriormente no son el mismo concepto, pero el equipo de React llamó a esta función Fiber, lo 
  que significa un mecanismo de procesamiento más cercano, que es más detallado que Thread.

Reconciliation
Nombre oficial del algoritmo central de React. Sinónimo de coordinación. Está relacionado con la implementación del algoritmo React diff.

React Diff
React fue pionero en el concepto de "DOM virtual". La razón principal para que el "DOM virtual" se vuelva popular es que el concepto 
es una innovación revolucionaria en la optimización del rendimiento de front-end; Los problemas de rendimiento de las páginas web ocurren 
principalmente en operaciones frecuentes de nodos DOM;
React garantiza el rendimiento del front-end a través del algoritmo "DOM virtual" + React Diff;

Diff
Es una utilidad para la comparación de archivos que genera las diferencias entre dos archivos o los cambios realizados en un archivo determinado 
comparándolo con una versión anterior del mismo

Algoritmo Diff tradicional
Al comparar los nodos a su vez a través de ciclos recursivos, la complejidad del algoritmo llega a O (n ^ 3), donde n es el número de nodos 
en el árbol ¿Qué tan terrible es esto? ——Si desea mostrar 1000 nodos, debe realizar cientos de millones de comparaciones. . Incluso si la CPU 
puede ejecutar rápidamente 3 mil millones de comandos,Es difícil en un segundo alcule la diferencia.

Algoritmo de React Diff

Convierta el árbol DOM virtual en el árbol DOM realProceso de operación mínimo Se llama Reconciliación.

Resumen de Virtual DOM:

Es un patrón de comportamiento y React lo implementa con una tecnología llamada “Fiber”.
En sí resulta ser todo lo que React sabe de tu aplicación y cada nodo o fibra.
Esto es básicamente lo que React hace con el Virtual DOM: una representación virtual de la IU que se mantiene en memoria y en sincronía “reconciliado” con el DOM “real”.







2. NPM
3. Dependencias
4. CLI
5. Instalación react