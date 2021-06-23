// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

function script(name,content)
{
    push();
    fill('#888888');

    strokeWeight(10);
    rect(-10,430,width+20,300);
    rect(-10,350,400,80);
    
    noStroke();
    fill(255);
    textSize(70);
    textAlign(LEFT)
    text(name,50,410);
    textSize(45);
    text(content,50,480);

    pop();
}