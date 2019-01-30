$(document).ready(function () {

  $('.contacts__btn, .bg, .popup__callback .callback__btn').on('click', function () {
    $('.bg').toggleClass('bg--active');
    $('.popup__callback').toggleClass('popup__callback--active');
  });

  $('.hot__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.btn__btn--arrow-left'),
    nextArrow: $('.btn__btn--arrow-right'),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.reviews__btn-l'),
    nextArrow: $('.reviews__btn-r'),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });
});