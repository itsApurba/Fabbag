document.querySelector("#form").addEventListener("submit",addPerson);
var personArr=JSON.parse(localStorage.getItem("personData")) || []
function addPerson(){
    event.preventDefault();
    var personObj={
        firstName:form.first_name.value,     
        lastName:form.last_name.value,
        email:form.email.value,
        password:form.Password.value,
       
    }
    console.log(personObj)
    personArr.push(personObj);
    localStorage.setItem("personData",JSON.stringify(personArr))
    console.log(personArr)
    // window.location.href="./matches.html";
}