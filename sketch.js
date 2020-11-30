var ball;
var database;
var lball;
var position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    //refer to the location using  .ref()
    lball=database.ref('ball/positions');
    //continous listener function//value
    lball.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    //.ref .set is used to write changed values into the database
   database.ref('ball/positions').set({
       'x':position.x+x,
       'y':position.y+y
   })
}
function readPosition(data){
       position = data.val();
       ball.x=position.x;
       ball.y =position.y;
}

