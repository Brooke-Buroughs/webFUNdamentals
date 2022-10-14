
function loadWeatherb(){
    alert("We are loading the weather report for Burbank! : )");
}
function loadWeatherc(){
    alert("We are loading the weather report for Chicago! : )");
}
function loadWeatherd(){
    alert("We are loading the weather report for Dallas! : )");
}

var quitar=document.getElementById("removeMe");

function noMoreCookies(element){
    quitar.remove();
}

var temp=document.getElementsByClassName('temp');

function tempChange(element){
    for (let i=0; i<temp.length; i++){
        if (element.value ==='f'){
            temp[i].innerText=Math.round((temp[i].innerText*1.8)+32);
        }
        else if (element.value === 'c'){
            temp[i].innerText=Math.round((temp[i].innerText-32)*.55);
        }
    }
}