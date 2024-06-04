document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".fondo");
    const loginLink = document.querySelector(".login-link");
    const registrarLink = document.querySelector(".registrar-link");
    const iniciarSesionBtn = document.querySelector(".btn-iniciar-sesion");
    const iconoCerrar = document.querySelector(".icono-cerrar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section-content");
    const loginForm = document.querySelector("form[action='#']"); // Selecciona el formulario de inicio de sesión

    if (registrarLink) {
        registrarLink.addEventListener("click", () => {
            fondo.classList.add('active');
            fondo.classList.remove('active-btn');
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", () => {
            fondo.classList.remove('active');
            fondo.classList.add('active-btn');
        });
    }

    if (iniciarSesionBtn) {
        iniciarSesionBtn.addEventListener("click", () => {
            fondo.classList.add('active-btn');
        });
    }

    if (iconoCerrar) {
        iconoCerrar.addEventListener("click", () => {
            fondo.classList.remove('active-btn');
            fondo.classList.remove('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetSection = link.getAttribute("data-section");
            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetSection) {
                    section.classList.add("active");
                }
            });
        });
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "map.html"; // Redirigir a la página del mapa
    });
});








