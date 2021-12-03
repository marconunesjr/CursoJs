<?php
// ESTRUTURAS DE REPETIÇÃO

/* As estruturas de repetição, muitas vezes também chamadas de laços, 
permitem que instruções ou trechos de códigos sejam executados de forma repetitiva. 
Sua sintaxe define as condições ou expressões que devem ser verificadas e, 
caso essas sejam verdadeiras, quais instruções devem ser executadas e por quantas vezes. 
A figura 6 apresenta o fluxo básico das estruturas de repetição. */

/* Em PHP estão disponíveis as seguintes estruturas: while, do-while, for, foreach. 
A seguir, cada uma delas será descrita. */

/* While
O laço while possui uma sintaxe simples:
    enquanto uma expressão for verdadeira,
    uma série de instruções será executada de forma repetida.
    Para imprimirmos na tela os números de 2 a 20, 
    pulando de 2 em 2, poderíamos utilizar o seguinte código: 
    */



$i = 2;
while ($i <= 20) {
    echo $i;
    $i+=2;
    echo "\n";
}
 
/*Sintaxe alternativa*/

$i = 2;
while ($i <= 20):
    echo $i;
    $i+=2;
    echo "\n";
endwhile;


/* Do-while
Esse laço é semelhante ao anterior, exceto pelo fato de que a verificação,
aqui, é feita ao final. Com isso, a primeira instrução dentro
do laço sempre será executada. Veja o exemplo:
*/


$i = 2;
do {
    echo $i;
    $i+=2;
    echo "\n";
}while ($i <= 20);


/* For
Esse laço possui sintaxe um pouco diferente do que vimos nos anteriores. Vamos ao exemplo:
    */

    for ($i = 1; $i <= 20; $i++) {
    echo $i;
    echo "\n";
}

/* Foreach
A última estrutura de repetição que veremos em PHP é a foreach.
Esse laço é parecido com o for,
possuindo uma sintaxe mais simples
e sendo muito propício para realizar interações em arrays. Veja o exemplo:
*/

$carros = Array("Fusca", "Monza", "Passat");

foreach($carros as $carro){
    echo $carro;
    echo "\n";
}

for ($i = 0; $i < count($carros); $i++) {
    echo $carros[$i];
    echo "\n";
}
