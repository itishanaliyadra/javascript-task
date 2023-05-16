let username = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');

function save() {
    console.log("done");
    let namedata = document.getElementById('uname_err');
    let passworddata = document.getElementById('pasw_err');
    let emaildata = document.getElementById('email_err');
    if (username.value == "") {
        namedata.innerHTML = " Please enter a name";
        namedata.focus();
    }
    else if (username.value.length < 3) {
        namedata.innerHTML = " Please enter a name 3 character";
    } 
    else {
        namedata.innerHTML = ''
    }

    if (password.value == "") {
        passworddata.innerHTML = "Please enter a password";
    }
    else if (password.value.length < 6) {
        passworddata.innerHTML = "Please enter a password 6 character";
    } 
    else {
        passworddata.innerHTML = ''
    }
    if (email.value == "") {
        emaildata.innerHTML = "Please enter a email";
        emaildata.focus();
    }
    else{
        emaildata.innerHTML ='';
    }
    if (namedata.innerHTML == "" && emaildata.innerHTML == "" && passworddata.innerHTML == "") {
        return true;
    }
    else {
        return false;
    }
}