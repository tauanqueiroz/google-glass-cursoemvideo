let timerTransicao;


function mudaFoto (foto) {
        const icone = document.getElementById("icone");
        if (icone.getAttribute("src") === foto) {
                return;
        }
        clearTimeout(timerTransicao);
        icone.style.opacity = 0;
        timerTransicao = setTimeout(() => {
                icone.src = foto;
                icone.style.opacity = 1;
        }, 100);
        //document.getElementById("icone").src = foto;
}
