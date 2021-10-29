const pilotos = ['Vettal', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array; massa quebrou o carro! pop serve para remover o último elemento de um array!
console.log(pilotos)

pilotos.push('Verstappen') // push serve para incluir um elemento no array!
console.log(pilotos)

pilotos.shift() // shift serve para remover o primeiro elemento de um array!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar ou remover elementos dentro de um array!

// adicionar elemento
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elemento
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)