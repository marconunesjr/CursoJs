console.log(soma(3, 4))

// function declaration (tradicional)
function soma(x ,y) {
    return x + y
}

// function expression (atribuir uma função anonima ha uma variavel ou constante)
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression (mescla das duas funções acima)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))