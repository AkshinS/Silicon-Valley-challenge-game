const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, bgImage;
var girl, girlImage;
var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var gameState = 1;
var obstacle;

function preload() {
    bgImage = loadImage("bg.jpg");
    girlImage = loadAnimation("images/girl1.png", "images/girl2.png", "images/girl3.png", "images/girl4.png", "images/girl5.png",
        "images/girl6.png", "images/girl7.png", "images/girl8.png", "images/girl9.png", "images/girl10.png", "images/girl11.png", "images/girl12.png",
        "images/girl13.png", "images/girl14.png", "images/girl15.png", "images/girl16.png", "images/girl17.png", "images/girl18.png", "images/girl19.png",
        "images/girl20.png", "images/girl21.png", "images/girl22.png", "images/girl23.png", "images/girl24.png", "images/girl25.png", "images/girl26.png",
        "images/girl27.png", "images/girl28.png", "images/girl29.png", "images/girl30.png", "images/girl31.png", "images/girl32.png", "images/girl33.png", "images/girl34.png"
    );

    obstacle1 = loadImage("images/rock1.png");
    obstacle2 = loadImage("images/rock2.png");
    obstacle3 = loadImage("images/rock3.png");
    obstacle4 = loadImage("images/rock4.png");
    obstacle5 = loadImage("images/rock5.png");
    obstacle6 = loadImage("images/rock6.png");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(width / 2, height / 2);
    bg.addImage("bg", bgImage);
    bg.scale = 0.5286;
    bg.velocityX = -6;

    girl = createSprite(200, 538);
    girl.addAnimation("girl", girlImage);
    girl.scale = 0.08;

    obstacleGroup = createGroup();
}

function draw() {

    frameRate(144);

    if (gameState === 1) {
        if (bg.x < -1265) {
            bg.x = width / 2;
        }

        spawnObstacles();
        if (obstacle.isTouching(girl)) {
            gameState = 2;
        }
    }
    else if(gameState == 2) {
        bg.velocityX = 0;
        girl.velocityX = 0;
    }


    background("white");
    //Engine.update(engine);

    drawSprites();
}

function spawnObstacles() {
    if (frameCount % 300 === 0) {
        obstacle = createSprite(1600, 585);
        obstacle.velocityX = -6;
        obstacle.scale = 0.1;

        var rand = Math.round(random(1, 6));
        switch (rand) {
            case 1:
                obstacle.addImage(obstacle1);
                break;
            case 2:
                obstacle.addImage(obstacle2);
                break;
            case 3:
                obstacle.addImage(obstacle3);
                break;
            case 4:
                obstacle.addImage(obstacle4);
                break;
            case 5:
                obstacle.addImage(obstacle5);
                break;
            case 6:
                obstacle.addImage(obstacle6);
                break;
            default:
                break;
        }

        obstacleGroup.add(obstacle);
    }
}