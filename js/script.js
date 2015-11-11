$(document).ready(function(){

// WHEN IN MOBILE VERSION ADD THE HAMBURGER MENU BUTTON
if ($(window).width() < 500) {
  $("button").add()
}
// IF THE WINDOW WIDTH IS OVER 500PX, REMOVE THE BUTTON
else {
  $("button").remove()
  $("gallery js-flickity").remove('"resize": true')
}

});

// CLICK ON HAMBURGER MENU BUTTON
$("button").click(function(){
  // TOGGLE NAV MENU
  $(".mainmenu").toggle();
})
