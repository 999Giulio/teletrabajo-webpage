// scriptintro.js

let lastScrollTop = 0; // Variable para almacenar la posición del scroll

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo
        header.style.transform = 'translateY(-50px)'; // Mueve el header hacia arriba
    } else {
        // Scroll hacia arriba
        header.style.transform = 'translateY(0)'; // Mueve el header a la posición original
    }

    // Añade o quita la clase 'scrolled' basado en el desplazamiento
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});

