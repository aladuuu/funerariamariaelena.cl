$(document).ready(function () {
  $(".carousel-inner").slick({
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

  $(".carousel-inner2").slick({
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

  $(".carousel-inner0").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: ".carousel-button3.prev",
    nextArrow: ".carousel-button3.next",
  });

  $(".carousel-inner0").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".slide-19").removeClass("show");
      setTimeout(function () {
        $(".slick-current .slide-19").addClass("show");
      }, 0);
    }
  );

  setTimeout(function () {
    $(".slick-current .slide-19").addClass("show");
  }, 0);

  $('a[href^="#contacto"]').on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  $('a[href="#"]').on("click", function (event) {
    event.preventDefault();
  });
});

function showPopup(title, listContent, image) {
  Swal.fire({
    title: title,
    html: listContent,
    focusConfirm: false,
    showCloseButton: false,
    showConfirmButton: false,
    customClass: {
      popup: 'popup-planes'
    }
  });
}

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