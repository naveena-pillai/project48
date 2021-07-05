//variables for backgrounds
var artClassImg, classroomImg, gymImage, hallwayImg, lunchroomImg, bathroomImg;
//variables for sprites
var boyStudentImg, girlStudentImg, meanTeacherImg, teacherImg, tomWalkAnimation, tomStandingImg, tomStandingInvert, basketballImg;
//variables for objects
var classroom, artClassroom, gym, bathroom;
//variables for normal class
var tom, teacher;
//variables for art class
var girlStudent, artTeacher, paintingImg, painting;
//variables for gym class
var boyStudent, gymTeacher, basketball, gymTeacherImg;
var gameState;


function preload(){
    artClassImg = loadImage("artClassroom.png");
    classroomImg = loadImage("classroom1.jpg");
    gymImage = loadImage("gym.jpg");
    hallwayImg = loadImage("hallway.png");
    lunchroomImg = loadImage("lunchroom.jpg");
    bathroomImg = loadImage("bathroom.jpg");

    boyStudentImg = loadImage("boyStudent.png");
    girlStudentImg = loadImage("girlStudent.png");
    meanTeacherImg = loadImage("meanTeacher.png");
    teacherImg = loadImage("teacher1.png");
    basketballImg = loadImage("basketball.png");
    gymTeacherImg = loadImage("gymTeacher.png");

    tomWalkAnimation = loadAnimation("boy1.png","boy2.png", "boy3.png", "boy4.png", "boy5.png", "boy6.png" )
    tomStandingImg = loadAnimation("boy3.png");

    paintingImg = loadImage("painting.png");
}

function setup(){
    createCanvas(1000,800);
    gameState = "classroom";

    canvas = createSprite(500,400,1000,800);
    canvas.addImage(classroomImg);

    classroom = new Classroom();

    artClassroom = new ArtClassroom();

    gym = new Gym();

    bathroom = new Bathroom();
}

function draw(){
    background(0);

    if(gameState==="classroom"){
        canvas.addImage(classroomImg);
        canvas.scale = 1.6;
        //console.log(gameState);
        classroom.display();;
    }

    if(gameState==="artClass"){
        canvas.addImage(artClassImg);
        canvas.scale = 0.97;
        artClassroom.display();
        //artClassroom.walkAway();
    }
    
    if(gameState==="gymClass"){
        canvas.addImage(gymImage);
        canvas.scale = 2;
        gym.display();
        //gym.walkAway();
    }

    if(gameState==="bathroom"){
        canvas.addImage(bathroomImg);
        canvas.scale = 2;
        bathroom.display();
        gym.walkAway();
    }
    
    drawSprites();
}