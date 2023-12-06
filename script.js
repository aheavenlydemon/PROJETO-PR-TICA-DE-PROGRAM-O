$('.slick-slider').slick({
    centerMode: true,
    slidesToShow: 5,
    dots: true,
    arrows: true,
    swipe: true,
  //  infinite: true,
    swipeToSlide: true,
    //adaptiveHeight: true,
  });
  
  
  /*$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    changecolor("white", 0);
  });
  $('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    changecolor("red", 30);
  });
  function changecolor(color, padding) { 
    $('.slick-slider .slick-current').css("background-color", color);
    $('.slick-slider .slick-current').css("padding", padding);
    //$('.slick-slider').slick("setPosition");
  //  $('.slick-slider').slick('resize');
  }
  changecolor("red", 30);*/