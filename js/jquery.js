$(function(){
  // menu
  $("header .main-menu>li").mouseenter(function(){
    $("header").addClass('hover');
  });
  $("header").mouseleave(function(){
    $("header").removeClass('hover');
  });

  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("header").addClass("active");
    }else{
        $("header").removeClass("active");
    }
})
  // main
  $(".main .visual").click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
    // $(this).next().removeClass('active')
  });
  // swiper
  $(".swiper-button-next").click(function(){
    $(".ex-text.active").next(".ex-text").addClass('active')
    $(".ex-text.active").prev().removeClass('active')
  })
  $(".swiper-button-prev").click(function(){
    $(".ex-text.active").prev(".ex-text").addClass('active')
    $(".ex-text.active").next().removeClass('active')
  })
  $(".digital_museum").hover(function(){
    $(this).children(".video_text").addClass('active')
  }, function(){
    $(this).children(".video_text").removeClass('active')
  })
})