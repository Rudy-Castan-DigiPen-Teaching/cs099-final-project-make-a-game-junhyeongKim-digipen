// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021



class object{

    constructor(first_position,object_speed,object_line)
    {
        this.first_position = first_position;
        this.object_speed = object_speed;
        this.object_line = object_line;
        this.game1_object_speed = 0;
    }

    update()
    {
        this.game1_object_speed += this.object_speed
    }

    draw()
    {
        push()
        imageMode(CENTER);
        
        image(square,this.first_position-this.game1_object_speed,this.object_line,50,50)
        pop()
    }
}
