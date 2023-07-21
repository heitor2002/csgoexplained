const playersFunctionsButtons = [
  {
    title: "In-game Leader",
    descriptions:
      "IGL ou in-game leader é o player responsável por organizar táticas, coordenar o time e fazer a análise completa não só do jogo, mas também dos jogadores, elencando suas qualidades e fraquezas. <br /><br /> Reconhecer que está lidando com pessoas pode ser algo muito óbvio para alguns, entretanto, não são todas as pessoas que possuem esta qualidade que é uma característica essencial para o IGL, pois ele está responsável por analisar cada player do time e fazer as alterações necessárias ao decorrer do jogo.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/HBq_UoWU_p_yC7jkxXD3Lp.png?ixlib=java-2.1.0&w=400&s=68522238b911e44997cad4e63d67398e",
  },
  {
    title: "Awper",
    descriptions:
      "O Awper possui a arma mais potente do jogo no quesito de dano causado, rara são as vezes em que um alvo que foi atingido consegue sair vivo, até mesmo quando acertado por um tiro que varou uma superfície. <br /><br /> Ao mesmo tempo em que a arma é extremamente forte em combate, quando o confronto é a curta distância ela se torna um problema, já que com a utilização da mira o campo de visão do jogador é reduzido e um tiro disparado sem a mesma muitas vezes acaba não sendo certeiro. Abates com a awp não geram muita recompensa, mesmo que a ela possui um preço elevado, com o valor de $4750. <br /><br /> A função do awper é saber posicionar-se em locais estratégicos e focar na precisão do tiro; o bom awper além de ser preciso com os tiros deve saber informar o time das movimentações dos adversários que estão fora do seu controle; evitando assim jogadas mais arriscadas.",
    player: "https://proconfig.net/storage/fallen_profile.png",
  },
  {
    title: "Âncora",
    descriptions:
      "Este é o jogador responsável for fixar-se no bombsite até que a C4 seja espotada; o fato de ficar muito tempo sem se movimentar pode parecer estranho para alguns, mas é essencial para diversos rounds, pois este é o jogador que irá segurar a rotação do inimigo, garantindo o confronto em muitas jogadas 'fakes' do adversário.<br /><br /> O âncora pode até mesmo cobrir um bombsite sozinho, como ocorria com o jogador Epitácio 'TACO' de Melo; este só se movimentava com a certeza da localização da C4, e dessa maneira conquistou dois títulos Major pela Luminosity Gaming e SK Gaming.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/E0oAsznGp67mqgNjGGOZia.png?ixlib=java-2.1.0&w=400&s=850c7701777957dbf957d845b7fd9f09",
  },
  {
    title: "Coringa",
    descriptions:
      "Este é um jogador que está se movimentando a todo momento, transitando entre os bombsites. Ele tem como objetivo coletar informações e encontrar algum jogador inimigo desprevenido. O coringa deve ser um jogador criativo, pois o que diferencia ele dos outros é a sua capacidade de improvisar jogadas e surpreender o adversário que não conseguirá revidar o ataque.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/_SqhwqFW01KWm3Y47uoDgW.png?ixlib=java-2.1.0&w=400&s=fd7f7728b3e5fb1edd978a04d04ea115",
  },
  {
    title: "Rotativo",
    descriptions:
      "Ao mesmo tempo em que faz a função de fixar-se em um bombsite, este também deve ser o primeiro que abandona a posição quando obtém informação de que a C4 está sendo espotada no outro bombsite. Este tem como objetivo auxiliar as outras posições, jogando junto do coringa ou servindo de apoio para o âncora em alguma tentativa de ataque terrorista.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/0wByIKmMndjpZZS9V6_485.png?ixlib=java-2.1.0&w=400&s=c405eb54d75015b10b2dca87231b04b6",
  },
  {
    title: "Entry Fragger",
    descriptions:
      "Este tem uma função fundamental no momento das entradas; jogando de maneira mais isolada, o entry fragger é aquele que conquista espaço para a equipe terrorista, ele é o primeiro a confrontar o inimigo, matando ou morrendo; independente do resultado desta troca, ele deve informar todos os posicionamentos dos inimigos que ele encontrou; e assim o time poderá armar estratégias com base nas informações obtidas.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/oVlLgpSsMu8ZBc-iAWuzZ3.png?ixlib=java-2.1.0&w=400&s=659b623b8c8db35d0da44880ef08dd7f",
  },
  {
    title: "Fragger",
    descriptions:
      "Este também tem por função dominar espaços, porém vai desempenhar um papél mais cálculista, jogando com base nas informações obtidas. Sendo assim, este sempre agirá após o avanço da própria equipe. <br /><br /> O fragger coleta a informação e executa uma ação, sendo muito conhecido como 'trader', ele muitas vezes espera o parceiro morrer para aparecer e executar o inimigo.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/o7msRJxwfm_ocbomcixhyK.png?ixlib=java-2.1.0&w=400&s=c467bce055bc7fca693f975758438103",
  },
  {
    title: "Lurker",
    descriptions:
      "O lurker é aquele que vai atuar parando a rotação do inimigo; ele deve se posicionar nas possíveis passagens que os CTs farão, pegando-os desprevenidos. O posicionamento é o ponto chave do lurker que deve estar em sintonia com os comandos do IGL, e atento as movimentações dos companheiros; pois o posicionamento ideal do lurker sempre é variável.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/SxAtneBaHuA5iYcLWSlO44.png?ixlib=java-2.1.0&w=400&s=9b01d15a04e1882c728913605edd884d",
  },
  {
    title: "Suporte",
    descriptions:
      "Esta é uma função que parece simples mas na verdade é uma das mais complicadas de exercer, este player está responsável por auxiliar seu time principalmente com o uso de utilitárias; este deve ter um amplo conhecimento tendo em mente todos os pixels necessários para executar qualquer ação com granadas, sendo um jogador essencial no domínio de regiões do mapa. <br /><br />O suporte possui um estilo de jogo mais passivo, costuma comprar utilitárias e kit para defusar a bomba até mesmo em rounds econômicos, sacrificando algumas vezes a própria proteção.",
    player:
      "https://img-cdn.hltv.org/playerbodyshot/dZY7rUhYU7fjZ03E85thjX.png?ixlib=java-2.1.0&w=400&s=e82bef1d84825edb482d63c745617cdd",
  },
];

const sectionPlayersFunctions = document.getElementById("nav-flex-functions");
const descriptionsPlayersFunctions = document.getElementById(
  "functions-descriptions"
);

const titlePlayer = document.getElementById("player-title");
const descriptionPlayer = document.getElementById("player-descriptions");
const imagePlayer = document.getElementById("image-player");

playersFunctionsButtons.forEach((item, index) => {
  const button = document.createElement("button");
  button.innerHTML = item.title;

  sectionPlayersFunctions.appendChild(button);
  button.onclick = () => {
    titlePlayer.innerHTML = playersFunctionsButtons[index].title;
    descriptionPlayer.innerHTML = playersFunctionsButtons[index].descriptions;
    imagePlayer.src = playersFunctionsButtons[index].player;
  };
});
