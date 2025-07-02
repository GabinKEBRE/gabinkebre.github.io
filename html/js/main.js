document.addEventListener('DOMContentLoaded', () => {
    // Exemple simple : ajouter une classe 'fade-in' aux sections au scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Ne l'observer qu'une fois
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Vous pouvez ajouter d'autres scripts ici pour des effets de texte, galerie d'images, etc.
});
