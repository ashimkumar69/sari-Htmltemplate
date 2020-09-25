"use strict";
$(document).ready(function () {
  // banner slider
  $(".slick-banner").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // side bar toggle
  $("#openSlideMenu").click(function (e) {
    e.preventDefault();
    $("#side_menu").css("width", "300px");
    $("#main").css("margin-left", "300px");
  });

  $("#closeSlideMenu").click(function (e) {
    e.preventDefault();
    $("#side_menu").css("width", "0px");
    $("#main").css("margin-left", "0px");
  });

  // end
});
