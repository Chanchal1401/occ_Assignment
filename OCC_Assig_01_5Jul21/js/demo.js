
function validate(){
    var fname = document.form.firstname;
    var lname = document.form.lastname;
    var email = document.form.email;
    var gen = document.form.gender;
    var course = document.form.course;

       
  /*console.log(document.form.firstname.value);
   console.log(document.form.lastname.value);
   console.log(document.form.gender.value);
   console.log(document.form.course.value);
   return false;*/
    
    if(fname.value.length <=0){
        alert("Name is required");
        fname.focus();
        return 0;
    }

    if(lname.value.length <=0){
        alert("Last name is required");
        lname.focus();
        return 0;
    }

    if(email.value.length <=0){
        alert("Email is required");
        lname.focus();
        return 0;
    }
}

let form = document.getElementById("formwrapper");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(form),
    result = {};

  for (var entry of formData.entries()) {
    result[entry[0]] = entry[1];
  }
  result = JSON.stringify(result);
  console.log(result);
});


