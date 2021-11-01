// É identificado um bloco de código quando temos uma ou mais setenças de código dentro de { }
/*
  {
    {Pode ter um bloco de código
         dentro de outro bloco, 
         porém o bloco interno 
         precisa ser fechado
          dentro do externo}
   }
*/
//Exemplos

{
    console.log('Passo 01');
    console.log('Passo 02');

}

{
    {console.log('Passo 03');
{console.log('Passo 04');}}
}