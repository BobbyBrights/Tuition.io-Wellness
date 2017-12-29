<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<link rel="shortcut icon" href="/assets/favicon.ico">
<link rel="stylesheet" href="assets/main.css">
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="//embedded-prequal.credible.com/client.min.js"></script>

<body id="wellness" class="fs-grid">
<div id="wrapper">
  <div id="nav" class="nav sticky">
    <div class="fs-row">
      <div class="fs-cell fs-lg-9 fs-md-half fs-sm-half">
        <a href="index.html" class="nav-button-logo"><img src="assets/chegg.png" alt="" class="nav-button-logo"></a>
        <a href="index.html" class="nav-button nav-button--em fs-md-hide fs-sm-hide">Student Loan Repayment Benefit powered by tuition.io</a>
      </div>
      <div class="fs-cell fs-lg-3 fs-md-half fs-sm-half text-right nav-button-wrapper">
        <a href="#" class="nav-button nav-button--powered nav-button--em fs-md-hide fs-lg-hide">Student Loan Repayment Benefit powered by tuition.io</a>
        <a href="#" class="nav-button nav-button--em fs-sm-hide">Hello, Alex</a>
        <a href="#" class="nav-button nav-button-signout  fs-sm-hide">Sign Out</a>
      </div>
    </div>
  </div>
  <div id="nav-sub" class="nav nav--bottom">
    <div class="fs-row">
      <div class="fs-cell fs-lg-full fs-md-6 fs-sm-hide fs-all-justify-center">
        <div class="fs-row">
          <a href="employercontribution.html" class="fs-cell fs-all-third"><span class="nav-button nav-button-bottom nav-button--inactive">Overview</span></a>
          <a href="myloans.html" class="fs-cell fs-all-third text-center"><span class="nav-button nav-button-bottom nav-button--inactive">My Loans</span></a>
          <div class="fs-cell fs-all-third text-right sub-parent relative">
            <a href="index.html" class=""><span class="nav-button nav-button-bottom nav-button--active">Student Loans 101</span></a>
            <div id="nav-sub-drawer" class="sub-child">
              <div class="fs-row">
                <div class="fs-cell fs-all-full">
                  <div id="nav-sub-drawer-wrapper">
                    <span class="sub-child-label">College Prep</span>
                    <a href="payingforcollege.html">How to Pay For It</a>
                    <a href="collegecostcalc.html">Calculate the Cost</a>
                    <a href="glossary.html">Master the Jargon</a>
                    <hr class="invisible compact">
                    <span class="sub-child-label">Loan Counseling</span>
                    <a href="askjeni.html">Ask Our Student Loan Coach</a>
                    <a href="optimizer.html">Optimize My Payoff</a>
                    <a href="refinancing.html">Refinancing</a>
                    <a href="coffee.html">Coffee or College</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="nav-mobile">
    <a href="employercontribution.html" class="fs-cell fs-all-third"><span class="nav-button first">Overview</span></a>
    <a href="myloans.html" class="fs-cell fs-all-third text-center"><span class="nav-button">My Loans</span></a>
    <a href="index.html" class="fs-cell fs-all-third text-right"><span class="nav-button last">Student Loans 101</span></a>
  </div>

<div class="page-header simple">
  <div class="fs-row">
    <div class="fs-cell fs-all-full text-center">
      <h1 class="page-header-title top">Coffee or College</h1>
      <span class="page-header-subtitle">Find out how much you need to save for college</span>
    </div>
  </div>
</div>

<?php include ('lib/PayOffProjection.php'); ?>

<div class="fs-row">
  <div class="fs-cell fs-all-full">
    <div class="coffee page-content">
      <div class="coffee-inner fs-row">
        <div class="fs-cell fs-lg-8 fs-md-4 fs-sm-3 fs-all-justify-center">
          <div class="coffee-title text-center">
            If I bought <span class="coffee-qty coffee-var">5</span> coffees less per week and put the money have a higher interest rate than towards my student loan debt, how much could I save?
          </div>
          <hr class="invisible">
          <div class="coffee-slider fs-cell fs-lg-10 fs-md-4 fs-sm-3 fs-contained fs-all-justify-center">
            <form id="coffeeform" action="" method="post">
              <input data-slider-id='ex1Slider' type="range" data-slider-min="1" data-slider-max="10" data-slider-step="1" data-slider-value="5" name="contribution" id="contribution" class="contribution" />
            </form>
          </div>
          <hr class="invisible">
          <div class="coffee-calculator text-center">
            <span class="coffee-qty coffee-var">5</span> coffees per week x 
            $<span class="coffee-cost coffee-var">3.50</span> per coffee =
            $<span class="coffee-result coffee-var">910</span> per year
          </div>
          <hr class="invisible compact">
          <div class="coffee-calculator text-center">
            <div>Pay off <span class="coffee-early coffee-var"><?php echo $time_savings->format('%y years and %m months'); ?></span> early</div>
            <div>Save $<span class="coffee-interest coffee-var"><?php echo $interest_savings ?></span> on interest</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  
  $(document).ready(function(e){

    var mySlider = $("#contribution").slider({
      tooltip: 'always',
      formatter: function(value) {
        return value;
      }
    });

    $("#contribution").slider().on('slideStop',function(e){

      coffees = mySlider.slider('getValue');
      coffeecost = parseInt($('.coffee-cost').html());
      results = (coffees*coffeecost)*52;
      $('.coffee-qty').html(coffees);
      $('.coffee-result').html(results);
      $('.coffee-early').html(<?php echo json_encode($time_savings->format('%y years and %m months')) ?>);
      $('.coffee-interest').html('<?php echo json_encode($interest_savings) ?>');

      var formData = {
        'contribution' : $('input[name=contribution]').val(),
      };

      $.ajax({
        type: 'POST',
        url: 'lib/process.php',
        data: formData,
        dataType: 'json',
        encode: true,
      }).done(function(data){
        console.log(<?php echo json_encode($time_savings->format('%y years and %m months')) ?>);
        console.log(<?php echo json_encode($interest_savings) ?>);
      });
      
      e.preventDefault();

    });

  });
</script>

<hr class="invisible">

<div id="footer-jeni" class="footer footer-jeni">
  <div class="fs-row">
    <div class="fs-cell fs-all-full">
      <a href="askjeni.html">
        <p class="ss-gizmo ss-chat">Still have questions? <strong>Ask Jeni</strong></p>
      </a>
    </div>
  </div>
</div>
  <div id="footer" class="footer">
    <div class="fs-row">
      <div class="fs-cell fs-lg-10 fs-md-full fs-sm-3 fs-all-justify-center">
        <div class="fs-row">
          <div class="fs-cell fs-lg-fourth fs-md-fourth fs-sm-3">
            <h4 class="footer-title">tuition.io</h4>
            <ul class="menu">
              <li class="menu-item"><a href="#"><span>Press</span></a></li>
              <li class="menu-item"><a href="#"><span>FAQ</span></a></li>
            </ul>
          </div>
          <div class="fs-cell fs-lg-fourth fs-md-fourth fs-sm-3">
            <h4 class="footer-title">Company</h4>
            <ul class="menu">
              <li class="menu-item"><a href="#"><span>About Us</span></a></li>
              <li class="menu-item"><a href="#"><span>Latest News</span></a></li>
              <li class="menu-item"><a href="#"><span>Press Releases</span></a></li>
            </ul>
          </div>
          <div class="fs-cell fs-lg-fourth fs-md-fourth fs-sm-3">
            <h4 class="footer-title">Need Help</h4>
            <ul class="menu">
              <li class="menu-item"><a href="#"><span>Press</span></a></li>
              <li class="menu-item"><a href="#"><span>FAQ</span></a></li>
            </ul>
          </div>
          <div class="fs-cell fs-lg-fourth fs-md-fourth fs-sm-3">
            <h4 class="footer-title">Connect</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="nav-locked">
  <div id="nav-locked__inside">
    <div class="centered">
      <span class="ss-gizmo ss-lock"></span>
      <h3>Sorry, this content is locked</h3>
    </div>
  </div>
</div>

<script src="assets/main.js"></script>
</body>
</html>