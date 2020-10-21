var canvas, backgroundImage,Height,Weight,WeightG,Intensity,name,eMail,Age,BF,Lunch,Din;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var page;

function preload(){
  backgroundImage = loadImage("images/blueDiet.jpg")
}


function setup(){
  canvas = createCanvas(displayWidth - 70, displayHeight-80);
  
  page = new Page();
 
}


function draw(){
background(backgroundImage);
page.display();

}