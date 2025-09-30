var swiper = new Swiper(".mySwiper", {
    loop:true,
      autoplay:{
        delay:2500,
        // disableOnIteration:false,
      },
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    