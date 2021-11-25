/*<!doctype html>
<html lang="pt-BR">
 <head>
 <meta charset="utf-8">
 <title>Incorporando Javascript em Páginas HTML</title>
 <!-- Incorporando um arquivo .js externo -->
 <script src="script.js"></script>
 </head>
 <body>
 <div id="exibe_resultado"> Resultado da Multiplicação: </div>
 </body>
 <!-- Incorporando códigos Javascript diretamente na página -->
 <script type="text/javascript">
 //Com duas barras criamos um comentário de linha em Javascript
 //Comentários de mais de uma linha podem ser feitos dentro de /* */

 var variavel; //Declarando uma variável cujo nome é 'variavel'

 variavel = 3 + 3; //Atribuindo valores e aplicando uma operação matemática
// em uma variável

 /* Utilizando a função nativa 'alert' para exibir uma caixa de
 diálogo na tela cujo conteúdo será o valor da variável 'variavel' */
 alert(variavel);

 var resultadoMultiplicacao = multiplique(10, 50); //chamando a função
//'multiplique' passando dois valores - 10 e 50

 //Manipulando a Árvore DOM a fim de exibir, dentro da DIV declarada no HTML,
// o resultado da multiplicação juntamente com o seu texto inicial
 var divLocal = document.getElementById('exibe_resultado');
 /*
 Neste ponto a variavel divLocal é um objeto que representa a div declarada
no HTML.
 Sendo um objeto é possível acessar seus atributos, como innerHTML,
precedido do nome do objeto seguido de um '.'
 */
 /* divLocal.innerHTML += resultadoMultiplicacao;

 //Definição da função 'multiplique' que recebe dois parâmetros - numero1 e
// numero2
 function multiplique(numero1, numero2){

 /*
 Declarando uma nova variável que guardará o resultado da operação de
multiplicação;
 Iniciando a variável com o valor de 0.
41 */
 var resultado = 0;

 //Atribuindo à variável 'resultado' o valor resutante da multiplicação
// dos 2 parâmetros recebidos 
 resultado = numero1 * numero2;

 //Retornando (devolvendo) o valor da variável resultado
 return resultado;
/*
 }
 </script>
 </html>*/