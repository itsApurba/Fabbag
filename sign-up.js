document.querySelector("#masaiForm").addEventListener("submit",addMatch);
var personArr=JSON.parse(localStorage.getItem("schedule")) || []
function addMatch(){
    event.preventDefault();
    var matchObj={
        firstName:form.first_name.value,
        lastName:form.last_name.value,
        email:form.email.value,
        password:form.Password.value,
       
    }
    matchArr.push(matchObj);
    localStorage.setItem("schedule",JSON.stringify(matchArr))
    
    window.location.href="./matches.html";
}