// @codekit-prepend "vendors.js"

$(document).ready(function(){
  $('.lightbox').lightbox();
  $('.swap').swap();
  $('.tab').tabs({
    theme: '',
    mobileMaxWidth: '320px'
  });
  //$(".sticky").sticky();
});