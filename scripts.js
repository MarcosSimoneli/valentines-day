// Adiciona corações ao DOM
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => {
        heart.remove(); // Remove o coração do DOM após a animação terminar
    }, 2000); // Tempo da animação em milissegundos
}

// Cria corações periodicamente
setInterval(createHeart, 1000); // Intervalo entre cada coração em milissegundos
