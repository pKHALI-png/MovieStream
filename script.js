// =====================================
// MOVIESTREAM SCRIPT.JS
// =====================================


// =====================================
// MOVIE DATABASE
// =====================================

const movies = [

"acrimony2",
"aladdin",
"annabelle1",
"antman",
"avatar",
"blackwidow",
"cruella",
"damsel",
"dune",
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
"spiderman1",
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



if(posterBackground){


movies.forEach(movie=>{


const img =
document.createElement("img");


img.src =
`images/${movie}.jpg`;


img.alt = movie;


posterBackground.appendChild(img);


});


}






// =====================================
// CREATE MOVIE CATALOG
// =====================================


const movieContainer =
document.getElementById("movie-container");



if(movieContainer){


movies.forEach(movie=>{


const card =
document.createElement("div");


card.className="card";



card.innerHTML = `

<img src="images/${movie}.jpg"
alt="${movie}">


<h3>
${movie.replaceAll("_"," ")}
</h3>

`;



movieContainer.appendChild(card);



});


}






// =====================================
// HEADER EFFECT
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
"rgba(0,0,0,0.65)";


}


});






// =====================================
// BUTTON ACTIONS
// =====================================


const watchButton =
document.querySelector(".watch");



if(watchButton){


watchButton.onclick=()=>{


alert(
"🎬 Choose a subscription plan to start watching."
);


};


}




const infoButton =
document.querySelector(".info");



if(infoButton){


infoButton.onclick=()=>{


document
.getElementById("movies")
.scrollIntoView({

behavior:"smooth"

});


};


}






// =====================================
// SUBSCRIBE BUTTONS
// =====================================


const subscribeButtons =
document.querySelectorAll(".plan button");



subscribeButtons.forEach(button=>{


button.onclick=()=>{


alert(
"💳 Payment system will be connected soon."
);


};


});






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
"Login page coming soon."
);


};


}



if(signup){


signup.onclick=()=>{


alert(
"Registration page coming soon."
);


};


    }
