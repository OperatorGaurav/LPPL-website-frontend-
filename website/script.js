/* HELLSAFE Interactive Logic */

document.addEventListener('DOMContentLoaded', () => {
    
    // ---- Smooth scroll for nav links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (this.classList.contains('nav-link') && typeof updateNavIndicator === 'function') {
                    updateNavIndicator(this);
                }
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

    // ---- Nav Indicator Animation & Scroll Spying ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.getElementById('nav-indicator');

    function updateNavIndicator(activeLink) {
        if (!activeLink || !navIndicator) return;
        navIndicator.style.width = `${activeLink.offsetWidth}px`;
        navIndicator.style.left = `${activeLink.offsetLeft}px`;
        
        navLinks.forEach(link => {
            link.classList.remove('text-primary-container', 'active');
            link.classList.add('text-zinc-400');
        });
        activeLink.classList.remove('text-zinc-400');
        activeLink.classList.add('text-primary-container', 'active');
    }

    if (navLinks.length > 0) {
        const initialActive = document.querySelector('.nav-link.active') || navLinks[0];
        // small timeout ensures fonts and layouts are rendered
        setTimeout(() => updateNavIndicator(initialActive), 100);
        // update on window resize too
        window.addEventListener('resize', () => {
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) updateNavIndicator(activeLink);
        });
    }

    // Scroll event for active section
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset for navbar and threshold
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            const activeLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
            if (activeLink && !activeLink.classList.contains('active')) {
                updateNavIndicator(activeLink);
            }
        } else if (scrollY < 100 && navLinks.length > 0) {
             updateNavIndicator(navLinks[0]);
        }
    });
    
    // Add hover effect to move indicator temporarily
    let hoverTimeout;
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (navIndicator) {
                navIndicator.style.width = `${this.offsetWidth}px`;
                navIndicator.style.left = `${this.offsetLeft}px`;
            }
        });
        
        link.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                const activeLink = document.querySelector('.nav-link.active');
                if (activeLink) {
                    // Update indicator back to the active link silently (without changing classes)
                    navIndicator.style.width = `${activeLink.offsetWidth}px`;
                    navIndicator.style.left = `${activeLink.offsetLeft}px`;
                }
            }, 100);
        });
    });

});
