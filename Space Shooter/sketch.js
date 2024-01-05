var canvas;
var spaceShipImage;
var enemyShipImage;
var backgroundImage;
var explosionImage;
var laserImage;

function preload() {
    backgroundImage = loadImage("assets/background3.png");
    spaceShipImage = loadImage("assets/SpaceShip.png");
    laserImage = loadImage("assets/laser.png");
    explosionImage = loadImage("assets/explosion.png");
    enemyShipImage = loadImage("assets/enemyShip.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    spaceShip = createSprite(200, 300, 50, 50);
    spaceShip.addImage(spaceShipImage);
    spaceShip.scale = 0.1

    enemyShip = createSprite(700, 300, 50, 50);
    enemyShip.addImage(enemyShipImage);
    enemyShip.scale = 0.5
}

function draw() {
    background(backgroundImage);
    if(keyDown("UP_ARROW")){
    spaceShip.velocity = -1
    }
    drawSprites();
    if(keyDown("DOWN_ARROW")){
    spaceShip.velocity = 1
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

