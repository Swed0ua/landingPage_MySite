let ScreenWidth = document.documentElement.clientWidth;
let ScreenHeight = document.documentElement.clientHeight;


$(window).scroll(function() {
    $('.descriptions__item').each(function(){
      var imagePos = $(this).offset().top;
      var elem = $('.description').offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elem < topOfWindow+500) {
        $(this).addClass('ass');
      }
    });
  });

  
  
  
  $(window).scroll(function() {
    $('.portfolio__left').each(function(){
      var imagePos = $(this).offset().top;
      var elem = $('.portfolio').offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elem < topOfWindow + 500) {
        $(this).addClass('portfolio__AnimL');
      }
    });
  });

  
  $(window).scroll(function() {
    $('.portfolio__right').each(function(){
      var imagePos = $(this).offset().top;
      var elem = $('.portfolio').offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elem < topOfWindow + 500) {
        $(this).addClass('portfolio__AnimR');
      }
    });
  });