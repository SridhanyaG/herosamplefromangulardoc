$(document).ready(function() {

  $(window).resize(function () {
    collapseDescriptionIfNeeded();
  });

  function collapseDescriptionIfNeeded() {
    let smallDevices = $(window).width() < 768;
    if (smallDevices) {
      $(".description").addClass("collapse");
    } else {
      $(".description").removeClass("collapse");
    }
  }
  collapseDescriptionIfNeeded();
});