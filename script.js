document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const text = document.getElementById('construction-text');

    gsap.to(logo, {
        duration: 2,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power2.inOut",
        onComplete: () => {
            logo.style.filter = "none";
        }
    });

    gsap.to(text, {
        duration: 2,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power2.inOut",
        delay: 1,
        onComplete: () => {
            text.style.filter = "none";
        }
    });
});
