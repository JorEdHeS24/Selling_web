// Efecto parallax simple
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const backImage = document.querySelector('.back-image');
    if (backImage) {
        // El 0.5 determina la velocidad del efecto - un número menor = movimiento más suave
        backImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Control de visibilidad del header
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollPosition = window.pageYOffset;
    const header = document.querySelector('.header');
    const scrollThreshold = 100; // Cantidad de scroll antes de ocultar/mostrar
    
    function hideHeader() {
        header.classList.add('header--hidden');
    }
    
    function showHeader() {
        header.classList.remove('header--hidden');
    }
    
    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        
        // Si estamos al inicio de la página, siempre mostrar el header
        if (currentScrollPosition < scrollThreshold) {
            showHeader();
            lastScrollPosition = currentScrollPosition;
            return;
        }
        
        // Scrolling hacia abajo
        if (currentScrollPosition > lastScrollPosition) {
            hideHeader();
        } 
        // Scrolling hacia arriba
        else {
            showHeader();
        }
        
        lastScrollPosition = currentScrollPosition;
    });
});


