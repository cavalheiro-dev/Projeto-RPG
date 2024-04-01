//Jogo RPG - Começo 

alert(
  "Bem vindo ao início do jogo: Primeiro você dizer seu nome e distribuir seus 20 pontos sabiamente entre Vida e Dano para começar o jogo."
);

let nome = prompt("digite seu nome");
let vida = +prompt("digite quantos pontos deseja colocar em vida");
let ataque = +prompt("Digite o quantos pontos deseja colocar em ataque");
while (!nome || vida + ataque != 20) {
  alert(
    "Deu errado digite novamente, lembrando que nome não pode esta vazio, e não pode passar vida + ataque = 20"
  );
  nome = prompt("digite seu nome");
  vida = +prompt("digite quantos pontos deseja colocar em vida");
  ataque = +prompt("Digite o quantos pontos deseja colocar em ataque");
}

let dano = ataque * 10;
let hp = vida * 100;

alert(
  `Olá, ${nome} o seu personagem tem ${hp} pontos de Vida e ${dano} pontos de Dano`
);

alert(
  `${nome}, já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros e você está se preparando para sua primeira incursão em uma masmorra, acompanhado por sua equipe de aventureiros. Após alguns dias de viagem, sua equipe finalmente chega à misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra estão escorregadias de umidade e o ar cheira a mofo e decomposição`
);

let decisao1 = prompt(
  "O que voce quer fazer? (A) Entrar na Masmorra ou (B) Explorar a área em volta"
);

if (decisao1 == "A") {
  alert(
    "Ao entrar na masmorra, você percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo nas profundezas da masmorra, mas não consegue identificar exatamente o que é."
  );
} else {
  let encontrouPocao = parseInt(Math.random() * 2);
  if (encontrouPocao >= 0)
    alert(
      " Você decide explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon."
    );
  else {
    alert(
      "Você decide explorar a área circundante, esperando encontrar pistas ou recursos valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção tem propriedades de cura."
    );
    hp = hp + 500;
    alert("Sua vida é de " + hp);
  }
}

let decisao2 = prompt(
  "O que você quer fazer? (A) Seguir caminhando ou (B) Analisar o interior da caverna"
);

if (decisao2 == "A") {
  var tropeca = parseInt(Math.random() * 2 + 1);
  
  if (tropeca >= 0)
    alert(
      "Ao seguir caminhando pela caverna, o tempo passa e a sua a equipe de aventureiros começa a ganhar confiança, a atenção vai se dispersando e quando notam, todos estão fazendo piadas em tom de voz descontraído. Tudo parece estar indo bem até que todos começam a ouvir um ruído arrepiante surgindo em meio a suas vozes, o clima alegre se dissipa repentinamente, todos ficam alertas e em silêncio, tentando observar o que os espera pela frente."
    );
  else {
    alert("Ao seguir caminhando você tropeça e bate a cabeça...");
    hp = hp - 200;
    alert("Sua vida é de " + hp);
  }
} else {
  alert(
    "Ao analisar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado..."
  );
}

let decisao3 = prompt(
  "O que você quer fazer? (A) Sair fora ou (B) Analisar o objeto"
);
if (decisao3 == "A") {
  alert(
    "Ao sair fora, você tropeça em um monte de ossos. O estrondo ecoa pelo ambiente e o barulho rompe o silêncio, alertando aqueles que vivem nas profundezas da caverna..."
  );
} else {
  alert(
    "O objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao se aproximar para examiná-la, você percebe que ainda há vestígios de óleo dentro dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar atenção ao que os espera adiante..."
  );
  hp = hp + 500;
  alert("Sua vida é de " + hp);
}
alert(
  "Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate enquanto ficam próximas a um cristal que emite uma luz fraca. As órbitas vazias dos olhos focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente, sentindo a presença ameaçadora dos mortos-vivos."
);

let decisao4 = prompt(
  "O que você quer fazer? (A) Lutar contra exercito de esqueletos ou (B) Sair correndo da caverna"
);
if (decisao4 == "A") {
  alert(
    "Lutar contra " + nomeEsqueleto + ", Status dos esqueletos: " + vidaEsqueleto + " de vida e " + danoEsqueleto + " de dano."
  );
} else {
  alert(
    "Ao Sair correndo você bate com a cabeça num pilar de pedra e perde a consciência..."
  );
  alert(
    "Covarde! Fim de jogo para você..."
  );
}

