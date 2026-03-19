document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-slider img');
    
    if (images.length === 0) {
        return;
    }

    let currentIndex = 0;

    function rotateImages() {
        images.forEach((img) => img.classList.remove('active'));
        images[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(rotateImages, 4000); // Lo bajé a 4 segundos para que se sienta más dinámico
});