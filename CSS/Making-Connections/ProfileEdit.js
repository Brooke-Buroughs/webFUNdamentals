var nameSpan=document.querySelector("#name");

function setName(element){
    nameSpan.innerText=element.value;
}
function displayName(){
    var string=document.getElementById("trueName").value;
    document.getElementById("name").innerText=string;
    alert("You have changed your name to "+string+"! :)");
}

var goodBye1=document.getElementById("remove-1");

function adios1(element){
    goodBye1.remove();
}

var goodBye2=document.getElementById("remove-2");

function adios2(element){
    goodBye2.remove();
}
