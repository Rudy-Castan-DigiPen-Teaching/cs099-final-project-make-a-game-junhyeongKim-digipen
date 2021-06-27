// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

class target{

    constructor(x,y,target_range,target_color,target_life=1)
    {
        this.x = x;
        this.y = y;
        this.target_range = target_range;
        this.target_color = target_color;
        this.target_life = target_life;
        this.X_speed = random(-10,10);
        this.Y_speed = random(-10,10);
    }
    
    update()
    {
        if(this.x>0 && this.x<width)
        {
            this.x = this.x + this.X_speed;
        } 
        else if(this.x < 0)
        {
            this.x = width-1
        }
        else if(this.x > width)
        {
            this.x = 1
        }
        
        
        if(this.y>0 && this.y<height)
        {
            this.y = this.y + this.Y_speed
        }
        else if(this.y < 0)
        {
            this.y = height-1
        }
        else if(this.y > height)
        {
            this.y = 1
        }
        
        
        
        const isMouseXRange = mouseX>=this.x-this.target_range/2 && mouseX<= this.x + this.target_range/2;
        const isMouseYRange = mouseY>=this.y-this.target_range/2 && mouseY<= this.y + this.target_range/2;
       
        if (mouseIsPressed == true && mouseWasPressed == false)
        {
            mark_color_R = 100;
            if(isMouseXRange && isMouseYRange)
            {
                this.target_color = 'red';
                this.X_speed = 0;
                this.Y_speed = 0;
                if(this.target_life==1)
                {
                target_count = target_count -1;
                this.target_life = this.target_life -1;
                }
            } 
        }
        else
        {
            mark_color_R = 255;
        }
 
        
      
     

        
    }

    draw()
    {
        push();
        fill(this.target_color);
        circle(this.x,this.y,this.target_range);
        pop();
    }


}