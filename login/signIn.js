document.querySelector(".subBtn1").addEventListener("click",myfun)

function myfun(){
  var email = document.querySelector("#email").value

  var password = document.querySelector("#password").value

  var arr = JSON.parse(localStorage.getItem("personData"))

  for(var i=0 ; i<arr.length ; i++)
  {
    if(email == arr[i].email && password == arr[i].password)
    {
      alert("Login sucsessfully")
      window.location.href = "../index.html"
      return
    }
    else
    {
      alert("Either input or password is Incorrect")
      return
    }
  }
  
}