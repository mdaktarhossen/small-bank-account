// deposite btn
document.getElementById("deposite-btn").addEventListener("click", ()=>{
  const depositeInpute=document.getElementById("deposite-input")
  const depositeInputeValue=parseFloat(depositeInpute.value);

  // funcation create to set deposite and balance innertext
  function setBalanceAndDep(idName){
    const getTag=document.getElementById(idName);
    const getAmount=parseFloat(getTag.innerText);
    getTag.innerText=getAmount+depositeInputeValue;
    depositeInpute.value=""
    
  }
  // funcation calling for deposite and balance
  const depositeAmount=setBalanceAndDep("deposite-amount");
  const balanceAmount=setBalanceAndDep("balance-amount");
});

// withdrow btn;
document.getElementById("withdrow-btn").addEventListener("click", ()=>{
  // get withdrow inpute value and set withdrow tag;
  const withdrowInpute=document.getElementById("withdrow-input")
  const withdrowInputeValue=parseFloat(withdrowInpute.value);

  function aktar(idName){
    const getTag=document.getElementById(idName);
    const getAmount=parseFloat(getTag.innerText);
    getTag.innerText=getAmount+withdrowInputeValue;
    withdrowInpute.value="";
    return getAmount;
  }
  const withdrowAmount=aktar("withdrow-amount");

  const balanceTag=document.getElementById("balance-amount")
  const balanceAmount=parseFloat(balanceTag.innerText);
  console.log(balanceAmount)
  balanceTag.innerText=balanceAmount-withdrowInputeValue;
});