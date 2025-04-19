window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const backImage = document.querySelector('.back-image');
    // El 0.5 determina la velocidad del efecto - un número menor = movimiento más suave
    backImage.style.transform = `translateY(${scrolled * 0.5}px)`;
});
