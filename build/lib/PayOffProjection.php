<?php

if ($_POST) {

    $cups = $_POST['contribution'];
    $result = ($cups*3.5*52)/12;

    $standard_payment = getPayoffProjection(30000, 5.5, 200, 0);
    $extra_payment = getPayoffProjection(30000, 5.5, 200, $result);

    $interest_savings = round($standard_payment['total_interest'] - $extra_payment['total_interest'], 2);
    $time_savings = $standard_payment['date']->diff($extra_payment['date']);

} else {

    $cups = 7;
    $result = ($cups*3.5*52)/12;

    $standard_payment = getPayoffProjection(30000, 5.5, 200, 0);
    $extra_payment = getPayoffProjection(30000, 5.5, 200, $result);
    $interest_savings = round($standard_payment['total_interest'] - $extra_payment['total_interest'], 2);
    $time_savings = $standard_payment['date']->diff($extra_payment['date']);

}

#echo 'Interest Savings: $' . $interest_savings . PHP_EOL;
#echo 'Time Savings: ' . $time_savings->format('%y years and %m months') . PHP_EOL;

/**
 * PayoffProjection
 *
 * @param int|float $principal - loan amount
 * @param int|float $rate - loan interest rate in percentage
 * @param int|float $payment - monthly payment
 * @param int|float $extra_payment - addition monthly payment
 * @return array
 */
function getPayoffProjection($principal, $rate, $payment, $extra_payment) {

    $max_months = 100 * 12;
    $interest_rate = (($rate / 100.0) / 12.0);

    $interest_accrued = 0;
    $month_count = 0;

    $date_time = new DateTime('first day of this month');

    while ($principal >= ($payment + $extra_payment)) {

        $interest_due = $principal * $interest_rate;
        $principal += $interest_due;
        $interest_accrued += $interest_due;

        $principal -= $payment;
        $principal -= $extra_payment;

        if ($month_count > $max_months) {
            return [
                'amount' => max($principal, 0),
                'total_interest' => round($interest_accrued, 2),
                'total' => ($payment)
                    ? round((($payment + $extra_payment) * $month_count), 2)
                    : round(($amount + $interest_accrued), 2),
                'date' => $date_time
            ];
        }

        ++$month_count;
        $date_time->modify('+1 month');
    }

    $interest_due = $principal * $interest_rate;
    $principal += $interest_due;
    $interest_accrued += $interest_due;
    $total = (($payment + $extra_payment) * $month_count) + $principal;

    return [
        'amount' => 0,
        'total_interest' => round($interest_accrued, 2),
        'total' => round($total, 2),
        'date' => $date_time
    ];
}
