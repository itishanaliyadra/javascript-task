let record;
if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
    record = [];
}
else {
    record = JSON.parse(localStorage.getItem('user'));
}
viewdata();
function viewdata() {
    let tbl = "";
    for (let i in record) {
        tbl += `
        <div class="col-md-3">
        <div class="card text-white bg-secondary" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${record[i]}</h5>
                <p class="card-text">Count :- ${Number(i) + 1}</p>
                <a href="#" class="btn btn-primary" onclick="delet(${i})">Delete</a>
                <a href="#" class="btn btn-primary" onclick="dataedit(${i})">Edit</a>
            </div>
        </div>
    </div>
        `
        document.getElementById('card').innerHTML = tbl;
    }
}
function datasubmit() {
    let task = document.getElementById('task').value;
    if (task == "") {
        alert("Enter a Task")
    }
    else {
        record.push(task);
        alert("Record is succesfully Add!");
        localStorage.setItem('user', JSON.stringify(record));
        task = document.getElementById('task').value = "";
        viewdata();
    }
}
function delet(index){
    record.splice(index,1);
    alert("Record is successfully Delete !");
    viewdata();
    localStorage.setItem('user',JSON.stringify(record));
}
function dataedit(index){
  document.getElementById('task').value= record[index];
  document.getElementById('submit').setAttribute('onclick', `editdata(${index})`);
}
function editdata(index){
    let task = document.getElementById('task').value;
    record.splice(index,1,task);
    alert("Record is update !");
    localStorage.setItem('user',JSON.stringify(record));
    document.getElementById('submit').setAttribute('onclick', `datasubmit()`);
    viewdata();
    document.getElementById('task').value="";

}

