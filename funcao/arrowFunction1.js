let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implícito
console.log(dobro())
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())
ola = _ => 'Olá' // possui parametro
console.log(ola())