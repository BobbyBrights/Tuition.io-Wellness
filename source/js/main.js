// @codekit-prepend "vendors.js"

function optimizer(){
  $optItem = $('.opt-options__item');
  $optItem.on('click', function(){
    $optItem.removeClass('active');
    $(this).addClass('active');
  })
}

$(document).ready(function(){
  $('.lightbox').lightbox();
  $('.swap').swap();
  $('.carousel').carousel();
  $('.equalize').equalize({
    target: '.equalize-child'
  });
  $('.tab').tabs({
    theme: '',
    mobileMaxWidth: '320px'
  });
  optimizer();
  //$(".sticky").sticky();
});