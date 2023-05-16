let record;
if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
    record = [];
}
else {
    record = JSON.parse(localStorage.getItem('user'));
}
viewdata();
function viewdata() {
    let tbl  = `
    <tr>
        <th>Id</th>
        <th>task</th>
        <th>Action</th>
    </tr>
    `
    record.map((val) => {
        tbl += `
        <tr>
        <td>${val.id}</td>
        <td>${val.task}</td>
        <td>
        <button onclick="delet(${val.id})">Delete</button>
        </td>
        </tr>
        `
    })
    document.getElementById('show').innerHTML = tbl;
}
function datasubmit() {
    let task = document.getElementById('task').value;

    let obj = {
        id: Math.floor(Math.random() * 10000),
        task:task
    }
    record.push(obj);
    alert("Record is succesfully Add!");
    localStorage.setItem('user', JSON.stringify(record));
    document.getElementById('task').value="";
    viewdata();
}
function delet(id){
    for(let i in record){
        if(record[i].id == id){
                
        }
        localStorage.setItem('user',JSON.stringify(record));
    }
    alert("Record is succesfully Delete!")
    viewdata();
}