
const campoSenha = document.getElementById("senha");
const campoTamanho = document.getElementById("tamanho");
const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const especiais = document.getElementById("especiais");
const botaoGerar = document.getElementById("gerar");
const botaoLimpar = document.getElementById("limpar");
const mensagem = document.getElementById("mensagem");

function gerarSenha() {

    let caracteres = "";

    if (maiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numeros.checked) {
        caracteres += "0123456789";
    }

    if (especiais.checked) {
        caracteres += "!@#$%&*?";
    }

    if (caracteres === "") {
        mensagem.textContent = "Selecione pelo menos uma opcao!";
        campoSenha.value = "";
        return;
    }

    let quantidade = Number(campoTamanho.value);

    if (quantidade < 1 || quantidade > 50 || !Number.isInteger(quantidade)) {
        mensagem.textContent = "Escolha um tamanho entre 1 e 50!";
        campoSenha.value = "";
        return;
    }

    let novaSenha = "";

    // Gera a senha aleatoria
    for (let i = 0; i < quantidade; i++) {

        const indice = Math.floor(Math.random() * caracteres.length);

        novaSenha += caracteres[indice];
    }

    campoSenha.value = novaSenha;

    mensagem.textContent = "Senha gerada com sucesso!";
}


botaoGerar.addEventListener("click", gerarSenha);

botaoLimpar.addEventListener("click", function() {

    campoSenha.value = "";
    mensagem.textContent = "";

});
