$(function(){
 

      $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: '13px'
      });
      $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: '30px'
      });


      $('.featured__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/featured/next.png" alt=""></button>',
        
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              arrows: true
            }
          }
        ]

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

      $('.lnr-list').on('click', function(){
        $('.page__product-item').addClass('list');
        $('.lnr-list').addClass('active');
        $('.lnr-move').removeClass('active');
      });
      $('.lnr-move').on('click', function(){
        $('.page__product-item').removeClass('list');
        $('.lnr-move').addClass('active');
        $('.lnr-list').removeClass('active');
      });
      $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.product-one__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });

var mixer = mixitup('.products__inner-box');


});