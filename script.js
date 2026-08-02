
// NeuroSleep Technology V5.0
// Interactive Experience Script



document.addEventListener(
"DOMContentLoaded",
function(){



/*
Smooth Navigation
*/

const links =
document.querySelectorAll(
"nav a"
);


links.forEach(
function(link){


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


});


});







/*
Scroll Reveal Animation
*/


const elements =
document.querySelectorAll(
".card, .tech-card, .market-card, .business-card, .roadmap-item, .application-card, .acquisition-grid div"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(

entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


}

);


},

{

threshold:0.15

}


);





elements.forEach(

element=>{


element.style.opacity="0";

element.style.transform=
"translateY(40px)";

element.style.transition=
"all .8s ease";


observer.observe(element);


});









/*
Hero Image Floating Effect
*/


const heroImage =
document.querySelector(
".hero-image img"
);



if(heroImage){


let direction=1;


setInterval(

()=>{


heroImage.style.transform =
`translateY(${direction*8}px)`;


direction *= -1;


},

2000


);


}








/*
Current Year Auto Update
*/


const year =
document.querySelector(
"footer p:last-child"
);



if(year){

year.innerHTML =
year.innerHTML.replace(
"2026",
new Date().getFullYear()
);

}



});