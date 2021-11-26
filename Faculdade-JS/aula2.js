// Laço For
let contador 
for (contador = 0; contador < 10; contador ++) {
    alert(contador);
}

// While
let contador = 0;
while (contador < 10) {
    alert(contador);
    contador++;
}

// Do/while
let contador = 0;
do{
    contador += 1;
    alert(contador);
} while(contador < 10);

// For/in
let frustas = ['Laranja', 'Uva', 'Pera'];
for(let i = 0; i < frustas.length; i++){
    alert('Nome da fruta contida no Array: ' + frustas[i]);
}
for(let fruta in frustas){
    alert('Nome da fruta contida no Array: ' + frustas[fruta]);
}