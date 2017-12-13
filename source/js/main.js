// @codekit-prepend "vendors.js"

$(document).ready(function(){
  $('.lightbox').lightbox();
  $('.swap').swap();
  $('.equalize').equalize({
    target: '.equalize-child'
  });
  $('.tab').tabs({
    theme: '',
    mobileMaxWidth: '320px'
  });
  //$(".sticky").sticky();
});