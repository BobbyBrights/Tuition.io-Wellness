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

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
  }
});

