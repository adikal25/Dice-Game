// var randomNumber1=Math.floor((Math.random()*6)+1);
// console.log(randomNumber1);
// if(randomNumber1==1){
//     document.querySelector("dice1").setAttribute("href","images\dice1.png");
// } else if(randomNumber1==2){
//     document.querySelector("dice1").setAttribute("href","images\dice2.png");
// } else if(randomNumber1==3){
//     document.querySelector("dice1").setAttribute("href","images\dice3.png");
// } else if(randomNumber1==4){
//     document.querySelector("dice1").setAttribute("href","images\dice4.png");
// } else if(randomNumber1==5){
//     document.querySelector("dice1").setAttribute("href","images\dice5.png");
// } else if(randomNumber1==6){
//     document.querySelector("dice1").setAttribute("href","images\dice6.png");
// } else{
//     return 0;
// }


// var randomNumber2=Math.floor((Math.random()*6)+1);
// console.log(randomNumber1);
// if(randomNumber2==1){
//     document.querySelector("dice2").setAttribute("href","images\dice1.png");
// } else if(randomNumber2==2){
//     document.querySelector("dice2").setAttribute("href","images\dice2.png");
// } else if(randomNumber2==3){
//     document.querySelector("dice2").setAttribute("href","images\dice3.png");
// } else if(randomNumber2==4){
//     document.querySelector("dice2").setAttribute("href","images\dice4.png");
// } else if(randomNumber2==5){
//     document.querySelector("dice2").setAttribute("href","images\dice5.png");
// } else if(randomNumber2==6){
//     document.querySelector("dice2").setAttribute("href","images\dice6.png");
// } else{
//     return 0;
// }
var randomNumber1=Math.floor((Math.random()*6)+1);
var imageRandom="dice"+randomNumber1+".png";
var imageSource = "images/"+imageRandom;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var randomNumber2=Math.floor((Math.random()*6)+1);
var imageRandom2="dice"+randomNumber2+".png";
var imageSource2 = "images/"+imageRandom2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",imageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
} else{
    document.querySelector("h1").innerHTML="Its a DRAW!!!";
}

