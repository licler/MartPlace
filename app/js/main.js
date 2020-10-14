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
            breakpoint: 830,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
        ]
      });
      $('.followers__inner-box').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-btn--blue-theme slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--blue-theme slick-next"><img src="images/featured/next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true
            }
          },
          
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
        ]



      });

      $('.clients__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/featured/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/featured/next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          },
          
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },



        ]





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


     
      $('.menu__big-btn').on('click', function(){
        $('.menu__list').slideToggle();
      });



      $('.header__wrapper-btn').on('click', function(){
        $('.header__wrapper').toggleClass('active');
      });
        
      
        




      $('.aside__title-button').on('click', function(){
       $('.aside__title').toggleClass('aside__title--expanded');
        $('.category__list').toggleClass('category__list--active');
      })



  var mixer = mixitup('.products__inner-box');


});