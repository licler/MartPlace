$(function(){
 

      $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: '13px'
      });



      $('.featured__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/featured/next.png" alt=""></button>'
      });
      $('.followers__inner-box').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-btn--blue-theme slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--blue-theme slick-next"><img src="images/featured/next.png" alt=""></button>'
      });

      $('.clients__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/featured/next.png" alt=""></button>'
      });

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
      });


var mixer = mixitup('.products__inner-box');


});