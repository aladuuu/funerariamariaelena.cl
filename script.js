document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');

    gsap.to(logo, {
        duration: 2,
        opacity: 1,
        ease: "power2.inOut"
    });
});
