// =====================================
// MOVIESTREAM SCRIPT.JS
// =====================================


// MOVIE LIST

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
// CUSTOM IMAGE FILE NAMES
// =====================================


const movieImages = {


annabelle_creation:"annabelle1.jpg",

dune2:"dune.jpg",

spiderman:"spiderman1.jpg"


};





// FUNCTION TO GET IMAGE


function getMovieImage(movie){


if(movieImages[movie]){


return "images/" + movieImages[movie];


}


return "images/" + movie + ".jpg";


}







// =====================================
// CREATE BACKGROUND POSTERS
// =====================================


const background =
document.getElementById("poster-background");



if(background){


movies.forEach(movie=>{


const img =
document.createElement("img");


img.src =
getMovieImage(movie);


img.alt =
movie;


background.appendChild(img);



});


}







// =====================================
// CREATE MOVIE CARDS
// =====================================


const movieContainer =
document.getElementById("movie-container");



if(movieContainer){


movies.forEach(movie=>{


const card =
document.createElement("div");


card.className="card";



card.innerHTML = `


<a href="movie.html?movie=${movie}">


<img src="${getMovieImage(movie)}" 
alt="${movie}">


<h3>
${movie.replaceAll("_"," ")}
</h3>


</a>


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
// HERO BUTTONS
// =====================================


const watchButton =
document.querySelector(".watch");



if(watchButton){


watchButton.onclick=function(){


alert(
"Subscribe to start watching movies."
);


};


}




const infoButton =
document.querySelector(".info");



if(infoButton){


infoButton.onclick=function(){


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


button.onclick=function(){


alert(
"Payment system coming soon."
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


login.onclick=function(){


alert(
"Login page coming soon."
);


};


}



if(signup){


signup.onclick=function(){


alert(
"Create account page coming soon."
);


};


}
