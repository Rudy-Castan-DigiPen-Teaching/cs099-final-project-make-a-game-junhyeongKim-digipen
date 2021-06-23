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
                this.x = 200
            }
            if(key == 2)
            {
                this.x = 350
            }
            if(key == 3)
            {
                this.x = 500
            }
    
        }
      
        if(a==1000 && this.x == 350 )
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