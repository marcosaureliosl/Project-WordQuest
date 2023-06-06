# Caca-palavras

O jogo de caça-palavras, ou sopa de letras, é um passatempo que consiste em letras arranjadas aparentemente aleatórias em uma grade quadrada ou retangular. O objetivo do jogo é encontrar e circundar as palavras escondidas na grade tão rapidamente quanto possível. As palavras podem estar escondidas verticalmente, horizontalmente ou diagonalmente dentro da grade. As palavras são arranjadas normalmente de modo que possam ser lidas da esquerda para a direita ou de cima para baixo, sendo que em passatempos de maior dificuldade também pode ocorrer o oposto. Algumas vezes uma lista de palavras escondidas é fornecida, mas os passatempos mais desafiadores podem fazer com que o jogador descubra-as. A maioria dos passatempos de caça-palavras tem também um tema comum a qual todas as palavras escondidas estão relacionadas.

Os caça-palavras são normalmente encontrados em jornais diários e revistas de passatempo. Alguns professores usam-nos como ferramentas educacionais para crianças, o benefício que é que as mentes jovens podem aprender palavras novas e a soletrá-las através da busca intensas procurando-as letra por letra no passatempo, além de entreter, desenvolve o raciocínio lógico e a memória, ajudando a evitar mal de Alzaimer.

fonte: https://pt.wikipedia.org/wiki/Ca%C3%A7a-palavras

# A criação!

O processo desde a criação do HTML até o JavaScript, dividindo-o em seções para melhor organização.

## HTML

1. Começamos criando um arquivo HTML básico com a estrutura básica, como o doctype, a tag `<html>`, `<head>` e `<body>`.
2. No `<head>`, definimos o conjunto de caracteres com `<meta charset="UTF-8">` e adicionamos a meta tag de viewport para garantir a responsividade em dispositivos móveis.
3. Adicionamos um título para a página usando a tag `<title>`.
4. Importamos o arquivo CSS usando a tag `<link>` com o atributo `rel="stylesheet"` e o caminho para o arquivo CSS.
5. No `<body>`, criamos uma `<div>` com a classe "container" para envolver todo o conteúdo do jogo.
6. Adicionamos um título principal `<h1>` para o jogo.
7. Criamos uma `<div>` com a classe "game-board" para a grade do jogo.
8. Dentro da `<div>` do jogo, adicionamos 9 células de jogo `<div>` com a classe "cell" e um ID único para cada célula.
9. Adicionamos um botão `<button>` para reiniciar o jogo com a classe "reset-button".
10. Finalmente, adicionamos um `<script>` para importar o arquivo JavaScript com a lógica do jogo.

## CSS

1. Começamos definindo o estilo geral da página, definindo a cor de fundo, as margens e o preenchimento da classe "container".
2. Estilizamos o título principal `<h1>` com tamanho de fonte e margem inferior.
3. Definimos a classe "game-board" como uma grade flexível usando `display: flex` e `flex-wrap: wrap`.
4. Estilizamos as células de jogo `<div>` com bordas, preenchimento, margem e cursor personalizado.
5. Adicionamos estilos adicionais para diferentes estados das células, como células selecionadas e células vencedoras.
6. Estilizamos o botão de reiniciar `<button>` com cores de fundo, cores de texto e cursor personalizado.
7. Finalmente, aplicamos algumas regras de estilo responsivo usando media queries para ajustar o layout em dispositivos menores.

## JavaScript

1. Começamos selecionando os elementos HTML relevantes usando `document.querySelector()` e atribuindo-os a variáveis.
2. Criamos uma matriz para representar o tabuleiro do jogo e uma variável para rastrear o jogador atual.
3. Adicionamos um evento de clique para cada célula de jogo, chamando a função `handleCellClick()` quando uma célula é clicada.
4. Na função `handleCellClick()`, verificamos se a célula está vazia e se o jogo ainda está em andamento antes de atualizar o tabuleiro e verificar se há um vencedor.
5. Implementamos a função `checkWinner()` para verificar se há um vencedor após cada jogada. A função verifica todas as combinações possíveis para determinar se há três células iguais em linha, coluna ou diagonal.
6. Implementamos a função `resetGame()` para reiniciar o jogo, limpando o tabuleiro e redefinindo o jogador atual.
7. Finalmente, adicionamos um ouvinte de eventos para o botão de reiniciar para chamar a função `resetGame()` quando o

 botão é clicado.

Essa é uma visão geral do processo desde a criação do HTML até o JavaScript para criar o jogo da velha. É importante notar que o código pode ser refinado e otimizado ainda mais, mas essas são as etapas principais envolvidas na implementação do jogo.

# imagem inicial do projeto

![2023-06-06 (2)](https://github.com/marcosaureliosl/projeto-caca-palavras/assets/127764997/f7470003-1313-41f5-8390-86f063cc9329)


