$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle() ;
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#walrus-smile-showing").slideToggle();
    $("#walrus-smile-hidden").slideToggle() ;
  });
});
