//Create variables here
var dog,happyDog,database,foodS,foodStock;

dog.createSprite=(200,200,20,10);
dog.addImage=("dog",dogimg.png);

happyDog.createSprite=(200,400,20,10);
happyDog.addImage=("happyDog",dogimg1.png);


foodStock=database.ref('Food');
foodStock.on("value",readStock);




function preload()
{dog.loadImage("dogimg.png");
happyDog.loadImage("dogimg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  
}
if(keyWentDown(UP_ARROW)) {
writeStock(foodS);
dog.addImage(happyDog);

}

function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
textSize=0.5;
fill(red);
stroke(1);
}



