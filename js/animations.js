$(document).ready(function() {
  if ($(document).width() > 500) {
    $("#header-background-container").css("visibility", "visible").addClass("animated bounceInRight")
    $("#header-content").css("visibility", "visible").addClass("animated zoomIn")
  } else {
    $("#header-background-container").css("visibility", "visible").addClass("animated zoomIn")
    setTimeout(function() {
      $("#header-content").css("visibility", "visible").addClass("animated zoomIn")
    }, 700)
  }

  setTimeout(function() {
    $("#header-content a").css("visibility", "visible").addClass("animated jackInTheBox")
  }, 1200)
})
