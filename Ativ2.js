
// Exercicio 2 Estrutura de decisão:

// Percorrer uma Lista de cidades
// Para cada item, verificar se a cidade Florianópolis está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Numero da execução


//no terminal :

// Execução: 1
//Cidade: São Paulo

// Encontrado /não Encontrado

//correção:
const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife'];

cidades.forEach((elemento, index) => {
  console.log('__________________________________')
  console.log('Numero da Execução :' + index)
  console.log('Cidade :' + elemento)
  
  if(elemento.toLowerCase() === 'recife'){
    console.log('Encontrado !!')
  }
  else{
    console.log('não Encontrado')
  }
});




