// script.js

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .icon-list li, .step, .column');

    animatedElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.03)';
            element.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
            element.style.backgroundColor = '#e6f7ff'; // Color de fondo al pasar el mouse
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            element.style.backgroundColor = '#f9f9f9'; // Color de fondo normal
        });
    });
});


// Ejemplo de código que podría estar añadiendo animaciones
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
});
