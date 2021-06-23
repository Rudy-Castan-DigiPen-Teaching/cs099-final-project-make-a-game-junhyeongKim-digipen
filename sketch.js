// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

function setup()
{
    createCanvas( 1000, 600 );
    Title = loadImage('img/Title.png');
    game1player = new game1_player(350);
    target_1 = new target(50,50,30,'blue');
    target_2 = new target(150,150,30,'blue')
}

function draw()
{
    background( 240 );
    switch (CurrentScreen){
    /*
        case MAIN_MENU:
    {
        image(Title,200,0)
        button("play",250,230,Story1);
        button("Option",250,330,Option_MENU);
        button("Credit",250,430,Credit_MENU);
    }
    break;
    */
    case Option_MENU:
    {
        back_button("back",10,10,MAIN_MENU);
     
    }
    break;
    case Credit_MENU:
    {
        back_button("back",10,10,MAIN_MENU);
    }
    break;
    case Story1:
    {
        back_button("back",10,10,MAIN_MENU);
        next_button("next",820,10,Story2);
        script("Poro","hello");

    }
    break;
    case Story2:
    {
        back_button("back",10,10,Story1);
        next_button("next",820,10,Story3);
        script("Poro","hello");
    }
    break;
    case Story3:
    {
        back_button("back",10,10,Story2);
        next_button("next",820,10,dash_game);
        script("Poro","hello");
    }
    break;
    case dash_game:
    {
        back_button("back",10,10,Story2);
        line(0,200,10000,200);
        line(0,350,10000,350);
        line(0,500,10000,500);
        game1player.update()
        game1player.draw()
        
        //score
        textAlign(CENTER)
        text('score:',640,50 )
        a += 1
        text(a,760,50)
1
        push()
        rectMode(CENTER);
        rect(1110-a,350,50)
        pop()

        //clear
        if(a >= 3000)
        {
            CurrentScreen = Story_1
        }

    }
    break;
    case Story_1:
    {
        back_button("back",10,10,Story2);
        next_button("next",820,10,Find_game);
        script("Poro","hello");
    }
    break;
    case MAIN_MENU:
    {
      
      
        circle(750,510,100)
        textAlign(CENTER)
        textSize(60)
        text("X",830,530)
        text(bullet,880,530)

    
        //target
        target_1.update();
        target_1.draw();
        target_2.update();
        target_2.draw();
        //game over
        if (mouseIsPressed == true && mouseWasPressed == false)
        {
    
    
    
            bullet = bullet -1
        }

        if(bullet == 0)
        {
        CurrentScreen = game_over
        }

        
        
        //scope
        push();
        strokeWeight( 2 );
        if(mouseIsPressed==true && mouseWasPressed==false)
        {
            mark_color_R = 233;
        }else{
            mark_color_R = 255;
        }
        stroke(mark_color_R,mark_color_G,mark_color_B,mark_color_transparency);
        fill(mark_color_R,mark_color_G,mark_color_B,mark_color_transparency);
        circle( mouseX, mouseY, 10);
        strokeWeight(6);
        noFill();
        circle(mouseX,mouseY, 80);
        strokeWeight(4);
        line(mouseX,mouseY-20,mouseX,mouseY-50);
        line(mouseX,mouseY+20,mouseX,mouseY+50);
        line(mouseX+20,mouseY,mouseX+50,mouseY);
        line(mouseX-20,mouseY,mouseX-50,mouseY);
        pop();
    }
    break;
    case game_over:
    {
        text("Game\nover",width/2,height/3)
    }
    break;

    }
        mouseWasPressed = mouseIsPressed
    }


    function mousePressed()
    {
        console.log( mouseX, mouseY, bullet);
        
    }
