/* =====================================================
   Zane Zhang — Homepage Interactions
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Navbar scroll effect ----
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    const onScroll = () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 20);
        backToTop.classList.toggle('visible', scrollY > 600);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Mobile menu toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        // Animate hamburger to X
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ---- Active nav link on scroll ----
    const sections = document.querySelectorAll('section[id], header[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        rootMargin: '-20% 0px -60% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // ---- Scroll reveal animation ----
    const revealElements = document.querySelectorAll(
        '.section-title, .card, .timeline-item, .hero-text, .hero-avatar, .pub-item'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Stagger animation for grids ----
    const grids = document.querySelectorAll('.research-grid, .misc-grid, .hero-links');
    grids.forEach(grid => grid.classList.add('reveal-children'));

    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    grids.forEach(grid => gridObserver.observe(grid));

    // ---- Back to top ----
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Fun: typed greeting on hero ----
    // (Optional: uncomment if you want a typing effect)
    // const greeting = document.querySelector('.hero-greeting');
    // const text = greeting.textContent;
    // greeting.textContent = '';
    // let i = 0;
    // const typeWriter = () => {
    //     if (i < text.length) {
    //         greeting.textContent += text.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 60);
    //     }
    // };
    // setTimeout(typeWriter, 500);
});
