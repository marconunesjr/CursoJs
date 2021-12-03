<?php
$_nomeCurso = 'Programação de Páginas Dinâmicas com PHP';
$ano criacao = 1994;
$flagLiguagemScript = true;
?>

<!doctype html>
 <html lang="pt-BR">
 <head>Primeiro código PHP com tags HTML</head>
 <body>
 <h1>Título do texto</h1>
 <p><?php echo "Olá, mundo"; ?></p>
 </body>
 </html>

/*
 Variáveis em PHP
As variáveis são um dos principais recursos em uma linguagem de programação. 
Em PHP, a definição de uma variável é feita com a utilização do símbolo “$” seguido do nome da mesma. 
No código de exemplo anterior, a variável “$var1” foi declarada e, ao mesmo tempo, inicializada.

Em PHP, diferentemente de linguagens como Java, não é necessário informar o tipo de variável. 
Tal fato concede ao PHP a característica de linguagem fracamente tipada. 
Com isso, não há diferenças no momento da criação de variáveis para receber dados numéricos,
 textuais, alfanuméricos, entre outros.
*/

<?php

$var1 = 4; //a variável foi inicializada com o valor de 4
$var1 += 2; //com a utilização da combinação de operadores a variável $var1 passou a ter o valor de 6 (4 + 2)
$var1 *= 2; //com a utilização da combinação de operadores a variável $var1 passou a ter o valor de 12 (4 + 2) * 2

$var2 = "Programação";
$var2 .= " com PHP"; //com a utilização da combinação de operadores a variável $var2 passou a ter o conteúdo "Programação com PHP"

$var = ($var4 = "Copie esses códigos") . " e pratique seus conhecimentos!" ;
/*
No exemplo acima o conteúdo da variável $var3 é igual a "Copie esses códigos e pratique seus conhecimentos!"
Já a variável $var4 possui o conteúdo "Copie esses códigos"
*/