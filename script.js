/* =====================================
   MOVIESTREAM PRO SCRIPT
===================================== */


const API_KEY = "YOUR_TMDB_API_KEY";

const API_URL = "https://api.themoviedb.org/3";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";





// =====================================
// MOVIE CONTAINERS
// =====================================


const containers = {

    trending: document.getElementById("movie-container"),

    popular: document.getElementById("popular-container"),

    newMovies: document.getElementById("new-container"),

    top: document.getElementById("top-container")

};





// =====================================
// FETCH MOVIES
// =====================================


async function getMovies(endpoint, container){


try{


container.innerHTML = `

<div class="loader"></div>

`;



const response = await fetch(

`${API_URL}${endpoint}?api_key=${API_KEY}`

);



const data = await response.json();



displayMovies(

data.results,

container

);



}

catch(error){


console.log(error);


container.innerHTML =

"<p>Unable to load movies</p>";


}


}







// =====================================
// DISPLAY MOVIE CARDS
// =====================================


function displayMovies(movies, container){


container.innerHTML="";



movies.forEach(movie=>{


const card=document.createElement("div");


card.classList.add("card","fade");



const poster = movie.poster_path ?

IMAGE_URL + movie.poster_path :

"";


card.innerHTML=`

<a onclick="openMovie(${movie.id})">


<img src="${poster}">


<h3>

${movie.title || movie.name}

</h3>


<p>

⭐ ${movie.vote_average}

</p>


</a>

`;



container.appendChild(card);



});


}







// =====================================
// LOAD HOME PAGE MOVIES
// =====================================



getMovies(

"/trending/movie/week",

containers.trending

);



getMovies(

"/movie/popular",

containers.popular

);



getMovies(

"/movie/now_playing",

containers.newMovies

);



getMovies(

"/movie/top_rated",

containers.top

);








// =====================================
// SEARCH MOVIE
// =====================================


async function searchMovie(){


const query = document

.getElementById("searchInput")

.value;



if(!query) return;



const response = await fetch(

`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`

);



const data = await response.json();



displayMovies(

data.results,

containers.trending

);



document

.getElementById("trending")

.scrollIntoView({

behavior:"smooth"

});


}







// =====================================
// MOVIE DETAILS
// =====================================


async function openMovie(id){


localStorage.setItem(

"movieID",

id

);



window.location.href="movie.html";


}






// =====================================
// HERO BACKGROUND
// =====================================


async function loadHeroBackground(){


const response = await fetch(

`${API_URL}/movie/popular?api_key=${API_KEY}`

);



const data = await response.json();



const background = document

.getElementById(

"poster-background"

);



data.results.slice(0,18)

.forEach(movie=>{


if(movie.poster_path){


const img=document.createElement("img");


img.src=

IMAGE_URL + movie.poster_path;


background.appendChild(img);



}


});


}



loadHeroBackground();






// =====================================
// LOGIN BUTTONS
// =====================================


document.querySelector(".login")

.onclick=()=>{


window.location.href="login.html";


};



document.querySelector(".signup")

.onclick=()=>{


window.location.href="signup.html";


};







// =====================================
// WATCH BUTTON
// =====================================


document.querySelector(".watch")

.onclick=()=>{


alert(

"Choose a movie and start streaming!"

);


};
