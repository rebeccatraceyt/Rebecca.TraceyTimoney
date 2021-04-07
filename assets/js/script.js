$(window).on("load", function () {
  // ------------------------------ NavBar

  $("#nav-btn").click(function () {
    $(this).toggleClass("animate");
    if ($(this).hasClass("animate")) {
        $("#nav-menu ul li").css("display", "block");
      $("#nav-menu").addClass("animate");
      console.log("SOMETHING");
    } else {
      $("#nav-menu").removeClass("animate");
      console.log("SOMETHING ELSE");
    }
  });

  // sourced from http://jsfiddle.net/MCka4/
  $("nav a").click(function () {
    $("#nav-btn").removeClass("animate");
    $("#nav-menu").removeClass("animate");
    $("#nav-menu a.active").removeClass("active");
    $(this).addClass("active");
    console.log("SOMETHING SOMETHING ELSE");
  });

  $(window).scroll(function () {
    var href = $(this).scrollTop();
    $(".nav-link").each(function (event) {
      if (href >= $($(this).attr("href")).offset().top - 1) {
        $("#nav-menu a.active").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});

// ------------------------------ Animate on Scroll
  AOS.init({
      duration: 1200,
    });


