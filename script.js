document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const message = document.getElementById('message');

    noBtn.addEventListener('mouseenter', () => {
        // Calcula máximos para x e y teniendo en cuenta el tamaño del botón
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        // Genera una posición aleatoria dentro de los límites de la ventana
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = 'fixed'; // Usa posicionamiento fijo para facilitar el movimiento
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    yesBtn.addEventListener('click', () => {
        message.textContent = 'Te quiero mi amorcito, no pienses que no te quiero ver mi reina, te amo mi majo preciosa:,)❤️';
    });
});

document.getElementById('yesBtn').addEventListener('click', function() {
    createConfetti();
});

function createConfetti() {
    const confettiCount = 600; // Más confeti para un efecto más lleno
    const confettiContainer = document.getElementById('confetti-container');
    const shapes = ['circle', 'rectangle', 'strip']; // Diferentes formas

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        confettiPiece.classList.add('confetti-piece', shape);
        confettiContainer.appendChild(confettiPiece);

        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`; // Colores más brillantes
        const animation = confettiPiece.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 3000,
            easing: 'ease-out',
            iterations: 1
        });
        animation.onfinish = () => confettiPiece.remove();
    }
}