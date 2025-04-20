// Mostrar sección seleccionada
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });

    // Mostrar la sección clickeada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }

    // Resaltar ítem del menú activo
    document.querySelectorAll('.menu-items li').forEach(item => {
        item.classList.remove('active');
    });
    const clickedItem = Array.from(document.querySelectorAll('.menu-items li')).find(li => li.contains(event.target));
    if (clickedItem) {
        clickedItem.classList.add('active');
    }

    // Cerrar menú móvil si está abierto
    if (window.innerWidth <= 768 && document.getElementById('sidebar').classList.contains('active')) {
        toggleSidebar();
    }
}

// Toggle del menú móvil
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Inicialización para asegurar que la primera sección esté activa al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Encontrar el primer elemento de la lista del menú con la clase 'active'
    const activeMenuItem = document.querySelector('.menu-items li.active');

    // Si se encuentra un elemento activo en el menú, mostrar la sección correspondiente
    if (activeMenuItem) {
        // Obtener el atributo 'onclick' y extraer el ID de la sección
        const onclickAttribute = activeMenuItem.getAttribute('onclick');
        const match = onclickAttribute && onclickAttribute.match(/showSection\('([^']+)'\)/);
        if (match && match[1]) {
            showSection(match[1]);
        }
    } else {
        // Si no hay ningún ítem 'active' en el menú (caso inicial),
        // intenta mostrar la primera sección por defecto (asumiendo que tiene un ID)
        const firstSection = document.querySelector('.content .section');
        if (firstSection) {
            showSection(firstSection.id);
        }
    }
});