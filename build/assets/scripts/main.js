$(document).ready(function () {

  $('input[name=square]').nativeMultiple({
    stylesheet: "slider",
    onCreate: function() {
        console.log(this);
    },
    onChange: function(first_value, second_value) {
        console.log('onchange', [first_value, second_value]);
    },
    onSlide: function(first_value, second_value) {
        console.log('onslide', [first_value, second_value]);
    }
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