function addItem(){
    var text = (document.getElementById("text-box"));
    var mainFace = document.getElementById("list");

    if(text.value !== ""){
        var liItem = document.createElement("li");
        liItem.innerHTML = "<span onclick=\"checkItem(this)\"><i class=\"fa fa-circle-thin\"></i></span>";
        liItem.innerHTML += "<span class=\"hide\" onclick=\"uncheckItem(this)\"><i class=\"fa fa-check-circle\"></i></span>";
        liItem.innerHTML += "<span>" + text.value + "</span>";
        liItem.innerHTML += "<i class=\"fa fa-trash al-rt\" onclick=\"deleteItem(this)\"></i>";
        liItem.innerHTML += "<span class=\"al-rt\" onclick=\"editItem(this)\" ><i class=\"fa fa-pencil\"></i></span>";
        liItem.innerHTML += "<span class=\"hide al-rt\" onclick=\"updateItem(this)\"><i class=\"fa fa-check\"></i></span>"; 
        mainFace.appendChild(liItem);
    }
    else{
        alert("You must have something to do, to write a to-do!");
    }
    text.value = "";
}

function checkItem(btn){
    btn.classList.add("hide");
    var checkedBtn = btn.parentNode.childNodes[1];
    checkedBtn.classList.remove("hide");
    var item = btn.parentNode.childNodes[2];
    item.classList.add("strike");
}

function uncheckItem(btn){
    btn.classList.add("hide");
    var uncheckedBtn = btn.parentNode.childNodes[0];
    uncheckedBtn.classList.remove("hide");
    var item = btn.parentNode.childNodes[2];
    item.classList.remove("strike");
}

function editItem(btn){
    btn.classList.add("hide");
    var updateBtn = btn.parentNode.childNodes[5];
    updateBtn.classList.remove("hide");

    var item = btn.parentNode.childNodes[2];
    previousText = item.innerText;
    item.innerHTML = "<input type=\"text\" class=\"update-box\">"
    var updateboxText = btn.parentNode.childNodes[2].childNodes[0];
    updateboxText.value = previousText;
}

function updateItem(btn){
    btn.classList.add("hide");
    var editBtn = btn.parentNode.childNodes[4];
    editBtn.classList.remove("hide");

    var item = btn.parentNode.childNodes[2];
    var updated = btn.parentNode.childNodes[2].childNodes[0];
    item.innerText = updated.value;
}

function deleteItem(btn){
    btn.parentNode.remove();
}

function deleteAll(){
    var mainFace = document.getElementById("list");
    mainFace.innerHTML = "";
}