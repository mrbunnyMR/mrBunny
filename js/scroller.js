$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".mainNav").addClass("activeNav");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".mainNav").removeClass("activeNav");
    }
  });
});
