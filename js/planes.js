const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = document.querySelectorAll(".lazy-background3");

  const lazyLoad = () => {
    lazyBackgrounds.forEach((lazyBackground) => {
      if (
        lazyBackground.getBoundingClientRect().top <= window.innerHeight &&
        lazyBackground.getBoundingClientRect().bottom >= 0 &&
        getComputedStyle(lazyBackground).display !== "none"
      ) {
        lazyBackground.style.backgroundImage = lazyBackground.dataset.bg;
        lazyBackground.classList.remove("lazy-background3");
      }
    });

    if (lazyBackgrounds.length === 0) {
      document.removeEventListener("scroll", lazyLoad);
      window.removeEventListener("resize", lazyLoad);
      window.removeEventListener("orientationchange", lazyLoad);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
  lazyLoad();
});
document.querySelector('.up-button').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
});