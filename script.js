// ==================================
// MOVIESTREAM SCRIPT.JS
// ==================================


// ================================
// DYNAMIC HERO MOVIE SLIDER
// ================================

const heroBackground = document.querySelector(".hero-bg");
const heroTitle = document.querySelector("#hero-title");
const heroDescription = document.querySelector("#hero-description");


const heroMovies = [

{
    image:"images/maleficent.jpg",
    title:"Maleficent: Mistress of Evil",
    description:
    "Enter a magical world of fantasy, adventure and powerful battles."
},

{
    image:"images/oneofthemdays.jpg",
    title:"One of Them Days",
    description:
    "A hilarious journey filled with friendship, comedy and unforgettable moments."
},

{
    image:"images/kraken.jpg",
    title:"Kraken",
    description:
    "Discover a thrilling adventure with mystery, danger and epic action."
},

{
    image:"images/webweaver.jpg",
    title:"Web Weaver: A New Tomorrow",
    description:
    "A futuristic story where heroes rise to protect a new world."
},

{
    image:"images/avatar.jpg",
    title:"Avatar: The Way of Water",
    description:
    "Return to Pandora for a breathtaking adventure under the oceans."
}

];


let heroIndex = 0;



function changeHero(){


    if(heroTitle && heroDescription){


        heroTitle.style.opacity="0";
        heroDescription.style.opacity="0";


    }



    setTimeout(()=>{


        heroBackground.style.backgroundImage =
        `url(${heroMovies[heroIndex].image})`;


        heroTitle.textContent =
        heroMovies[heroIndex].title;


        heroDescription.textContent =
        heroMovies[heroIndex].description;



        if(heroTitle && heroDescription){

            heroTitle.style.opacity="1";
            heroDescription.style.opacity="1";

        }


        heroIndex++;


        if(heroIndex >= heroMovies.length){

            heroIndex=0;

        }


    },700);


}



changeHero();


setInterval(changeHero,6000);






// ================================
// HEADER EFFECT
// ================================


const header =
document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

header.style.background =
"rgba(0,0,0,0.95)";


}else{


header.style.background =
"rgba(0,0,0,0.75)";


}


});






// ================================
// MOVIE CARD EFFECT
// ================================


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






// ================================
// BUTTON ACTIONS
// ================================


const watchButton =
document.querySelector(".watch");



if(watchButton){

watchButton.onclick=()=>{

alert(
"🎬 Choose a subscription plan to start watching movies."
);

};

}





const infoButton =
document.querySelector(".info");



if(infoButton){

infoButton.onclick=()=>{


document
.querySelector("#movies")
.scrollIntoView({

behavior:"smooth"

});


};

}






// ================================
// SUBSCRIBE BUTTONS
// ================================


const subscribeButtons =
document.querySelectorAll(".plan button");



subscribeButtons.forEach(button=>{


button.addEventListener("click",()=>{


alert(
"💳 Payment system coming soon."
);


});


});






// ================================
// LOGIN / SIGNUP
// ================================


const login =
document.querySelector(".login");


const signup =
document.querySelector(".signup");



if(login){

login.onclick=()=>{

alert(
"Login system will be connected soon."
);

};

}



if(signup){

signup.onclick=()=>{

alert(
"Create your MovieStream account."
);

};

}
