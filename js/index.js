// Funcionalidad del carrusel para el primer carrusel
let currentIndex = 0;
const slides = document.querySelectorAll(".primer-carousel-slide");

// Mostrar una diapositiva específica en el primer carrusel
function showSlide(index) {
  const slide = slides[index];
  const img = slide.querySelector("img");
  const src = slide.getAttribute("data-src");

  if (img.getAttribute("src") === "../images/placeholder.png" && src) {
    img.setAttribute("src", src);
    img.addEventListener("load", () => {
      activateSlide(index);
    });
  } else {
    activateSlide(index);
  }
}

// Activar una diapositiva específica en el primer carrusel
function activateSlide(index) {
  slides.forEach((slide, i) => {
    const content = slide.querySelector(".primer-carousel-content");
    slide.classList.remove("primer-active");
    content.classList.remove("visible");
    if (i === index) {
      slide.classList.add("primer-active");
      setTimeout(() => {
        content.classList.add("visible");
      }, 50);
    }
  });
}

// Mostrar la siguiente diapositiva en el primer carrusel
function primerNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Mostrar la diapositiva anterior en el primer carrusel
function primerPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Autoplay de diapositivas en el primer carrusel
function autoplay() {
  primerNextSlide();
  setTimeout(autoplay, 5000);
}

// Inicializar el primer carrusel al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
  setTimeout(autoplay, 5000);
});

// Alternar la visibilidad del menú en la barra de navegación
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

// Inicializar el primer carrusel con Slick
$(document).ready(function () {
  $(".carousel-inner").slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".carousel-button.prev",
    nextArrow: ".carousel-button.next",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Inicializar el segundo carrusel con Slick
  $(".carousel-inner2").slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".carousel-button2.prev",
    nextArrow: ".carousel-button2.next",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Mostrar el contenido de la diapositiva actual con animación para el primer carrusel
  setTimeout(function () {
    $(".slick-current .slide-19").addClass("show");
  }, 0);

  // Desplazamiento suave para los enlaces a la sección de contacto
  $('a[href^="#contacto"]').on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  // Prevenir la acción predeterminada para enlaces vacíos
  $('a[href="#"]').on("click", function (event) {
    event.preventDefault();
  });
});

// Mostrar popup con detalles del plan usando SweetAlert
function showPopup(title, listContent) {
  Swal.fire({
    title: title,
    html: listContent,
    focusConfirm: false,
    showCloseButton: false,
    showConfirmButton: false,
    customClass: {
      popup: "popup-planes",
    },
  });
}

// Cargar de manera diferida las imágenes de fondo para los elementos en las secciones con imágenes de fondo
document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = document.querySelectorAll(".lazy-background");

  const lazyLoad = () => {
    lazyBackgrounds.forEach((lazyBackground) => {
      if (
        lazyBackground.getBoundingClientRect().top <= window.innerHeight &&
        lazyBackground.getBoundingClientRect().bottom >= 0 &&
        getComputedStyle(lazyBackground).display !== "none"
      ) {
        lazyBackground.style.backgroundImage = lazyBackground.dataset.bg;
        lazyBackground.classList.remove("lazy-background");
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

document.addEventListener("DOMContentLoaded", function() {
  var lazyBackground = document.getElementById("lazy-background2");
  var img = new Image();
  img.src = "../images/abuelos-abrazando-flor.webp";
  img.onload = function() {
    lazyBackground.style.backgroundImage = "url('" + img.src + "')";
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const lazyBackgrounds = document.querySelectorAll('.lazy-background3');

  const lazyLoad = () => {
    lazyBackgrounds.forEach(lazyBackground => {
      if (lazyBackground.getBoundingClientRect().top <= window.innerHeight && lazyBackground.getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyBackground).display !== "none") {
        lazyBackground.style.backgroundImage = lazyBackground.dataset.bg;
        lazyBackground.classList.remove('lazy-background3');
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

// Detalles del plan para diferentes planes
const katy = `
  <ul>
    <li>Urna seleccionada</li>
    <li>Instalación y traslados</li>
    <li>Capilla de madera para velación</li>
    <li>4 Porta Cirios</li>
    <li>Cruz de madera (Opcional)</li>
    <li>Tarjetero de madera</li>
    <li>1 Libro de Condolencias</li>
    <li>4 Cirios de cera o eléctricos</li>
    <li>1 Cubre Urna 24 Rosas</li>
    <li>1 Pie de Urna 36 Rosas</li>
    <li>1 Corona de Rosas</li>
    <li>2 Canastas 24 Rosas c/u</li>
    <li>Servicio de Cafetería Premium</li>
    <li>Obituario y Condolencias Web</li>
    <li>Carroza Panorámica</li>
    <li>Carroza de Flores</li>
    <li>Vehículo de acompañamiento</li>
    <li>Expresión de Gracia Virtual</li>
    <li>Trámites Registro civil</li>
  </ul>
`;

const palladio = `
  <ul>
    <li>Urna seleccionada</li>
    <li>Instalación y traslados</li>
    <li>Capilla de madera para velación</li>
    <li>4 Porta Cirios</li>
    <li>Cruz de madera (Opcional)</li>
    <li>Tarjetero de madera</li>
    <li>1 Libro de Condolencias</li>
    <li>4 Cirios de cera o eléctricos</li>
    <li>1 Cubre Urna 24 Rosas</li>
    <li>1 Pie de Urna 36 Rosas</li>
    <li>1 Corona de Rosas</li>
    <li>2 Canastas 24 Rosas c/u</li>
    <li>Servicio de Cafetería Premium</li>
    <li>Obituario y Condolencias Web</li>
    <li>Carroza Panorámica</li>
    <li>Vehículo de acompañamiento</li>
    <li>Expresión de Gracia Virtual</li>
    <li>Trámites Registro civil</li>
  </ul>
`;

const montage = `
  <ul>
    <li>Urna seleccionada</li>
    <li>Instalación y traslados</li>
    <li>Capilla de madera para velación</li>
    <li>4 Porta Cirios</li>
    <li>Cruz de madera (Opcional)</li>
    <li>Tarjetero de madera</li>
    <li>1 Libro de Condolencias</li>
    <li>4 Cirios de cera o eléctricos</li>
    <li>1 Cubre Urna 24 Rosas</li>
    <li>1 Pie de Urna 36 Rosas</li>
    <li>1 Corona de Rosas</li>
    <li>2 Canastas 24 Rosas c/u</li>
    <li>Servicio de Cafetería Premium</li>
    <li>Obituario y Condolencias Web</li>
    <li>Carroza Panorámica</li>
    <li>Vehículo de acompañamiento</li>
    <li>Expresión de Gracia Virtual</li>
    <li>Trámites Registro civil</li>
  </ul>
`;

const antunez = `
  <ul>
    <li>Urna seleccionada</li>
    <li>Instalación y traslados</li>
    <li>Capilla de madera para velación</li>
    <li>4 Porta Cirios</li>
    <li>Cruz de madera (Opcional)</li>
    <li>Tarjetero de madera</li>
    <li>1 Libro de Condolencias</li>
    <li>4 Cirios de cera o eléctricos</li>
    <li>1 Cubre Urna 24 Rosas</li>
    <li>1 Pie de Urna 36 Rosas</li>
    <li>1 Corona de Rosas</li>
    <li>2 Canastas 24 Rosas c/u</li>
    <li>Servicio de Cafetería Premium</li>
    <li>Obituario y Condolencias Web</li>
    <li>Carroza Panorámica</li>
    <li>Vehículo de acompañamiento</li>
    <li>Expresión de Gracia Virtual</li>
    <li>Trámites Registro civil</li>
  </ul>
`;

const owen = `
  <ul>
    <li>Urna seleccionada</li>
    <li>Instalación y traslados</li>
    <li>Capilla de madera para velación</li>
    <li>4 Porta Cirios</li>
    <li>Cruz de madera (Opcional)</li>
    <li>Tarjetero de madera</li>
    <li>1 Libro de Condolencias</li>
    <li>4 Cirios de cera o eléctricos</li>
    <li>1 Cubre Urna 24 Rosas</li>
    <li>1 Pie de Urna 36 Rosas</li>
    <li>1 Corona de Rosas</li>
    <li>2 Canastas 24 Rosas c/u</li>
    <li>Servicio de Cafetería Premium</li>
    <li>Obituario y Condolencias Web</li>
    <li>Carroza Panorámica</li>
    <li>Vehículo de acompañamiento</li>
    <li>Expresión de Gracia Virtual</li>
    <li>Trámites Registro civil</li>
  </ul>
`;
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 3,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 1,
      spaceBetween: 3
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 2,
      spaceBetween: 3
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 3
    }
  },
});