// Animasi About cards saat scroll
const aboutCards = document.querySelector('.about-cards');

function revealAboutCards() {
    const rect = aboutCards.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        aboutCards.classList.add('show');
    }
}

window.addEventListener('scroll', revealAboutCards);
window.addEventListener('load', revealAboutCards);