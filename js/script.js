const senha = document.querySelector(".senha input"),
    copiaSenha = document.querySelector(".senha .copy-icon"),
    gerarSenha = document.querySelector(".gerar-senha"),
    alerta = document.getElementById("alerta");

let caracteres = "çabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&/\\|[](){}:;.,*+-=¨#@<>~´`";

const senhaAleatoria = () => {
    let senhaTamanho = 16, novaSenha = "";
    for (let i = 0; i < senhaTamanho; i++) {
        let numerosAleatorios = Math.floor(Math.random() * caracteres.length);
        novaSenha += caracteres.substring(numerosAleatorios, numerosAleatorios + 1);
    }
    senha.value = novaSenha; copiaSenha.classList.replace("uil-file-check-alt", "uil-copy"); 
};

copiaSenha.addEventListener("click", () => {
    navigator.clipboard.writeText(senha.value);
    copiaSenha.classList.replace("uil-copy", "uil-file-check-alt");
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.style.display = "none";
    }, 1000);
});
gerarSenha.addEventListener("click", senhaAleatoria);