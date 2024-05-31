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
