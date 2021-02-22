var bucket; 
var Background;
var Background2;
var bucket2;
var pool;

function setup() {
  createCanvas(1000, 1000);
  Background = createSprite(350, 240, displayWidth, displayHeight);
  Background.addImage(grassImage);
  //Background.x = Background.width/2;
  Background.scale = 3;

  pool = createSprite(500, 450, 1000, 1000);
  pool.addImage(poolImage);
  pool.scale = 3;

  bucket = createSprite(400, 450, 20, 20)
  bucket.addImage(bucketImage);
  bucket.scale = 0.2;
  bucket.depth = pool.depth + 1;
  

  bucket2 = createSprite(600, 450, 100, 100);
  bucket2.addImage(bucketImage2);
  bucket2.scale = 0.4;
  bucket2.depth = pool.depth + 1;

  }

function preload(){
  grassImage = loadImage("Images/grass.jpg");

  bucketImage = loadImage("Images/Bucket_1.png");
  bucketImage2 = loadImage("Images/Bucket_2.png")

  poolImage = loadImage("Images/pool.png")

  }

function draw() {
   button = createImg(bucketImage);
   button.position(400, 450);
   button.size(200, 200);

   button2 = createButton()

   drawSprites();
}