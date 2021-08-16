document.getElementById('deposit-submit').addEventListener('click', function () {
    //deposit
    const depositMail = document.getElementById('deposit-mail');
    const mailValue = depositMail.value;
    // console.log(mailValue);

    const depositAmount = document.getElementById('deposit-amount');
    const amountValueText = depositAmount.value;
    const amountValue = parseFloat(amountValueText);
    // console.log(amountValue);

    const depositTotal = document.getElementById('deposit-total');
    const prevDepositText = depositTotal.innerText;
    const prevDeposit = parseFloat(prevDepositText);
    const currentdepositTotal = prevDeposit + amountValue;
    depositTotal.innerText = currentdepositTotal;
    // console.log(currentdepositTotal);


    //balance updated after adding deposit
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalance = parseFloat(prevBalanceText);
    const updatedBalance = prevBalance + amountValue;
    balanceTotal.innerText = updatedBalance;

    depositMail.value = '';
    depositAmount.value = '';
});
//withdraw
document.getElementById('withdraw-submit').addEventListener('click', function () {
    const withdrawalMail = document.getElementById('withdraw-mail');
    const withdrawalValue = withdrawalMail.value;
    // console.log(withdrawalValue);

    const withdrawalAmount = document.getElementById('withdraw-amount');
    const withdrawalAmountValueText = withdrawalAmount.value;
    const withdrawalAmountValue = parseFloat(withdrawalAmountValueText);
    // console.log(withdrawalAmountValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawalText = withdrawTotal.innerText;
    const prevWithdraw = parseFloat(prevWithdrawalText);
    const currentWithdrawTotal = prevWithdraw + withdrawalAmountValue;
    withdrawTotal.innerText = currentWithdrawTotal;
    // console.log(currentWithdrawTotal);



    //balance after updating withdrawal amount
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalance = parseFloat(prevBalanceText);
    const updatedBalance = prevBalance - withdrawalAmountValue;
    balanceTotal.innerText = updatedBalance;

    withdrawalMail.value = '';
    withdrawalAmount.value = '';
});