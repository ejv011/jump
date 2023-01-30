// ========For Delete/Remove Modal========
var modalDelete = document.getElementById("deleter");
var exit = document.getElementsByClassName("modal-delete-exit")[0];
var okConfirm = document.getElementsByClassName("btn-ok")[0];
var cancel = document.getElementsByClassName("btn-cancel")[0];

// ========For Upload Modal=========
var modalUpload = document.getElementById("uploader");
var uploadExit = document.getElementsByClassName("modal-upload-exit")[0];
var uploadCancel = document.getElementsByClassName("doc-cancel-button")[0];

// ========For Edit Modal==========
var modalEdit = document.getElementById("editor");
var editExit = document.getElementsByClassName("modal-edit-exit")[0];
var editCancel = document.getElementsByClassName("modal-edit-cancel")[0];


//=========Delete Modal==========
function deleteBtn() {
    modalDelete.style.display = "block";
}

exit.onclick = function () {
    modalDelete.style.display = "none";
}

okConfirm.onclick = function () {
    modalDelete.style.display = "none";
}

cancel.onclick = function () {
    modalDelete.style.display = "none";
}

//=========Upload Modal==========

function uploadButton(){
    modalUpload.style.display = "block";
}

uploadExit.onclick = function(){
    modalUpload.style.display = "none";
}

uploadCancel.onclick = function(){
    modalUpload.style.display = "none";
}

//=========Edit Modal==========

function editButton(){
    modalEdit.style.display="block";
}

editExit.onclick = function(){
    modalEdit.style.display = "none";
}

editCancel.onclick = function(){
    modalEdit.style.display = "none";
}
