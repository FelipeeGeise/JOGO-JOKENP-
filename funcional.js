const resultado = document.querySelector(".result");

const playHumano = (escolhaHumana) => {
  playDeGame(escolhaHumana, playMaquina());
};
const meusPontos = document.querySelector(".meu-ponto")
const pontosDaAlexa= document.querySelector(".ponto-Alexa")

let pontosHumano=0
let pontosMaquina=0

const playMaquina = () => {
  const maquina = ["pedra", "papel", "tesoura"];
  const randonNumero = Math.floor(Math.random() * 3);

  return maquina[randonNumero];
};

const playDeGame = (Humano, Maquina) => {
  console.log("Human:" + Humano + "Maquin:" + Maquina);

  if (Humano === Maquina) {
    resultado.innerHTML = "Deu empate!";
  } else if (
    (Humano === "papel" && Maquina === "pedra") ||
    (Humano === "pedra" && Maquina === "tesoura") ||
    (Humano === "tesoura" && Maquina === "Papel")
  ) {
    pontosHumano++
    meusPontos.innerHTML=pontosHumano
    resultado.innerHTML = "Você Ganhou!";
  } else {
    pontosMaquina++
    pontosDaAlexa.innerHTML=pontosMaquina++
    resultado.innerHTML = "Você perdeu para Alexa.";
  }
};
