// Menu Hambúrguer Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    // Toggle menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Atualiza aria-expanded para acessibilidade
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Altera o label do botão
        menuToggle.setAttribute('aria-label', isExpanded ? 'Fechar menu' : 'Abrir menu');
        
        // Previne scroll do body quando menu está aberto
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    // Fecha menu ao clicar em um link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menu');
                document.body.style.overflow = '';
            }
        });
    });

    // Fecha menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
            document.body.style.overflow = '';
        }
    });

    // Fecha menu ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
            document.body.style.overflow = '';
        }
    });

    // Ajusta menu ao redimensionar janela
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }, 250);
    });
});

// Smooth scroll para links internos (melhoria de UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});