window.onscroll = function() {myFunction()};

//variables to create navbar animation

var navbar = document.getElementById("nav");
var about = document.getElementById("id-goto");
var sticky1 = about.offsetTop - 370;


function myFunction() {
  if (window.pageYOffset >= sticky1) {
    navbar.style.width = "100%";
    navbar.style.display = "flex";
    navbar.style.paddingTop = "20px";
    navbar.style.paddingLeft = "80px";
    navbar.style.zIndex = "1";
    navbar.style.transition = "0.4s";
  } else {
    navbar.style.paddingTop = "50px";
  }
}

//variables to create cards animation

var cardOne = document.querySelector(".first-card");
var cardOneBtn = document.querySelector(".card-btn");
var cardOneImg = document.querySelector(".card-one-img");

//variables to create a new element

var parent = document.querySelector(".page-three");                  //Importing parent elemnt

// card two
var newCardTwo = document.createElement("div");
newCardTwo.classList.add("second-card");
var cardTwoP = document.createElement("p");
cardTwoP.classList.add("second-card-p");
var ctpNode = document.createTextNode("Discover songs you’ll love from music picked just for you.");
cardTwoP.appendChild(ctpNode);
var cardTwoBtn = document.createElement("button");
cardTwoBtn.classList.add("card-btn-2");
cardTwoBtn.innerHTML = "<img src='assets/arrow.svg' class='btn-icon' onclick='cardClickT()'>";
var cardTwoImg = document.createElement("IMG");
cardTwoImg.setAttribute("src", "assets/card-2.png");
cardTwoImg.classList.add("card-two-img");

function cardClick() {
  cardOne.classList.add("ac-fcard");
  cardOneImg.style.opacity = "0";
  cardOneImg.style.transition = "0.4s";
  cardOneBtn.style.display = "none";

  setTimeout(() => { 
    parent.appendChild(newCardTwo); 
  }, 500);
  newCardTwo.appendChild(cardTwoP);
  newCardTwo.appendChild(cardTwoBtn);
  newCardTwo.appendChild(cardTwoImg);
}

//card three

var newCardThree = document.createElement("div");
newCardThree.classList.add("third-card");
var cardThreeP = document.createElement("p");
cardThreeP.classList.add("third-card-p");
var ctpNodeT = document.createTextNode("Tap into new music with curated playlists from our editors.");
cardThreeP.appendChild(ctpNodeT);
var cardThreeImg = document.createElement("IMG");
cardThreeImg.setAttribute("src", "assets/card-3.png");
cardThreeImg.classList.add("card-three-img");

//Creating footer buttons

var fBtnPrimary = document.createElement("input");
fBtnPrimary.classList.add("fbtn-one");
fBtnPrimary.type = "button";
fBtnPrimary.value = "Register";

var fbtnSecondary = document.createElement("a");
fbtnSecondary.classList.add("fbtn-two");
fbtnSecondary.href = "#pageOne";
var fbtnSText = document.createTextNode("Home");
fbtnSecondary.appendChild(fbtnSText);

function cardClickT() {
  cardOne.style.display = "none";
  cardOneImg.style.display = "none";

  newCardTwo.classList.add("ac-scard");
  cardTwoImg.style.opacity = "0";
  cardTwoImg.style.transition = "0.4s";
  cardTwoBtn.style.display = "none";

  setTimeout(() => { 
    parent.appendChild(newCardThree); 

    //inserting footer 

    parent.appendChild(fBtnPrimary); 
    parent.appendChild(fbtnSecondary);
  }, 500);
  newCardThree.appendChild(cardThreeP);
  newCardThree.appendChild(cardThreeImg);
}
