document.getElementById('deposit-submit').addEventListener('click', function () {
    const depositMail = document.getElementById('deposit-mail');
    const mailValue = depositMail.value;
    console.log(mailValue);

    const depositAmount = document.getElementById('deposit-amount');
    const amountValueText = depositAmount.value;
    const amountValue = parseFloat(amountValueText);
    console.log(amountValue);

    const depositTotal = document.getElementById('deposit-total');
    const prevDepositText = depositTotal.innerText;
    const prevDeposit = parseFloat(prevDepositText);
    const currentdepositTotal = prevDeposit + amountValue;
    depositTotal.innerText = currentdepositTotal;
    console.log(currentdepositTotal);
    depositMail.value = '';
    depositAmount.value = '';

    //balance
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalance = parseFloat(prevBalanceText);
    const updatedBalance = prevBalance + amountValue;
    balanceTotal.innerText = updatedBalance;

    depositMail.value = '';
    depositAmount.value = '';
})