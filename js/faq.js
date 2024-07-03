const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
document.querySelectorAll('.velorio-accordion-item button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
  
        button.classList.toggle('active');
  
        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
  });
  document.querySelector('.up-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
  });