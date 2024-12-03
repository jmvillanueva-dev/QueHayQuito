document.addEventListener('DOMContentLoaded', function() {
    const title = "¡Vive las Fiestas de Quito 2024: Noticias y Eventos Imperdibles!";
    const titleElement = document.getElementById('main-title');
    let i = 0;

    function typeWriter() {
        if (i < title.length) {
            titleElement.innerHTML += title.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(() => {
                titleElement.innerHTML = '';
                i = 0;
                typeWriter();
            }, 2000); // Espera 2 segundos antes de reiniciar
        }
    }

    typeWriter();

    // Animación de aparición para las secciones
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto parallax para la imagen de fondo
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.hero-image').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Animación para las tarjetas de eventos
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

