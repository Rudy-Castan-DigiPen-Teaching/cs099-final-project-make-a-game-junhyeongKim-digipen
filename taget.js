


class target{

    constructor(x,y,target_range,target_color)
    {
        this.x = x;
        this.y = y;
        this.target_range = target_range
        this.target_color = target_color
        const move_x_width = map(width,0,width,100,900)
    }
    
    update()
    {
        if(this.x>0 && this.x<width)
        {
            this.x = this.x + random(1,10)
        }
        
        /*
        if(this.y>0 && this.y<height)
        {
            this.y = this.y + random(1,10)
        }
        */
        
        const mouse_x_range = mouseX>=this.x-this.target_range/2 && mouseX<= this.x + this.target_range/2;
        const mouse_y_range = mouseY>=this.y-this.target_range/2 && mouseY<= this.y + this.target_range/2;
        if (mouseIsPressed == true && mouseWasPressed == false)
        {
            if(mouse_x_range && mouse_y_range)
            {
            this.target_color = 'red'
            }
    
            
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