// --------------------------------------------------------- NavBar

$("#nav-btn").click(function () {
    $(this).toggleClass("animate");
        if ($(this).hasClass("animate")) {
            $("#nav-menu").addClass("animate");
        } else {
            $("#nav-menu").removeClass("animate");
        }
});

// sourced from http://jsfiddle.net/MCka4/
$("nav a").click(function () {
  $("#nav-btn").removeClass("animate");
  $("#nav-menu").removeClass("animate");
  $("#nav-menu a.active").removeClass("active");
  $(this).addClass("active");
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


// --------------------------------------------------------- Animate on Scroll
AOS.init({
  duration: 1200,
});