let arr;
if (localStorage.getItem('user') == null || localStorage.getItem('user') == undefined) {
    arr = [];
}
else {
    arr = JSON.parse(localStorage.getItem('user'))
}
viewdata()
function viewdata() {
    let tbl = "";
    for (let i in arr) {
        tbl += `
        <div class="col-md-3">
        <div class="card text-white bg-secondary" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${arr[i]}</h5>
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
        arr.push(task);
        alert("Record is succesfully Add!");
        localStorage.setItem('user', JSON.stringify(arr));
        task = document.getElementById('task').value = "";
        viewdata();
    }
}
function delet(index) {
    arr.splice(index, 1);
    alert("Record is Delete !");
    localStorage.setItem('user', JSON.stringify(arr));
    viewdata();
}
function dataedit(index) {
    let task = document.getElementById('task').value = arr[index];
    document.getElementById('submit').setAttribute('onclick', `submiotdata(${index})`)
}
function submiotdata(index) {
    let task = document.getElementById('task').value;
    arr.splice(index, 1, task);
    alert("Record is Update !");
    localStorage.setItem('user', JSON.stringify(arr));
    document.getElementById('submit').setAttribute('onclick', `datasubmit()`);
    viewdata();
    document.getElementById('task').value = "";

}