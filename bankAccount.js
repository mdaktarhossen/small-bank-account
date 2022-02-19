// deposite btn
document.getElementById("deposite-btn").addEventListener("click", ()=>{
  // get deposite inpute and value
  const depositeInpute=document.getElementById("deposite-input")
  const depositeInputeValue=parseFloat(depositeInpute.value);

  // get deposite amount tag and innterText;
  const depositeTag=document.getElementById("deposite-amount");
  const depositeAmount=parseFloat(depositeTag.innerText);

  // get balance tag;
  const balanceTag=document.getElementById("balance-amount")
  const balanceAmount=parseFloat(balanceTag.innerText);

  // set deposite inpute valu in balance value;
  depositeTag.innerText=depositeAmount+depositeInputeValue;
  balanceTag.innerText=balanceAmount+depositeInputeValue;
  // clear inpute value;
  depositeInpute.value=""
});

// withdrow btn;
document.getElementById("withdrow-btn").addEventListener("click", ()=>{
  // get withdrow inpute value and set withdrow tag;
  const withdrowInpute=document.getElementById("withdrow-input")
  const withdrowInputeValue=parseFloat(withdrowInpute.value);

  const withdrowTag=document.getElementById("withdrow-amount");
  const withdrowInnerText=parseFloat(withdrowTag.innerText);

  // set withdrow valu in withdrow span tag;
  withdrowTag.innerText=withdrowInnerText+withdrowInputeValue;

  // cut balance from withdrow inpute value;
  const balanceTag=document.getElementById("balance-amount")
  const balanceAmount=parseFloat(balanceTag.innerText);

  balanceTag.innerText=balanceAmount-withdrowInputeValue;

  // clear inpute;
  withdrowInpute.value="";
})