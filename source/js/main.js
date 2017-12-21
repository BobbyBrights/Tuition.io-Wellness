// @codekit-prepend "vendors.js"

function optimizer(){
  $optItem = $('.opt-options__item');
  $optItem.on('click', function(){
    $optItem.removeClass('active');
    $(this).addClass('active');
    $('#opt-2 .button').removeClass('inactive');
  });
  $optCheck = $('.optimizations-item input');
  $optCheck.change(function() {
    $('#opt-4 .button').removeClass('inactive');
  });
}

function forms(){
  var empty = false;
  $('.about-form-input').each(function() {
    if ($(this).val() === '') {
      empty = true;
    }
  });
  if (empty) {
    $('#opt-3 .button').addClass('inactive');
  } else {
    $('#opt-3 .button').removeClass('inactive');
  }
}

$(document).ready(function(){
  $('.lightbox').lightbox();
  $('.swap').swap();
  $("input[type='checkbox'], input[type='radio']").checkbox();
  $('.carousel').carousel();
  $('.equalize-parent').equalize({
    target: '.equalize-child'
  });
  $('.tab').tabs({
    theme: '',
    mobileMaxWidth: '320px'
  });
  $('.tab').on('update.tabs', function(){
    var tab = $(this).attr('href');
    $(tab).find(".equalize-parent").equalize("resize")
  });
  optimizer();
  $('.about-form').on('change', function(){
    forms()
  });
  //forms();
  //$(".sticky").sticky();
});