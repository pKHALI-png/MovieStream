// =====================================
// MOVIESTREAM SCRIPT.JS
// =====================================


// ================================
// HEADER EFFECT ON SCROLL
// ================================

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background =
        "rgba(0,0,0,0.95)";

    }else{

        header.style.background =
        "rgba(0,0,0,0.75)";

    }

});



// ================================
// MOVIE CARD ANIMATION
// ================================

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.zIndex="10";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.zIndex="1";

    });


});



// ================================
// SCROLL REVEAL ANIMATION
// ================================


const revealElements =
document.querySelectorAll(
".card,.category,.plan"
);



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{
threshold:0.15
});



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(50px)";

element.style.transition=
"0.8s ease";


revealObserver.observe(element);


});




// ================================
// AUTO SCROLL TRENDING MOVIES
// ================================


const movieRow =
document.querySelector(".movies");


let position=0;



setInterval(()=>{


if(movieRow){


position += 230;


if(position >= movieRow.scrollWidth){

position=0;

}



movieRow.scrollTo({

left:position,

behavior:"smooth"

});


}


},4000);





// ================================
// WATCH NOW BUTTON
// ================================


const watchButton =
document.querySelector(".watch");



if(watchButton){


watchButton.addEventListener("click",()=>{


alert(
"🎬 Welcome to MovieStream!\nChoose a subscription plan to start watching."
);


});


}





// ================================
// MORE INFO BUTTON
// ================================


const infoButton =
document.querySelector(".info");


if(infoButton){


infoButton.addEventListener("click",()=>{


window.scrollTo({

top:
document.querySelector(".trending").offsetTop,

behavior:"smooth"

});


});


}





// ================================
// LOGIN BUTTON
// ================================


const login =
document.querySelector(".login");


if(login){


login.onclick=()=>{


alert(
"👤 Login system will be connected soon."
);


};


}




// ================================
// SIGN UP BUTTON
// ================================


const signup =
document.querySelector(".signup");



if(signup){


signup.onclick=()=>{


alert(
"🚀 Create your MovieStream account."
);


};


}




// ================================
// SUBSCRIPTION BUTTONS
// ================================


const subscribeButtons =
document.querySelectorAll(".plan button");



subscribeButtons.forEach(button=>{


button.addEventListener("click",()=>{


alert(
"💳 Subscription payment system coming soon."
);


});


});





// ================================
// MOVIE DATA EXAMPLE
// FUTURE API CONNECTION
// ================================


const movies=[


{
title:"The Odyssey",
genre:"Adventure",
rating:"8.5"
},


{
title:"Toy Story 5",
genre:"Animation",
rating:"8.1"
},


{
title:"Project Hail Mary",
genre:"Sci-Fi",
rating:"8.0"
}


];



console.log(
"Movie database loaded:",
movies
);
