document.addEventListener("DOMContentLoaded", function () {
    function criarAviao() {
        const aviao = document.createElement("div");
        aviao.classList.add("avion");

        // Define posição horizontal aleatória
        let posicaoX = Math.random() * window.innerWidth;
        aviao.style.left = `${posicaoX}px`;

        // Define uma altura fixa para os aviões
        aviao.style.bottom = '5px';  // Começa na parte inferior da tela

        document.getElementById("aviones-container").appendChild(aviao);

        // Remove o avião após o término da animação
        setTimeout(() => {
            aviao.remove();
        }, 4000); // Tempo igual ao da animação
    }

    // Criar aviões a cada 1 segundo
    setInterval(criarAviao, 1000);
});
