
const imagens = ['img/car1.png', 'img/car2.jpg', 'img/car3.png', 'img/car4.jpg', 'img/car5.jpg', 'img/car6.jpg'];
let index = -1;
let time = 2000;

function alterarImagem() {
    document.getElementById("carrocel").style.opacity = 0.03;
    setTimeout(() => {
        index = (index + 1) % imagens.length;

        document.getElementById("carrocel").src = imagens[index];

        document.getElementById("carrocel").style.opacity = 1;
    }, 500);
}

setInterval(alterarImagem, 2500);