document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("popupModal");
    var btn = document.getElementById("playButton");
    var audio = document.getElementById("myAudio");

    modal.style.display = "flex"; // Exibe o modal

    btn.onclick = function () {
        modal.style.display = "none"; // Oculta o modal
        playAudio();
    };
});


function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const numberOfHearts = 70; // Defina o número de corações

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heartsContainer.appendChild(heart);

        // Posições aleatórias
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight * 0.5; // Ajuste para que os corações apareçam mais no topo
        heart.style.left = randomX + 'px';
        heart.style.top = randomY + 'px';

        // Define uma animação de atraso aleatória
        const randomDelay = Math.random() * 2; // Ajuste conforme necessário
        heart.style.animationDelay = randomDelay + 's';
    }
}

createHearts();

function playAudio() {
    var audio = new Audio();

    // Defina o caminho da sua música
    audio.src = "/asserts/Chance Peña - Hey Lovely_x_wq8Qn-dFg.mp3";
    audio.volume = 0.1
    audio.loop = true;
    // Inicie a reprodução da música automaticamente
    audio.play();
}

function carousel() {
    console.log("passou aqui");
    let imagens = ['/asserts/MyLove/picture2.jpg', '/asserts/MyLove/picture3.jpg', '/asserts/MyLove/picture4.jpg', '/asserts/MyLove/picture5.jpg',
        '/asserts/MyLove/picture6.jpg', '/asserts/MyLove/picture7.jpg', '/asserts/MyLove/picture8.jpg', '/asserts/MyLove/picture9.jpg',
        '/asserts/MyLove/picture10.jpg', '/asserts/MyLove/picture11.jpg', '/asserts/MyLove/picture12.jpg', '/asserts/MyLove/picture13.jpg',
        '/asserts/MyLove/picture14.jpg', '/asserts/MyLove/picture15.jpg', '/asserts/MyLove/picture16.jpg', '/asserts/MyLove/picture17.jpg',
        '/asserts/MyLove/picture18.jpg'];
    let indice = 0;

    function trocarImagens() {
        let img1 = document.getElementById('img1');
        let img2 = document.getElementById('img2');

        img1.src = imagens[indice % imagens.length];
        img2.src = imagens[(indice + 1) % imagens.length];

        indice += 2;
    }
    console.log("agora aqui")
    // setInterval(trocarImagens, 5000); 

    setTimeout(function () {
        trocarImagens(); // chama a função uma vez para preencher as imagens após o atraso
        setInterval(trocarImagens, 5000); // continua a trocar as imagens a cada 5 segundos
    }, 2000);

}


carousel();