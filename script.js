// NeuroSleep Technology V5.0

document.addEventListener(
"DOMContentLoaded",
function(){

console.log(
"NeuroSleep Technology V5.0 Loaded"
);


// Smooth navigation

const links =
document.querySelectorAll(
"nav a"
);


links.forEach(
link=>{

link.addEventListener(
"click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}

}

);

});



// Button interaction

const buttons =
document.querySelectorAll(
".btn"
);


buttons.forEach(

button=>{


button.addEventListener(
"click",
function(){

console.log(
"NeuroSleep Partnership Interest"
);


}

);


});



});