function save() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    let repassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let rephone =/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    //---------------Name----------------//
    if (name == "") {
        document.getElementById('uname_err').innerHTML = "Enter your Name !";
        document.getElementById('name').focus();
        return false;
    }
    if (name.length < 3) {
        document.getElementById('uname_err').innerHTML = "Enter minimum 3 character & Full name  !"
        document.getElementById('name').focus();
        return false;
    }

    else {
        document.getElementById('uname_err').innerHTML = '';
    }
    //---------------EMAIL----------------//
    if (email == "") {
        document.getElementById('email_err').innerHTML = "Enter your email !";
        document.getElementById('email').focus();
        return false;
    }
    if (!regEmail.test(email)) {
        document.getElementById('email_err').innerHTML = "Enter your vaild email !";
        document.getElementById('email').focus();
        return false;
    }
    else {
        document.getElementById('email_err').innerHTML = '';
    }
    //---------------PASSWORD----------------//
    if (password == "") {
        document.getElementById('pasw_err').innerHTML = "Enter your password !";
        document.getElementById('password').focus();
        return false;
    }
    if (!repassword.test(password)) {
        document.getElementById('pasw_err').innerHTML = "8 and 15 Digit and special character (.) enter please password !";
        document.getElementById('password').focus();
        return false;
    }
    else{
        document.getElementById('pasw_err').innerHTML ="";
    }
    //---------------ADDRESS----------------//
    if (address == "") {
        document.getElementById('address_err').innerHTML = "Enter your address !";
        document.getElementById('address').focus();
        return false;
    }
    if (address.length < 20) {
        document.getElementById('address_err').innerHTML = "Please enter your home number , city name , pincode number and phone number   !"
        document.getElementById('address').focus();
        return false;
    }
    else{
        document.getElementById('address_err').innerHTML = ""; 
    }
    //---------------PHONE NUMBER----------------//
    if (phone == "") {
        document.getElementById('phone_err').innerHTML = "Enter your phone";
        document.getElementById('phone').focus();
        return false;
    }
    if (!phone.match(rephone)) {
        document.getElementById('phone_err').innerHTML = "10 Digit enter please phone number!";
        document.getElementById('phone').focus();
        return false;
    }
    else{
        document.getElementById('phone_err').innerHTML ="";
    }
    return true;
}