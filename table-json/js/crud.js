let record;
if (localStorage.getItem('user') === null && localStorage.getItem('user') === undefined) {
    record = [];
}
else {
    record = JSON.parse(localStorage.getItem('user'));
}
function mt() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
}
viewdata();
function viewdata() {
    document.getElementById('submit').style.display = "block";
    document.getElementById('clear').style.display = "none";
    document.getElementById('updated').style.display = "none";
    let tbl = `
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone No.</th>
        <th>ACtion</th>
    </tr>
    `
    record.map((val) => {
        tbl += `
        <tr>
        <td>${val.id}</td>
        <td>${val.name}</td>
        <td>${val.email}</td>
        <td>${val.phone}</td>
        <td>
        <button onclick="updated(${val.id})">Edit</button>
        <button onclick="delet(${val.id})">Delete</button>
        </td>
        </tr>
        `
    })
    document.getElementById('show').innerHTML = tbl;
}
function menu() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let obj = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        email: email,
        phone: phone
    }
    record.push(obj);
    alert("Record is succesfully Add!");
    localStorage.setItem('user', JSON.stringify(record))
    mt();
    viewdata();
}
function delet(id) {
    for (let i in record) {
        if (record[i].id == id) {
            record.splice(i, 1);
        }
        localStorage.setItem('user', JSON.stringify(record));
    }
    alert("Record is  succesfully Delete!");
    viewdata();
}
function updated(id) {
    for (let i=0; i<record.length; i++) {
        if (record[i].id == id) {

            document.getElementById('clear').style.display = "block";
            document.getElementById('submit').style.display = "none";
            document.getElementById('updated').style.display = "block";
            document.getElementById('id').value = record[i].id;
            document.getElementById('name').value = record[i].name;
            document.getElementById('email').value = record[i].email;
            document.getElementById('phone').value = record[i].phone;

        }
    }
}
function updatedsubmite() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let editid = document.getElementById('id').value;
    for (let i=0; i<record.length; i++) {
        if (record[i].id == editid) {
            record[i].name = name;
            record[i].email = email;
            record[i].phone = phone;
        }
    }
    localStorage.setItem('user', JSON.stringify(record));
    alert("Record is succesfully Updated!");
    viewdata();
    mt();
}
function cleardata(){
    mt();
    viewdata();
}