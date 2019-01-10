
var fullname=document.forms.myform.fullname;
var email=document.forms.myform.email;
var password1=document.forms.myform.password1;
var password12=document.forms.myform.password2;
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
var error3=document.getElementById("error3");
var error4=document.getElementById("error4");


function fun(){
    
    if(fullname.value=="" || fullname=="" || fullname.value.length<3 ){
           error1.style.display="block";

        return false
    }

    if(email.value=="" || email.value.length<3 || email.value.indexOf("@")==-1) {
        error2.style.display="block";
        email.focus();

     return false
 }
 if(password1.value=="" || password1.value.length<8){
    error3.style.display="block";
    password1.focus();

 return false
}


if(password1  !==password2){
    error4.style.display="block";
    password2.focus();

}



}

