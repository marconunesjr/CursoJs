// Arrays
let alunos = []; // Array vazio
let alunos = ['Alaex', 'Ana', 'João']; // Array de strings
let notas = [10.0, 9.5, 9.5];  // Array números decímais
let mistura = ['Um', 2, 3, 'Quatro'];  // Array com mais de um tipo

// Criando arrays usando o construtor (conceito usado na programação orientada a objetos)
let alunos = new Array();
let alunos = new Array('Alex', 'Anna', 'João');

/* Acesso e exibição de elementos do veto 
Em termos de acesso aos elementos de um array,
a forma mais simples é utilizando o seu índice*/
let alunos = ['Alex', 'Anna', 'João'];
alert(alunos[0]); // Exibirá "Alex" na caixa de diálogo

/* A função 'alert', imprimirá o conteúdo da posição zero do array 'alunos', ou seja 'Alex';
Seguindo a mesma lógica , se quiséssmeos imprimir 'João', utilizariamos o índice 2;
Outra forma de acssar e exibir  os elementos de um vetor (array) é usando um laço de repetição;
*/

/* Função 'push' ela serve para incluir valor num array, já criado */
// nome_do_array.push(valor)
alunos.push('Helena');
alunos.push('Maria', 'Antonio'); // Pode ser inserido mais de um valor ao mesmo tempo

/* Outras formas de adicionar um valor num vetor */
frutas[frutas.length] = 'Maria';

/* SLICE 
O slice é um método multiuso em Javascript. Ele serve tanto para excluir elementos de um arrya,
como para inserir ou substituir, sua sintaxe é: */
Array.splice(posição, 0, novo_elemento, novo_elemento, '...')
/*Onde:
‘posição’ é o índice onde o novo elemento será incluído;
‘0’ indica ao método que nenhum elemento do array será excluído;
‘novo_elemento’ é o novo elemento que se deseja adicionar ao array. */
let alunos = ['Alex', 'Anna', 'João'];
alunos.splice(3, 0, 'Helena');
alert(alunos); //imprimirá 'Alex', 'Anna', 'João', 'Helena'
// Além disso, com esse método também é possível substituir um dos elementos do array. Veja o exemplo a seguir:
let alunos = ['Alex', 'Anna', 'João'];
alunos.splice(1, 1, 'Helena');
alert(alunos); //imprimirá 'Alex, 'Helena', 'João'

/* A propriedade length
Uma das necessidades mais comuns quando se trabalha com arrays é saber o seu tamanho. 
Como vimos em alguns de nossos exemplos, em JavaScript está disponível a propriedade length, 
que retorna o tamanho, ou número de elementos, de um array.

Sua sintaxe é:*/
nome_do_array.length

/* Remoção de elementos do vetor
A remoção de elementos de um array, em JavaScript, pode ser feita com a utilização do método nativo delete. 
Vejamos como esse método funciona utilizando nosso array de exemplo: */
delete frutas[0];
/* Como visto, sua sintaxe é composta pelo nome do método, delete, pelo nome do array e pelo índice do elemento que queremos remover. */

/*Outros métodos para remover elementos do vetor
A linguagem JavaScript possui, além de "delete", outros 4 métodos para remoção de elementos, conforme veremos a seguir: */

// POP
// Este método, que não recebe parâmetros, remove um elemento do final do array, atualizando seu tamanho. Sua sintaxe é:
frutas.pop();

/* shift
Embora similar ao pop, este método remove um elemento do início do array. Após a remoção, este é reindexado
 (ou seja, o elemento de índice 1 passa a ser o de índice 0 e assim sucessivamente).
  Além disso, o tamanho do array também é atualizado. Sua sintaxe pode ser vista a seguir: */
  frutas.shift();

  /* splice
Este método, introduzido anteriormente, pode ser usado para exclusão de elementos. 
Para tanto, ele recebe como parâmetros a quantidade de elementos que se deseja eliminar e o índice a partir do qual estes serão excluídos. 
A sintaxe a seguir demonstra a remoção de 2 elementos, a partir do índice 2, do array fornecido: */
let primos = [2,3,5,7,11,13,17];

primos.splice(2,2);

alert(primos); //imprimirá 2,3,11,13,17
// Nesse método, para fins de remoção, o primeiro parâmetro indica o índice e o segundo, a quantidade de elementos a serem excluídos.

/* Nesse método, para fins de remoção, o primeiro parâmetro indica o índice e o segundo, a quantidade de elementos a serem excluídos.
Existem outras maneiras para excluir elementos de um array. 
Uma forma simples é determinar o tamanho, utilizando a propriedade length, do array.
 Isso fará com que este seja reduzido ao novo tamanho informado. Vejamos o exemplo prático: */
 let primos = [2,3,5,7,11,13,17];

alert(primos.length); //imprimirá 7

primos.length = 4;

alert(primos.length); //imprimirá 4