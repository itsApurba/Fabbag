document.querySelector("#form").addEventListener("submit",addMatch);
var personArr=JSON.parse(localStorage.getItem("personData")) || []
function addPerson(){
    event.preventDefault();
    var personObj={
        firstName:form.first_name.value,
        lastName:form.last_name.value,
        email:form.email.value,
        password:form.Password.value,
       
    }
    personArr.push(personObj);
    localStorage.setItem("personData",JSON.stringify(matchArr))
    
    // window.location.href="./matches.html";
}