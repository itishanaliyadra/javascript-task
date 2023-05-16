
let record;
if (localStorage.getItem('user') === null && localStorage.getItem('user') === undefined) {
    record = [];
} else {
    record = JSON.parse(localStorage.getItem('user'))
}
function mt() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
}


viwe();
function viwe() {

    document.getElementById('submit').style.display = "block";
    document.getElementById('upadatebtn').style.display = "none";
    let tbl = "";
    tbl += `
<tr>
<td>Id</td>
<td>Name</td>
<td>Email</td>
<td>Phone</td>
<td>Action</td>
</tr>
`
    record.forEach(val => {
        tbl += `
    <tr>
    <td>${val.id}</td>
    <td>${val.name}</td>
    <td>${val.email}</td>
    <td>${val.phone}</td>
    <td>
    <button onclick="update(${val.id})">Edit</button>
    </td>
    <td>
    <button onclick="delet(${val.id})">Delete</button>
    </td>
    </tr>
    `
    });
    document.getElementById('showtable').innerHTML = tbl;
}
function submitdata() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let obj = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        phone: phone,
    }
    record.push(obj);
    localStorage.setItem('user', JSON.stringify(record));
    viwe();
    alert("Record is add");
    mt();
}
function delet(id) {
    for (let i in record) {
        if (record[i].id == id) {
            record.splice(i, 1)
        }
        localStorage.setItem('user', JSON.stringify(record))
    }
    alert("Record is succesfully delete !")
    viwe();
}
function update(id) {
    for (let i=0; i<record.length; i++) {
        if (record[i].id == id) {

            document.getElementById('submit').style.display = "none";
            document.getElementById('upadatebtn').style.display = "block";
            document.getElementById('id').value = record[i].id;
            document.getElementById('name').value = record[i].name;
            document.getElementById('email').value = record[i].email;
            document.getElementById('phone').value = record[i].phone;
        }
    }
}
function datasave(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let editid= document.getElementById('id').value;
    for(let i in record){
        if(record[i].id == editid){
            record[i].name=name;
            record[i].email=email;
            record[i].phone=phone
        }
        localStorage.setItem('user', JSON.stringify(record));
    }
    alert("Record is succesfully updated !");
    mt();
    viwe();
}