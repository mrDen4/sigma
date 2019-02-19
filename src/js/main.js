(function($){				
  jQuery.fn.lightTabs = function(options){
      
      var createTabs = function(){
          tabs = this;
          i = 0;
          
          showPage = function(i){
              $(tabs).children("div").children("div").hide();
              $(tabs).children("div").children("div").eq(i).show();
              $(tabs).children("ul").children("li").removeClass("active");
              $(tabs).children("ul").children("li").eq(i).addClass("active");
          }
          
          showPage(0);				
          
          $(tabs).children("ul").children("li").each(function(index, element){
              $(element).attr("data-page", i);
              i++;                        
          });
          
          $(tabs).children("ul").children("li").click(function(){
              showPage(parseInt($(this).attr("data-page")));
          });				
      };		
      return this.each(createTabs);
  };	
})(jQuery);
$(document).ready(function () {

  $('.contacts__btn, .bg, .popup__callback .callback__btn').on('click', function () {
    $('.bg').toggleClass('bg--active');
    $('.popup__callback').toggleClass('popup__callback--active');
  });

  $('#property').on('mouseenter', function () {
    $('.item__submenu--property').toggleClass('item__submenu--active');
  });

  $('#info').on('mouseenter', function () {
    $('.item__submenu--info').toggleClass('item__submenu--active');
  });

  $('.item__submenu--info, .item__submenu--property').on('mouseleave', function () {
    $('.item__submenu--info').removeClass('item__submenu--active');
    $('.item__submenu--property').removeClass('item__submenu--active');
  });

  $(".hot__container").lightTabs();

  // $('.hot').on('click', ".btn__btn", function() {
  //   var tabs = $('.hot__btns .btn__btn'),
  //       cont = $('.hot__tabs .hot__tab');
    
  //   tabs.removeClass('hot__tab--active');
  //   cont.removeClass('btn__btn--active');

  //   $(this).addClass('active');
  //   cont.eq($(this).index()).addClass("active");

  //   return false;
  // });

  $('.hot__slider, .hot__slider--1, hot__slider--2, .hot__slider--3, .hot__slider--4, .hot__slider--5, .hot__slider--6').slick({
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