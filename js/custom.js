(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(".navigation").onePageNav({
    scrollOffset: 0,
  });

  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse.collapse").removeClass("in");
  });

  $(".btn-get-started").on("click", function (e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        700
      );
    }
  });

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $(".navbar-default").css("display", "block");
      $(".navbar-default").addClass("fixed-to-top");
    } else if (scrollTop == 0) {
      $(".navbar-default").removeClass("fixed-to-top");
    }
  });

  var introCarousel = $("#introCarousel");
  var introCarouselIndicators = $("#intro-carousel-indicators");
  introCarousel
    .find(".carousel-inner")
    .children(".item")
    .each(function (index) {
      index === 0
        ? introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "'></li>"
          );

      $(this).css(
        "background-image",
        "url('" +
          $(this).children(".carousel-background").children("img").attr("src") +
          "')"
      );
      $(this).children(".carousel-background").remove();
    });

  if ($("#parallax1").length || $("#parallax2").length) {
    $(window).stellar({
      responsive: true,
      scrollProperty: "scroll",
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0,
    });
  }

  function navbar() {
    if ($(window).scrollTop() > 1) {
      $("#navigation").addClass("show-nav");
    } else {
      $("#navigation").removeClass("show-nav");
    }
  }

  $(document).ready(function () {
    var browserWidth = $(window).width();

    if (browserWidth > 560) {
      $(window).scroll(function () {
        navbar();
      });
    }
  });

  $(window).resize(function () {
    var browserWidth = $(window).width();

    if (browserWidth > 560) {
      $(window).scroll(function () {
        navbar();
      });
    }
  });

  $(".service .carousel").carousel({
    interval: 4000,
  });

  $(function () {
    Grid.init();
  });

  new WOW().init();
})(jQuery);
