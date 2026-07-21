// Inicializar iconos de Lucide de manera global
if (window.lucide) {
    lucide.createIcons();
}

// Efecto de scroll activo para el menú de navegación
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Detecta si la sección ocupa la parte central/superior de la pantalla
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
function mostrarMensaje(event) {
    const toast = document.getElementById('toast-notificacion');
    
    // Muestra la alerta personalizada
    toast.classList.add('show');

    // Oculta la alerta automáticamente después de 4 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
