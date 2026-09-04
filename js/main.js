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

// MANEJO DEL ENVÍO DEL FORMULARIO CON EMAILJS
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = "Enviando...";
        submitBtn.disabled = true;

        const formData = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                mostrarMensaje();
                contactForm.reset();
            } else {
                alert("Ocurrió un error al enviar el mensaje.");
            }
        } catch (error) {
            alert("Error de conexión. Inténtalo más tarde.");
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function mostrarMensaje(event) {
    const toast = document.getElementById('toast-notificacion');
    
    // Muestra la alerta personalizada
    toast.classList.add('show');

    // Oculta la alerta automáticamente después de 4 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
