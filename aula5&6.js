//aula 5

//comentaio de 1 linha
/*
comentario de varias linhas
exemplo
*/

//aula 6
/*variaveis
são "recipientes" ou seja lugares onde são armazenados informações  
que podem variar ,ou seja,podem ter qualquer tipo de valor

no javascript temos 3 palavras chaves para declarar as variaveis

->var
->let
->const
*/

//criando uma variavel

var pote = "bombom";//variavel "pote"recebe a varialvel bombom
alert(pote)//exibe o valor da variavel "pote"
//Atividades
//1)
var a =2;//a recebe 2
var b = 3;//b recebe 3
var c = a+b;//c recebe 2+3=5 ,ou seja recebe 5
alert(c);//alert(c) exibe o resultado de 2+3 que é 5


//2)
var nome,sobrenome,nomeCompleto,idade,nomeNome,idadeNome,traco,tracodois;

nome = "kauan";
sobrenome = "morais de oliveira";
nomeCompleto = nome + " " + sobrenome;
idade = 15;
nomeNome = "nome:";
idadeNome = "idade:";
traco = "================================================";
tracodois = "================================================";

document.getElementById("traco").innerHTML = traco;
document.getElementById("texto").innerHTML = nomeNome;
document.getElementById("textoum").innerHTML = nomeCompleto;
document.getElementById("textodois").innerHTML = idadeNome;
document.getElementById("textotres").innerHTML = idade;
document.getElementById("tracodois").innerHTML = tracodois;

var namee = "objetos";

var quantidade = "30";

var texto = quantidade + " " + namee;

document.getElementById("quantidade").innerHTML = texto;

//variavel let
//3)
//variavel var
var x = 10;
{
    x = 2;
}

document.getElementById("var").innerHTML = x;

//variavel let
 //let é parecida com a variavel var
let y = 10;
{
    y = 12;
}
document.getElementById("let").innerHTML = y;

//4)variavel const
// variavel const não pode ser mudada de jeito nenhum caso mudada resultara em erro exemplo:

const z = 15;
{
  z = 13;
}

document.getElementById("const").innerHTML = z;