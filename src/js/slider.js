const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
    if (imagemAtual === imagens.length - 1) return;

    esconderImagemAberta();
    imagemAtual++;
    mostrarImagem();
    mostrarOuEsconderSeta();
});

setaVoltar.addEventListener("click", function () {
    if (imagemAtual === 0) return;

    esconderImagemAberta();
    imagemAtual--;
    mostrarImagem();
    mostrarOuEsconderSeta();
});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".slide.mostrar");
    if (imagemAberta) {
        imagemAberta.classList.remove("mostrar");
    }
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function mostrarOuEsconderSeta() {
    setaVoltar.classList.toggle("opacidade", imagemAtual === 0);
    setaAvancar.classList.toggle("opacidade", imagemAtual === imagens.length - 1);
}

// Garante que a primeira seta "voltar" esteja desativada no início
mostrarOuEsconderSeta();
