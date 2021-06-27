// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

class game1_player{

    constructor(x)
    {
        this.x = x;
    }

    update()
    {
        if(keyIsPressed == true )
        {
            if(key == 1)
            {
                this.x = game1_load1
            }
            if(key == 2)
            {
                this.x = game1_load2
            }
            if(key == 3)
            {
                this.x = game1_load3
            }
    
        }
      
        //object_x = 1110 speed = 1 first = 950

        //hit point
        
        //object_1
        if(game1_score>=950 && game1_score<= 1050 && this.x == game1_load2 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_3
        if(game1_score>=1450 && game1_score<= 1550 && this.x == game1_load2 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_4
        if(game1_score>=1450 && game1_score<= 1550 && this.x == game1_load1 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_5
        if(game1_score>=1350 && game1_score<= 1450 && this.x == game1_load1 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_7
        if(game1_score>=1950 && game1_score<= 2050 && this.x == game1_load3 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_8
        if(game1_score>=2250 && game1_score<= 2350 && this.x == game1_load2 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_10
        if(game1_score>=1650 && game1_score<= 1750 && this.x == game1_load1 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_11
        if(game1_score>=2050 && game1_score<= 2150 && this.x == game1_load2 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_12
        if(game1_score>=2250 && game1_score<= 2350 && this.x == game1_load3 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_13
        if(game1_score>=2650 && game1_score<= 2750 && this.x == game1_load2 )
        {
            game1_player_life -= 30
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_x = 1110 speed = 2 first = 475
        
        //object_2
        if(game1_score>=475 && game1_score<= 525 && this.x == game1_load3 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_6
        if(game1_score>=575 && game1_score<= 625 && this.x == game1_load3 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_9
        if(game1_score>=975 && game1_score<= 1025 && this.x == game1_load3 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_14
        if(game1_score>=1475 && game1_score<= 1525 && this.x == game1_load1 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_15
        if(game1_score>=1975 && game1_score<= 2025 && this.x == game1_load3 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_16
        if(game1_score>=2075 && game1_score<= 2125 && this.x == game1_load1 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_17
        if(game1_score>=2975 && game1_score<= 3025 && this.x == game1_load2 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }
        //object_18
        if(game1_score>=2475 && game1_score<= 2525 && this.x == game1_load1 )
        {
            game1_player_life -= 15
            push()
            fill(255,0,0,20)
            rect(0,0,width,height);
            pop()
            hit_sound.play()
            hit_sound.setVolume(0.5);
        }

        if(game1_player_life <= 0 )
        {
            CurrentScreen = game_over
        }
    }

    draw()
    {
        push();
        circle(110,this.x,50);
        pop();
    }


}