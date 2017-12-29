$(document).ready(function(){

  var mySlider = $("#contribution").slider({
    tooltip: 'always',
    formatter: function(value) {
      return value;
    }
  });

  moveSlider();

  $("#contribution").slider().on('slideStop',function(){
    moveSlider();
  });

  function moveSlider(){

    coffees = mySlider.slider('getValue');
    coffeecost = parseInt($('.coffee-cost').html());
    results = (coffees*coffeecost)*52;
    $('.coffee-qty').html(coffees);
    $('.coffee-result').html(results);

    var industryData = {
      advertising   : { "age": 43, "turnover": .178, "withLoans": .37, "maxPayments":120, "averageBalance": 37172, "averageDebtLength" : 236, "averageRate": 5.5 },
    }

    var industry = 'advertising';
    var configData = industryData[industry];
    var turnover = configData.turnover;

    var loanAmount = 30000;
    var interestRate = 5.5;
    var termInYears = 28.5;

    //var coffees = mySlider.slider('getValue');
    var coffeecostperyear = (coffees*coffeecost)*52;
    var extraAmount = coffeecostperyear/12;

    console.log(extraAmount);

    var expectedLengthOfService = .86 *5 + .14/turnover/2;
    var expectedLengthOfServiceInMonths = Math.floor(expectedLengthOfService)*12 
    + Math.floor(12 * (expectedLengthOfService- Math.floor(expectedLengthOfService)));

    var loanOptions = {
      loanTermMonths: Math.floor(termInYears*12),
      salePrice: loanAmount,
      interestRate : interestRate,
      downPayment : "0%"
    }

    var unmodifiedLoan = MortgageCalculator.calculateMortgage(loanOptions);
    extraPaymentMonths = expectedLengthOfServiceInMonths > configData.maxPayments ? configData.maxPayments : expectedLengthOfServiceInMonths;

    loanOptions.extras = [
      {
        startMonth: 1,
        endMonth: extraPaymentMonths,
        extraIntervalMonths: 1,
        extraAmount: extraAmount
      }
    ];

    var modifiedLoan = MortgageCalculator.calculateMortgage(loanOptions);
    var sumOfExtraPayments = extraPaymentMonths * extraAmount;
    var interestSavings = Math.floor(unmodifiedLoan.totalLoanCost - modifiedLoan.totalLoanCost);
    var totalSavings = sumOfExtraPayments + interestSavings;
    var monthsSaved = modifiedLoan.loanTermMonths - modifiedLoan.numberOfPayments;
    var yearsSaved = Math.round((monthsSaved) / 12);
    var months = monthsSaved;
    var money = interestSavings.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    $('.coffee-early').html((months / 12 | 0) + " years and " + months % 12 +" months");
    $('.coffee-interest').html(money);

  }

});