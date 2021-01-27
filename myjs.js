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

//witwhdraw event handler....
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click',function(){
  const  withdrawAmount =  document.getElementById('withdrawAmount').value;
  const  withdrawAmountNumber = parseFloat(withdrawAmount);
  const  withdrawBalance = document.getElementById('withdrawBalance').innerText;
  const withdrawNumber = parseFloat(withdrawBalance);
  const totalWithdrawAmount =  withdrawAmountNumber + withdrawNumber;
  
  document.getElementById('withdrawBalance').innerText = totalWithdrawAmount;
  document.getElementById('withdrawAmount').value = "";
  
  totalwithdraw('totalBalance', totalWithdrawAmount);

  
});
function totalwithdraw(id,totalWithdrawAmount){
    const totalDeposit = document.getElementById(id).innerText;
    const totalDepositNumber = parseFloat(totalDeposit);
    
    const total = totalDepositNumber - totalWithdrawAmount;
    if(total < 0){
        alert('You have no sufficient Balance');
    }else{
    document.getElementById(id).innerText = total;
    }
}



function totalSpan(id,depositNumber){
    const totalDeposit = document.getElementById(id).innerText;
    const totalDepositNumber = parseFloat(totalDeposit);
    const total = totalDepositNumber + depositNumber;
    document.getElementById(id).innerText = total;
}