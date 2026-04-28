/* HELLSAFE Interactive Logic */

document.addEventListener('DOMContentLoaded', () => {
    
    // ---- Smooth scroll for nav links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- Intersection Observer — reveal animations ----
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal effect to all elements with the .reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // ---- Gallery Slider Logic ----
    const galleryGrid = document.querySelector('#gallery .grid');
    const leftBtn = document.querySelector('#gallery button:first-of-type');
    const rightBtn = document.querySelector('#gallery button:last-of-type');

    if (galleryGrid && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            galleryGrid.scrollBy({ left: -300, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            galleryGrid.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // ---- Navbar scroll effect ----
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-zinc-950/95', 'py-3');
            nav.classList.remove('bg-zinc-950/80', 'py-4');
        } else {
            nav.classList.remove('bg-zinc-950/95', 'py-3');
            nav.classList.add('bg-zinc-950/80', 'py-4');
        }
    });

});
