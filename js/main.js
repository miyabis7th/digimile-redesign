document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Slide-up Animation (.a-slide)
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before it hits the bottom
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                observer.unobserve(entry.target); // Animate only once layout Givery
            }
        });
    }, observerOptions);

    const slideElements = document.querySelectorAll('.a-slide');
    slideElements.forEach(el => observer.observe(el));

    // Initial hero elements activation (to ensure they appear on load)
    setTimeout(() => {
        document.querySelectorAll('.hero .a-slide').forEach(el => {
            el.classList.add('is-active');
        });
    }, 100);
});
