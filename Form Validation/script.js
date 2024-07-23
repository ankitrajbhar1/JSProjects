const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cPassword');


//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


//for sending data
const sendData = (usernameVal,sRate, count) => {
    if(sRate === count){
        alert("welcome");
        Swal.fire({
            title: "Welcome!",
            text: "registration successfull",
            icon: "success"
          });
          location.href = 'demo.html?username=${usernameVal}'
    }
} 

//for validation completion
const SuccessMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    var sRate = -1;
    for(var i=0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            sRate++;
            console.log(sRate)
            sendData(usernameVal,sRate, count);
        }else{
            false;
        }
    }
}


//isEmail function
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}


// Validate function
const validate = () => {
    const usernameVal = username.value.trim();   // trim(): to remove the whitespaces before and after text
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // validate username
    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }

    // validate email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'not a valid email');
    }else{
        setSuccessMsg(email);
    }

    // phone
    if(phoneVal === ""){
        setErrorMsg(phone, 'phone number cannot be blank');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'not a valid phone number');
    }else{
        setSuccessMsg(phone);
    }


    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }else if(passwordVal.length < 8){
        setErrorMsg(password, 'greater than equal to 8 char');
    }else{
        setSuccessMsg(password);
    }

    //cpassword
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'password cannot be blank');
    }else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'password not matching');
    }else{
        setSuccessMsg(cpassword);
    }


    //sending data
    SuccessMsg(usernameVal);
}

function setErrorMsg(input, errorMsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errorMsg;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
