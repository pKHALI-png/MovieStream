// =====================================
// MOVIESTREAM SCRIPT.JS
// =====================================


// =====================================
// MOVIE POSTER DATABASE
// =====================================

const movies = [

"acrimony2",
"aladdin",
"annabelle_creation",
"antman",
"avatar",
"blackwidow",
"cruella",
"damsel",
"dune2",
"dune3",
"extraction",
"extraction3",
"furiosa",
"howtotrainyourdragon",
"johnwick4",
"kraken",
"luca",
"maleficent",
"manonfire",
"mosi",
"mowgli",
"oneofthemdays",
"onepiece",
"paidinfull",
"rampage",
"siren",
"spiderman",
"strangerthings",
"theconjuring",
"thelastairbender",
"themud",
"thenun",
"thepunisher",
"warmachine",
"webweaver",
"zootopia2",
"theequalizer",
"shrek",
"skyscraper",
"moana",
"thering",
"from",
"peakyblinders",
"thebeekeeper",
"sinners",
"piratesofthecaribbean",
"coco",
"thelastoneofus",
"it"

];




// =====================================
// CREATE MOVING POSTER BACKGROUND
// =====================================


const posterBackground =
document.getElementById("poster-background");



movies.forEach(movie => {


    const poster =
    document.createElement("img");


    poster.src =
    `images/${movie}.jpg`;


    poster.alt = movie;


    posterBackground.appendChild(poster);


});






// =====================================
// HEADER SCROLL EFFECT
// =====================================


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,0.95)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,0.75)";

    }


});







// =====================================
// MOVIE CARD HOVER EFFECT
// =====================================


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.zIndex="10";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.zIndex="1";

    });


});






// =====================================
// BUTTON FUNCTIONS
// =====================================


const watchButton =
document.querySelector(".watch");



if(watchButton){


watchButton.addEventListener("click",()=>{


    alert(
    "🎬 Choose a subscription plan to start watching."
    );


});


}






const infoButton =
document.querySelector(".info");



if(infoButton){


infoButton.addEventListener("click",()=>{


document
.getElementById("movies")
.scrollIntoView({

behavior:"smooth"

});


});


}







// =====================================
// LOGIN / SIGNUP
// =====================================


const login =
document.querySelector(".login");



const signup =
document.querySelector(".signup");



if(login){


login.onclick=()=>{


alert(
"👤 Login system coming soon."
);


};


}



if(signup){


signup.onclick=()=>{


alert(
"🚀 Account creation coming soon."
);


};


}






// =====================================
// SUBSCRIPTION BUTTONS
// =====================================


const subscribeButtons =
document.querySelectorAll(".plan button");



subscribeButtons.forEach(button=>{


button.addEventListener("click",()=>{


alert(

"💳 Payment system will be added soon."

);


});


});






// =====================================
// SIMPLE POSTER PARALLAX EFFECT
// =====================================


const posterWall =
document.querySelector(".poster-background");



window.addEventListener("mousemove",(e)=>{


if(posterWall){


let x =
(e.clientX / window.innerWidth - 0.5) * 20;


let y =
(e.clientY / window.innerHeight - 0.5) * 20;



posterWall.style.transform =

`rotate(-8deg)
scale(1.2)
translate(${x}px,${y}px)`;

}


});
