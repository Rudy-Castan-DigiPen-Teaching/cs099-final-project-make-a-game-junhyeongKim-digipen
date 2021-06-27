// Name       : junhyeong Kim
// Assignment : make_a_game
// Course     : CS099
// Spring 2021


function game3_button1(word,X,Y)
{
    textAlign(CENTER);
    const button_width = width /4;
    const button_height = 225;
    
    const Play_button_left = X;
    const Play_button_top = Y;
    const mouse_is_within_x_range = mouseX >= Play_button_left && mouseX < button_width+X;
    const mouse_is_within_y_range = mouseY > Play_button_top && mouseY < Play_button_top + button_height;
    
    push();
    strokeWeight(10);
    stroke('#CC99FF');
    fill(255)
    if(mouse_is_within_x_range && mouse_is_within_y_range)
    {
        fill(230);
    }
    rect(Play_button_left, Play_button_top, 
        button_width, button_height);
    pop();
    textSize(50);
    text(word, Play_button_left+button_width/2, Play_button_top+button_height/2 +15 );
    
    if (mouseIsPressed == true && mouseWasPressed == false)
    {
        if(mouse_is_within_x_range && mouse_is_within_y_range)
        {
            A_number = A_number-1
            B_number = B_number-1
            C_number = C_number-1
            D_number = D_number-1

            if(A_number == 3 && B_number==3 && C_number==3 && D_number == 3)
            {
                CurrentScreen = game_clear
            }
        }
    }
}


function game3_button2(word,X,Y)
{
    textAlign(CENTER);
    const button_width = width /4;
    const button_height = 225;
    
    const Play_button_left = X;
    const Play_button_top = Y;
    const mouse_is_within_x_range = mouseX >= Play_button_left && mouseX < button_width+X;
    const mouse_is_within_y_range = mouseY > Play_button_top && mouseY < Play_button_top + button_height;
    
    push();
    strokeWeight(10);
    stroke('#CC99FF');
    fill(255)
    if(mouse_is_within_x_range && mouse_is_within_y_range)
    {
        fill(230);
    }
    rect(Play_button_left, Play_button_top, 
        button_width, button_height);
    pop();
    textSize(50);
    text(word, Play_button_left+button_width/2, Play_button_top+button_height/2 +15 );
    
    if (mouseIsPressed == true && mouseWasPressed == false)
    {
        if(mouse_is_within_x_range && mouse_is_within_y_range)
        {
            B_number = B_number+1
            D_number = D_number+1

            if(A_number == 3 && B_number==3 && C_number==3 && D_number == 3)
            {
                CurrentScreen = game_clear
            }
        }
    }
}


function game3_button3(word,X,Y)
{
    textAlign(CENTER);
    const button_width = width /4;
    const button_height = 225;
    
    const Play_button_left = X;
    const Play_button_top = Y;
    const mouse_is_within_x_range = mouseX >= Play_button_left && mouseX < button_width+X;
    const mouse_is_within_y_range = mouseY > Play_button_top && mouseY < Play_button_top + button_height;
    
    push();
    strokeWeight(10);
    stroke('#CC99FF');
    fill(255)
    if(mouse_is_within_x_range && mouse_is_within_y_range)
    {
        fill(230);
    }
    rect(Play_button_left, Play_button_top, 
        button_width, button_height);
    pop();
    textSize(50);
    text(word, Play_button_left+button_width/2, Play_button_top+button_height/2 +15 );
    
    if (mouseIsPressed == true && mouseWasPressed == false)
    {
        if(mouse_is_within_x_range && mouse_is_within_y_range)
        {
            A_number = A_number+1
            
            C_number = C_number+1
            

            if(A_number == 3 && B_number==3 && C_number==3 && D_number == 3)
            {
                CurrentScreen = game_clear
            }
        }
    }
}


function game3_button4(word,X,Y)
{
    textAlign(CENTER);
    const button_width = width /4;
    const button_height = 225;
    
    const Play_button_left = X;
    const Play_button_top = Y;
    const mouse_is_within_x_range = mouseX >= Play_button_left && mouseX < button_width+X;
    const mouse_is_within_y_range = mouseY > Play_button_top && mouseY < Play_button_top + button_height;
    
    push();
    strokeWeight(10);
    stroke('#CC99FF');
    fill(255)
    if(mouse_is_within_x_range && mouse_is_within_y_range)
    {
        fill(230);
    }
    rect(Play_button_left, Play_button_top, 
        button_width, button_height);
    pop();
    textSize(50);
    text(word, Play_button_left+button_width/2, Play_button_top+button_height/2 +15 );
    
    if (mouseIsPressed == true && mouseWasPressed == false)
    {
        if(mouse_is_within_x_range && mouse_is_within_y_range)
        {
            A_number = A_number+1
            B_number = B_number+1
            C_number = C_number+1
            D_number = D_number+1

            if(A_number == 3 && B_number==3 && C_number==3 && D_number == 3)
            {
                CurrentScreen = game_clear
            }
        }
    }
}
