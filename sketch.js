
var bgImg,back;
var cat;
var mouse;


function preload() {
    bgImg = loadImage("images/garden.png");
    cat1Img = loadAnimation("images/cat1.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    happyCat = loadAnimation("images/cat4.png");
    happyMouse = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   
   cat = createSprite(900,700);
   cat.addAnimation("meow!",cat1Img);
   cat.scale = 0.15;
   mouse = createSprite(100,700);
   mouse.addAnimation("cheese!",mouse1Img);
   mouse.scale = 0.15;
   cat.depth = mouse.depth;

}

function draw() {

    background(bgImg);
    keyPressed();
    
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
            cat.addAnimation("catSmile",happyCat);
            cat.changeAnimation("catSmile");
            cat.addAnimation("mouseSmile",happyMouse);
            cat.changeAnimation("mouseSmile");
        }

    drawSprites();
}


function keyPressed(){
   if(keyWentDown("left_arrow")) {
       mouse.addAnimation("butter!",mouse2Img);
       mouse.changeAnimation("butter!");
       mouse.frameDelay = 7;
       cat.addAnimation("running",cat2Img);
       cat.changeAnimation("running");
       cat.frameDelay = 7;
       cat.velocityX = -3;
   }
   if(keyWentUp("left_arrow")){
    cat.velocityX = 0;
    cat.changeAnimation("meow!") ;
    mouse.changeAnimation("cheese!");
   }
      
   
 

}
