// @codekit-prepend "vendors.js"

function optimizer(){
  
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
  //$("input[type='checkbox'], input[type='radio']").checkbox();
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