var MortgageCalculator={calculateMortgage:function(t){function a(t){var a={};return a.loanTermMonths=t.loanTermMonths||360,a.salePrice=t.salePrice||5e5,a.interestRate=t.interestRate||5,a.downPayment=t.downPayment||"20%",a.salePrice=t.salePrice||5e5,a.extras=t.extras||[],a.propertyTaxRate=t.propertyTaxRate||0,a.homeInsurance=t.homeInsurance||0,a.adjustFixedRateMonths=t.adjustFixedRateMonths||0,a.adjustInitialCap=t.adjustInitialCap||0,a.adjustPeriodicCap=t.adjustPeriodicCap||0,a.adjustLifetimeCap=t.adjustLifetimeCap||0,a.adjustIntervalMonths=t.adjustIntervalMonths||12,a.startDate=t.startDate||new Date,a}function e(t){var a;if("string"==typeof t.downPayment){var e=t.downPayment.substr(0,t.downPayment.indexOf("%"));a=t.salePrice-t.salePrice*(e/100)}else a=t.salePrice-t.downPayment;return a}function n(t){var a=2;return Math.round(t*Math.pow(10,2))/Math.pow(10,2)}function r(t){return t.monthlyPayment=n(t.monthlyPayment),t.interest=n(t.interest),t.interestToDate=n(t.interestToDate),t.interestLoanYearToDate=n(t.interestLoanYearToDate),t.principal=n(t.principal),t.principalLoanYearToDate=n(t.principalLoanYearToDate),t.principalToDate=n(t.principalToDate),t.extra=n(t.extra),t.principalTotal=n(t.principalTotal),t.paymentTotal=n(t.paymentTotal),t}function o(t,a){var e=0;if(t.extras)for(var n in t.extras){var r=t.extras[n];a>=r.startMonth&&a<=r.endMonth&&(a-r.startMonth)%r.extraIntervalMonths==0&&(e+=100*r.extraAmount)}return e}function i(t){return t/1200}function s(a){var e;return e=a.propertyTaxRate&&a.propertyTaxRate>0?100*a.salePrice*(t.propertyTaxRate/100)/12:0}function p(t,a){return!(t.adjustFixedRateMonths<=0||a<=t.adjustFixedRateMonths)&&(a-t.adjustFixedRateMonths-1)%t.adjustIntervalMonths==0}function l(t,a){if(t.adjustFixedRateMonths<=0||a<=t.adjustFixedRateMonths)return t.interestRate;var e=t.interestRate+t.adjustInitialCap;if(a>t.adjustFixedRateMonths+1)for(var n=t.adjustFixedRateMonths+t.adjustIntervalMonths;n<=a;n+=t.adjustIntervalMonths)e+=t.adjustPeriodicCap;return e=Math.min(e,t.adjustLifetimeCap+t.interestRate)}function u(t,a,e){var n=i(e);return t*(n*Math.pow(1+n,a))/(Math.pow(1+n,a)-1)}function h(t){for(var a=100*t.loanAmount,e=100*t.loanAmount,r=s(t),h=[],c,d=0,m=1,M={},y=l(t,1),T=u(a,t.loanTermMonths,y),f=["interest","principal","extra","principalTotal","propertyTax","paymentTotal"];a>=1;){d++;var D={};p(t,d)&&(y=l(t,d),T=u(a,t.loanTermMonths+1-d,y)),D.interestRate=y,D.scheduledMonthlyPayment=T,D.interest=a*i(D.interestRate),D.principal=T-D.interest,a<D.principal?(D.principal=a,D.extra=0):D.extra=o(t,d),D.principalTotal=D.principal+D.extra,D.propertyTax=r,D.paymentTotal=D.interest+D.principalTotal+r,D.paymentDate=new Date(t.startDate.getTime()).addMonths(d),a-=D.principalTotal,a<0&&(a=0),D.remainingLoanBalnce=a,D.loanMonth=d,D.loanYear=m,f.map(function(t){M[t]?M[t]+=D[t]:M[t]=D[t],D[t+"LoanYearToDate"]=M[t]}),d%12==0&&(M={},m++),f.map(function(t){D[t+"ToDate"]=c?c[t+"ToDate"]+D[t]:D[t]}),c=D,h.push(D)}t.totalLoanCost=0;for(var x=["scheduledMonthlyPayment","remainingLoanBalnce"],v=0;v<h.length;v++){var D=h[v];f.map(function(t){D[t]=n(D[t]/100),D[t+"ToDate"]=n(D[t+"ToDate"]/100),D[t+"LoanYearToDate"]=n(D[t+"LoanYearToDate"]/100)}),x.map(function(t){D[t]=n(D[t]/100)}),t.totalLoanCost+=D.interest}t.totalLoanCost=n(t.totalLoanCost),t.paymentSchedule=h,t.numberOfPayments=t.paymentSchedule.length,t.monthlyPayment=t.paymentSchedule[0].scheduledMonthlyPayment}Date.isLeapYear=function(t){return t%4==0&&t%100!=0||t%400==0},Date.getDaysInMonth=function(t,a){return[31,Date.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][a]},Date.prototype.isLeapYear=function(){var t=this.getFullYear();return t%4==0&&t%100!=0||t%400==0},Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth())},Date.prototype.addMonths=function(t){var a=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+t),this.setDate(Math.min(a,this.getDaysInMonth())),this};var c=a(t);return c.loanAmount=e(c),h(c),c}};