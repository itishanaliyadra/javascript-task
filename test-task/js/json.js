let userlogin = JSON.parse(localStorage.getItem('userloging'));
if (!userlogin) {
    window.location.href = "login.html";
}
function logout() {
    localStorage.removeItem('userloging')
    window.location.href = "./login.html"
}
let data;
if (localStorage.getItem('stddata') === null || localStorage.getItem('stddata') == undefined) {
    data = [];
}
else {
    data = JSON.parse(localStorage.getItem('stddata'));
}
view();
function view() {
    document.getElementById('submit').style.display = "block";
    document.getElementById('clear').style.display = "none";
    document.getElementById('Updated').style.display = "none";
    let tbl = "";
    tbl += `
                <tr>
                <th>FIELD</th>
                <th>GRID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>PHONE NO.</th>
                <th>COURSE NAME</th>
                <th>ACTIVE</th>
                <th>ACITON</th>
                </tr>
                `
    for (let i in data) {
        tbl += `
            <tr>
                <td>${data[i].field}</td>
                <td>${data[i].grid}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].password}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].course}</td>
                <td>
                  `
        if (data[i].status == "active") {
            tbl += `
                    <button onclick="active(${data[i].grid})" class="btn btn-success" >Active</button>
                    `
        }
        else {
            tbl += `
                    <button onclick="unactive(${data[i].grid})" class="btn btn-dark" >Dactive</button>
                    `
        }
        tbl += `
        </td>
        <td>
            <i class="fa-solid fa-trash btn btn-dark" onclick="adddelete(${data[i].grid})"></i>
            <i class="fa-solid fa-pen-to-square btn btn-dark" onclick="edit(${data[i].grid})"></i>
            </td>
        <tr>
    `
    }
    document.getElementById('tableshow').innerHTML = tbl;
}
function datasubmite() {
    let field = document.getElementById('field').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let course = document.getElementById('course').value;
    let obj = {
        field: field,
        grid: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        password: password,
        phone: phone,
        course: course,
        status: "active",
    }
    data.push(obj);
    let msg = `
            <div class="alert alert-secondary" role="alert">
                Record is successfully Add!
                </div>
                `
    document.getElementById('arre').innerHTML = msg;
    view();
    localStorage.setItem('stddata', JSON.stringify(data));
    document.getElementById('field').value = ""
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('course').value = ""

}
function active(grid) {
    let viewdata = "unactive";
    for (let i in data) {
        if (data[i].grid == grid) {
            data[i].status = viewdata;
        }
        localStorage.setItem('productcard', JSON.stringify(data));
    }
    view()
}
function unactive(grid) {
    let viewdata = "active";
    for (let i in data) {
        if (data[i].grid == grid) {
            data[i].status = viewdata;
        }
        localStorage.setItem('productcard', JSON.stringify(data));
    } view()
}
function adddelete(grid) {
    for (let i in data) {
        if (data[i].grid == grid) {
            data.splice(i, 1)
        }
    }
    localStorage.setItem('stddata', JSON.stringify(data));
    view();
}
function edit(grid) {
    for (let i in data) {
        if (data[i].grid == grid) {
            document.getElementById('submit').style.display = "none";
            document.getElementById('clear').style.display = "block";
            document.getElementById('Updated').style.display = "block";
            document.getElementById('field').value = data[i].field
            document.getElementById('name').value = data[i].name
            document.getElementById('email').value = data[i].email
            document.getElementById('password').value = data[i].password
            document.getElementById('phone').value = data[i].phone
            document.getElementById('course').value = data[i].course
            document.getElementById('Updated').setAttribute('onclick', `updatedsubmit(${data[i].grid})`);

        }
    }
}
function updatedsubmit(grid) {
    let field = document.getElementById('field').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let course = document.getElementById('course').value;
    for (let i in data) {
        if (data[i].grid == grid) {
            data[i].field = field
            data[i].name = name
            data[i].email = email
            data[i].password = password
            data[i].phone = phone
            data[i].course = course
        }
        localStorage.setItem('stddata', JSON.stringify(data));
    }
    alert("Record is succesfully Update")
    view();
    document.getElementById('field').value = ""
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('course').value = ""

}
function cleardata() {
    document.getElementById('submit').style.display = "none";
    document.getElementById('clear').style.display = "block";
    document.getElementById('field').value = ""
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('course').value = ""
    view();
}

