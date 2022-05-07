document.querySelector(".subBtn1").addEventListener("click",myfun)

function myfun(){
  var email = document.querySelector("#email").value

  var password = document.querySelector("#password").value

  var arr = JSON.parse(localStorage.getItem("data"))

  for(var i=0 ; i<arr.length ; i++)
  {
    if(email == arr[i].eMail && password == arr[i].passWord)
    {
      alert("Login sucsessfully")
      return
    }
    else
    {
      alert("Either input or password is Incorrect")
      return
    }
  }
  
}