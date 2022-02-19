document.getElementById("submit-btn").addEventListener("click", ()=>{
  // create a funcation to get logine details
  function loginDetails(idName){
    const getInput=document.getElementById(idName)
    const getValue=getInput.value;
    getInput.value=""
    return getValue;
  };
  const getMail=loginDetails("email-field")
  const getPassword=loginDetails("password-field")
  if(getMail=="aktar@gmail.com" && getPassword=="123"){
    window.location.href="./bankAccount.html"
  }
  else{
    alert("mail or password not valid")
  }
})
