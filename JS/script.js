
  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,             // Number of items per slide
      loop: true,           // Infinite loop
      margin: 10,           // Margin between items
      // nav: true,            // Show next/prev buttons
      autoplay: true,       // Enable auto sliding
      autoplayTimeout: 3000,// Time between slides (ms)
      responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 5 }
      }
    });
  });