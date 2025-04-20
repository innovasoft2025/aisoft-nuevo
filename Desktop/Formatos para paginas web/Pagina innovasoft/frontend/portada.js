const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remover la clase 'clicked' de todos los botones (opcional si no quieres resaltado múltiple)
    navButtons.forEach(btn => {
      btn.classList.remove('clicked');
    });
    // Agregar la clase 'clicked' al botón que fue clickeado
    this.classList.add('clicked');
    // Remover la clase 'clicked' después de un breve tiempo (ej. 500 milisegundos = 0.5 segundos)
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 500);
  });
});