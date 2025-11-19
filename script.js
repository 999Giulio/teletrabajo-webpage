let texto = document.getElementById('texto');
let PNG1 = document.getElementById('arriba');
let PNG2 = document.getElementById('abajo');
let subtitulo = document.getElementById('subtitulo');
let menuBtn = document.getElementById('menu-btn');
let menu = document.getElementById('menu');

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    texto.style.marginTop = value * 2.5 + 'px';
    subtitulo.style.marginTop = value * 2.5 + 'px';

});

menuBtn.addEventListener('click', function() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});