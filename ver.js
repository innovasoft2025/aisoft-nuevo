document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.hero .cta-button');
    const knowMoreButton = document.querySelector('.aisoft-advantage .cta-button');

    if (exploreButton) {
        exploreButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/index.html'; // Redirecciona a index.html
        });
    }

    if (knowMoreButton) {
        knowMoreButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/index.html'; // También redirecciona a index.html
        });
    }
});