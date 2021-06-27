// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

function preload()
{
    background_music = loadSound("sound/background_music.mp3");
    hit_sound = loadSound("sound/hit_sound.wav");
    gun_shot = loadSound("sound/gun_shot.mp3");
}

function setup()
{
    createCanvas( 1000, 600 );
    //image
    Title = loadImage('img/Title.png');
    hexagon = loadImage('img/hexagon.png');
    square = loadImage('img/square.png');
    bullet_img = loadImage('img/bullet.png')
    game1_simulation = loadImage('img/game1simul.PNG')
    game2_simulation = loadImage('img/game2simul.PNG')
    //sound
    background_music.loop()
    background_music.setVolume(background_volume)
   
    //game1
    game1player = new game1_player(350);
    object_1 = new object2(1110,1,game1_load2);
    object_2 = new object(1110,2,game1_load3);
    object_3 = new object2(1610,1,game1_load2);
    object_4 = new object2(1610,1,game1_load1);
    object_5 = new object2(1510,1,game1_load1);
    object_6 = new object(1310,2,game1_load3);
    object_7 = new object2(2110,1,game1_load3);
    object_8 = new object2(2410,1,game1_load2);
    object_9 = new object(2110,2,game1_load3);
    object_10 = new object2(1810,1,game1_load1);
    object_11 = new object2(2210,1,game1_load2);
    object_12 = new object2(2410,1,game1_load3);
    object_13 = new object2(2810,1,game1_load2);
    object_14 = new object(3110,2,game1_load1);
    object_15 = new object(4110,2,game1_load3);
    object_16 = new object(4310,2,game1_load1);
    object_17 = new object(6110,2,game1_load2);
    object_18 = new object(5110,2,game1_load1);
    //game2
    target_1 = new target(50,50,30,'blue');
    target_2 = new target(150,150,30,'blue');
    target_3 = new target(250,250,30,'blue');
    target_4 = new target(350,350,30,'blue');
    target_5 = new target(450,450,30,'blue');
    target_6 = new target(550,550,30,'blue');
    target_7 = new target(650,100,30,'blue');
    target_8 = new target(750,200,30,'blue');
    target_9 = new target(850,300,30,'blue');
    target_10 = new target(950,400,30,'blue');
}

function draw()
{
    background( 240 );
    switch (CurrentScreen){
    case MAIN_MENU:
    {
        image(Title,200,0)
        button("play",250,230,Story1);
        button("Option",250,330,Option_MENU);
        button("Credit",250,430,Credit_MENU);
    }
    break;
    case Option_MENU:
    {
       
        if(mouseIsPressed == true && mouseWasPressed == false)
        {
            if(mouseX<width/2 && mouseY>75&& background_volume>0)
            {
                background_volume = background_volume -1
            }
            if(mouseX>width/2 && mouseY>75&& background_volume<=3)
            {
                background_volume = background_volume +1
            }
            background_music.setVolume(background_volume)
        }
        line(width/2,0,width/2,height);
        if(mouseX<width/2 && mouseY>75&& background_volume>0)
        {
            push()
            fill(0,30)
            rect(0,75,width/2,height);
            pop()
        }
        if(mouseX>width/2 && mouseY>75&&background_volume<=3)
        {
            push()
            fill(0,30)
            rect(width/2,75,width/2,height);
            pop()
        }
        back_button("back",10,10,MAIN_MENU);
        text("bgm_up",750,200);
        text("bgm_down",250,200);
       
    }
    break;
    case Credit_MENU:
    {
        back_button("back",10,10,MAIN_MENU);
        text("qqasasa",width/2, height/2);
    }
    break;
    case Story1:
    {
        back_button("back",10,10,MAIN_MENU);
        next_button("next",820,10,Story2);
        script("Poro","We will play a simple dodge game.");

    }
    break;
    case Story2:
    {
        image(game1_simulation,0,0,width,400)
        back_button("back",10,10,Story1);
        next_button("next",820,10,Story3);
        script("Poro","From above, you can change the position\n by pressing the keys '1', '2', and '3'.");
    }
    break;
    case Story3:
    {
        image(square,210,100, 200, 200);
        image(hexagon,610,100, 200, 200);
        back_button("back",10,10,Story2);
        next_button("next",820,10,Story4);
        script("Poro","If it touches two objects, it will be damaged,\n but if it touches the second object, \nit will be dubble damage.");
    }
    break;
    case Story4:
    {
        image(game1_simulation,0,0,width,400)
        back_button("back",10,10,Story3);
        next_button("next",820,10,dash_game);
        script("Poro"," If your score reaches 3100, you are clear \n But If your life 0, game over");
    }
    break;
    case dash_game:
    {
        line(0,game1_load1,width,game1_load1);
        line(0,game1_load2,width,game1_load2);
        line(0,game1_load3,width,game1_load3);
        game1player.update();
        game1player.draw();
        
        //score
        textAlign(CENTER);
        text(game1_player_life,340,53 );
        text('life :',150,50);
        text('score:',640,50 );
        game1_score += 1
        push();
        life_color_transparency = game1_player_life/10
        fill(life_color_R,life_color_G,life_color_B,life_color_transparency)
        text('♥',250,50);
        pop();
       
        text(game1_score,760,50);

        //object
        object_1.update();
        object_1.draw();
        object_2.update();
        object_2.draw();
        object_3.update();
        object_3.draw();
        object_4.update();
        object_4.draw();
        object_5.update();
        object_5.draw();
        object_6.update();
        object_6.draw();
        object_7.update();
        object_7.draw();
        object_8.update();
        object_8.draw();
        object_9.update();
        object_9.draw();
        object_10.update();
        object_10.draw();
        object_11.update();
        object_11.draw();
        object_12.update();
        object_12.draw();
        object_13.update();
        object_13.draw();
        object_14.update();
        object_14.draw();
        object_15.update();
        object_15.draw();
        object_16.update();
        object_16.draw();
        object_17.update();
        object_17.draw();
        object_18.update();
        object_18.draw();
        //clear
        if(game1_score >= 3100)
        {
            CurrentScreen = Story_1
        }
    }
    break;
    case Story_1:
    {
        
        next_button("next",820,10,Story_2);
        script("Poro","Congratulations on clear first game.");
    }
    break;
    case Story_2:
    {
        
        back_button("back",10,10,Story_1);
        next_button("next",820,10,Story_3);
        script("Poro","The second game is a simple click game.");
    }
    break;
    case Story_3:
    {
        image(game2_simulation,0,0,width,400)
        back_button("back",10,10,Story_2);
        next_button("next",820,10,Story_4);
        script("Poro","Just click on the spinning blue balls.\nWhen you click on the blue ball, \nit turns red and stops.");
    }
    break;
    case Story_4:
    {
        image(game2_simulation,0,0,width,400)
        back_button("back",10,10,Story_3);
        next_button("next",820,10,shot_game);
        script("Poro","Be careful not to run out of bullets.");
    }
    break;
    case shot_game:
    {
        image(bullet_img,750,450,100,100);
        textAlign(CENTER);
        textSize(60);
        text("X",830,530);
        text(bullet,880,530);
        text(say_words[index],220,50);
        
        //target
        target_1.update();
        target_1.draw();
        target_2.update();
        target_2.draw();
        target_3.update();
        target_3.draw();
        target_4.update();
        target_4.draw();
        target_5.update();
        target_5.draw();
        target_6.update();
        target_6.draw();
        target_7.update();
        target_7.draw();
        target_8.update();
        target_8.draw();
        target_9.update();
        target_9.draw();
        target_10.update();
        target_10.draw();
        //game over
        if (mouseIsPressed == true && mouseWasPressed == false)
        {
            gun_shot.play();
            gun_shot.setVolume(0.5);
            bullet = bullet -1
            index = index + 1
            if(index > 2)
            {
                index = 0
            }
        }

        if(bullet == 0 && target_count >= 1) 
        {
            CurrentScreen = game_over
        }

        //game clear
        if(target_count == 0)
        {
            CurrentScreen = last_Story1
        }
        
        //scope
        push();
        strokeWeight( 2 );
       
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
    case last_Story1:
    {
        next_button("next",820,10,last_Story2);
        script("Poro","Congratulations!\n The last one is a simple brain game.")
    }
    break;
    case last_Story2:
    {
        back_button("back",10,10,last_Story1);
        next_button("next",820,10,final_mission);
        script("Poro","Change A, B, C, D all to 3.")
    }
    break;
    case final_mission:
    {
        for(let a = 0; a<= 60; a++)
        {
        push();
        noStroke();
        
        fill( 5*a, 100, 110);
        rect(0,10*a,width,10);
        pop()
        }

        push()
        textAlign(CENTER);
        textSize(50);
        text('A:',100,100);
        text('B:',100,225);
        text('C:',100,375);
        text('D:',100,500);
        text(A_number,160,100);
        text(B_number,160,225);
        text(C_number,160,375);
        text(D_number,160,500);
        pop();
        game3_button1("-1,-1,-1,-1",400,30);
        game3_button2("0,1,0,1",700,30);
        game3_button3("1,0,1,0",400,330);
        game3_button4("1,1,1,1",700,330);
    }
    break;
    case game_over:
    {
        text("Game\nover\nPress F5",width/2,height/3);
      
    }
    break;
    case game_clear:
    {
        text("Game\nclear!\nTHANK YOU \n FOR PLAY MY GAME",width/2,height/3);
    }
    break;


    }
        
    
    mouseWasPressed = mouseIsPressed;

}

