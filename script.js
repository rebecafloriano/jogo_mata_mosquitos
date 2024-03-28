let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15
let milisegundos = 1500;
let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    milisegundos = 1500
} else if(nivel === 'dificil') {
    milisegundos = 1000
} else if(nivel === 'chucknorris') {
    milisegundos = 750
}

function ajustaTamanhoPalco() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalco();

let cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro);
        window.location.replace("vitoria.html");
    } else {
    document.getElementById('cronometro').innerHTML = tempo;
    }
    
}, 1000)



function posicaoRandomica() {
  //remover o mosquito anterior (caso exista)
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.replace("perdeu.html");
    }

    document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
    vidas++;
  }

  let posicaoY = Math.floor(Math.random() * altura) - 90;
  let posicaoX = Math.floor(Math.random() * largura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoY, posicaoX);

  //criar o elemento html
  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.top = posicaoY + "px";
  mosquito.style.left = posicaoX + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito1";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}
