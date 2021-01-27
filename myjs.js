var loginButton = document.getElementById('btn');
var loginArea = document.getElementById('login-area');
var trans = document.getElementById('transaction-area');


//Login area---
loginButton.addEventListener('click',function(){
    loginArea.style.display='none';
    trans.style.display='block';

});

//deposit event handleer....

const dipositBtn = document.getElementById('deposit');
dipositBtn.addEventListener('click',function(){
    const depositAmount = document.getElementById('diposit-amount').value;
    const depositNumber = parseFloat(depositAmount);

   
    totalSpan('totalDiposit',depositNumber);
    document.getElementById('diposit-amount').value = "";

totalSpan('totalBalance',depositNumber);
    
    
});
function totalSpan(id,depositNumber){
    const totalDeposit = document.getElementById(id).innerText;
    const totalDepositNumber = parseFloat(totalDeposit);
    const total = totalDepositNumber + depositNumber;
    document.getElementById(id).innerText = total;
}