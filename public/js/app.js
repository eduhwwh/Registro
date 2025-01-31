document.addEventListener("DOMContentLoaded", () => {
    setInterval(createPaperPlane, 1000);
});

function createPaperPlane() {
    const container = document.getElementById("container");
    if (!container) return; // Se o contêiner não existir, sai da função.

    const plane = document.createElement("div");
    plane.classList.add("paper-plane");

    // Posição inicial aleatória
    const startX = Math.random() * window.innerWidth;
    plane.style.left = `${startX}px`; // Corrigido para template literal dentro de uma string
    plane.style.bottom = "0px";

    container.appendChild(plane); // Adiciona o avião ao container

    // Definir posição final aleatória
    const endX = Math.random() * window.innerWidth;
    const endY = window.innerHeight + 100; // Faz o avião voar além da tela
    const duration = Math.random() * 4 + 3; // Entre 3 e 7 segundos

    // Animação de voo
    plane.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, -${endY}px) rotate(${Math.random() * 45 - 22}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: "ease-in-out",
        iterations: 1,
        fill: "forwards"
    });

    // Remove o avião após a animação
    setTimeout(() => plane.remove(), duration * 1000);
}
