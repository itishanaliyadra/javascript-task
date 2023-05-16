let userdata = JSON.parse(localStorage.getItem('userloging'));
let userimg = document.getElementsByClassName('user');
let uname = document.getElementsByClassName('username');
for (let i in uname) {
    uname[i].innerHTML = userdata[0].name
}
for (let j in userimg) {
    userimg[j].src = userdata[0].images
}




