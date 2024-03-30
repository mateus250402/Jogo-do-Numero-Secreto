let listaDeNumerosSorteados = [];
let quantidadeMax = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', "Parabéns!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você realizou ${tentativas} ${palavraTentativa}`;
        
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', "Tente novamente!");
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
    }
    else {
        exibirTextoNaTela('h1', "Tente novamente!");
        exibirTextoNaTela('p', `O número secreto é maior ${chute}`);
    }
    
    tentativas ++;
    
    limparCampo();
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeMax + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length
    
    if (quantidadeElementosLista == quantidadeMax) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = " ";
}

function mensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', "Adivinhe um número entre 1 e 100");
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

