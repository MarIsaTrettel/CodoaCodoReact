let vegetales = ['repollo', 'coliflor', 'zapallo', 'zanahoria'];
console.log(vegetales);

let copia1 = vegetales.slice()
console.log(copia1)

let pos = 1, numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos)
console.log(elementosEliminados)
console.log(vegetales)

let copia2 = vegetales.slice()
console.log(copia2)