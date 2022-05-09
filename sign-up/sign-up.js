document.querySelector("#form").addEventListener("submit",addPerson);
var personArr=JSON.parse(localStorage.getItem("personData")) || [];
function addPerson(){
    event.preventDefault();
    var personObj={
        fistName:form.firstName.value,
        lastName:form.lastName.value,
        email:form.email.value,
        password:form.password.value,
    }
    personArr.push(personObj);
    localStorage.setItem("personData",JSON.stringify(personArr))
    alert("Congratulation\ Your Account Is Created Successfully");
   
    form.reset()
}