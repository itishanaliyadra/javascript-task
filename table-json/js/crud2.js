let record = [      ];
let val = JSON.parse(localStorage.getItem('user'));
data();
function data() {
    let newdata = JSON.parse(localStorage.getItem('user'));
    let tbl = ""
    tbl += `
    <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>EMAIl</td>
        <td>PHONE</td>
        <td>Alicon</td>
    </tr>
    `
    for (let i in newdata) {
        tbl += `
        <tr>
            <td>${newdata[i].id}</td>
            <td>${newdata[i].name}</td>
            <td>${newdata[i].email}</td>
            <td>${newdata[i].phone}</td>
            <td>
            <button onclick="update(${newdata[i].id})">updated</button>
            <button onclick="delet(${newdata[i].id})">Delete</button>
            </td>
        </tr>
            `
    }
    document.getElementById('show').innerHTML = tbl;
}
function save() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let obj = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        email: email,
        phone: phone
    }
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
        record.push(obj);
        localStorage.setItem('user', JSON.stringify(record));
        data();
    }
    else {
        let newrecord = JSON.parse(localStorage.getItem('user'));
        newrecord.push(obj);
        localStorage.setItem('user', JSON.stringify(newrecord));
        data();
    }
    alert("Record is succesfully add !");
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";

}
function delet(id) {

    for (let i in val) {
        if (val[i].id == id) {
            val.splice(i, 1);
        }
        localStorage.setItem('user', JSON.stringify(val));
    }
    alert("Record is succesfully delete!");
    data();
}
function update(id) {
    for (let i = 0; i < val.length; i++) {
        if (val[i].id == id) {
            document.getElementById('name').value = val[i].name;
            document.getElementById('email').value = val[i].email;
            document.getElementById('phone').value = val[i].phone;
            document.getElementById('submit').setAttribute('onclick', `updatesubmit(${val[i].id})`)
        }
    }
}
function updatesubmit(id) {
    let val = JSON.parse(localStorage.getItem('user'));
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let obj = {
        id:id,
        name: name,
        email: email,
        phone: phone
    }

    for (let i in val) {
        if (val[i].id == id) {
            val.splice(i, 1);
            val.push(obj)
        }
        localStorage.setItem('user', JSON.stringify(val));
    }
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    alert("Record is succesfully Updated!")
    data();
    document.getElementById('submit').setAttribute('onclick', `save()`)
    
   
}