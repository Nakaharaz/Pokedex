/* 
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado

para isso vamos trabalhar com dois elementos
1 - listagem 
2 - cartao

precisamos criar duas variaveis no js para trabalhar com os elementos na nossa tela

vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemons

remover a classe aberta só do cartao que esta aberto
ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual pokemon mostrar

remover a classe ativa que marca o pokemon selecionado
adicionar a classe ativa no pokemon selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado;
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        idPokemonSelecionadoNaListagem.classList.add('ativo');
    })
})