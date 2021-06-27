# Shapes
## How to use
You can use this to create visual shapes. There're arc(),rect(),circle(),ellipes() of type. You can make a lot of things using these. 
You can create details using something like 'rect mode()'.
## example
I use rect() and circle().

  rect(0,0,width,height);
  circle(this.x,this.y,this.target_range);
 
# Colors
## How to use
We can change the color of the shapes or text I made. There're fill(),noFill(),stroke() of type.
## example
fill('#888888'); // you can use 'black(color)','#000000','0~255'\
fill(0,30); // 30<- is 'Transparency'. You can use '0~255'\
fill( 5*a, 100, 110); // In other words, RGB.\
fill(255,0,0,20); // In other words. R,G,B,'Transparency'

# Variables
## How to use
A variable is a name given to a space where information can be stored. It can move objects or change colors.
## example
let bullet = 30; \
let target_count =10;\
let mark_color_R = 255; \
let mark_color_G = 000; \
let mark_color_B = 000; \
let mark_color_transparency = 255; \
A_number = A_number-1 

# Conditional Statements
## How to use
A conditional statement is a statement that controls the performance of separate commands based on the results of a given conditional expression.
There're switch() case:{},if() of type.
## example
switch (CurrentScreen){case MAIN_MENU:{}}
if(mouseIsPressed == true && mouseWasPressed == false){} // let mouseWasPressed = false;
    
# Loops
## How to use
A conditional statement is a method of instructing a computer to perform repetitive tasks. There're while, for of type.
## example
 for(let a = 0; a<= 60; a++) \
{\
push();\
noStroke();\
fill( 5*a, 100, 110);\
rect(0,10*a,width,10);\
pop()\
}\
//I used this to show gradation effect.


# Functions
## How to use
The Function constructor creates a new Function object. It is convenient to combine overlapping things as a function.
## example

function button(word,X,Y,screen)\
{\
    textAlign(CENTER);\
    const button_width = width /2;\
    const button_height = 75;\
    const Play_button_left = X;\
    const Play_button_top = Y;\
    const mouse_is_within_x_range = mouseX >= Play_button_left && mouseX < button_width+X;\
    const mouse_is_within_y_range = mouseY > Play_button_top && mouseY < Play_button_top + button_height;\
    push();\
    strokeWeight(10);\
    stroke('#CC99FF');\
    fill(255);\
    if(mouse_is_within_x_range && mouse_is_within_y_range)\
    {\
        fill(230);\
    }\
    rect(Play_button_left, Play_button_top, \
        button_width, button_height);\
    pop();\
    textSize(50);\
    text(word, Play_button_left+button_width/2, Play_button_top+button_height/2 +15 );\
    if (mouseIsPressed == true && mouseWasPressed == false)\
    {\
        if(mouse_is_within_x_range && mouse_is_within_y_range)\
        {\
            CurrentScreen = screen;\
        }\
    }\
}

// I made a button using a function. 'word' is the letter to be written on the button, 'X,Y' is the position where the button is created, and 'screen' is the 'CurrentScreen' value that changes when the button is pressed.
# Classes
## How to use
Class is a framework that defines variables and methods to create specific objects. 
## example
class target{\
    constructor(x,y,target_range,target_color,target_life=1)\
    {\
        this.x = x;\
        this.y = y;\
        this.target_range = target_range;\
        this.target_color = target_color;\
        this.target_life = target_life;\
        this.X_speed = random(-10,10);\
        this.Y_speed = random(-10,10);\
    }\
    update()\
    {\
        if(this.x>0 && this.x<width)\
        {\
            this.x = this.x + this.X_speed;\
        } \
        else if(this.x < 0)\
        {\
            this.x = width-1\
        }\
        else if(this.x > width)\
        {\
            this.x = 1\
        }\
        if(this.y>0 && this.y<height)\
        {\
            this.y = this.y + this.Y_speed\
        }\
        else if(this.y < 0)\
        {\
            this.y = height-1\
        }\
        else if(this.y > height)\
        {\
            this.y = 1\
        }\
        const isMouseXRange = mouseX>=this.x-this.target_range/2 && mouseX<= this.x + this.target_range/2;\
        const isMouseYRange = mouseY>=this.y-this.target_range/2 && mouseY<= this.y + this.target_range/2;\
        if (mouseIsPressed == true && mouseWasPressed == false)\
        {\
            mark_color_R = 100;\
            if(isMouseXRange && isMouseYRange)\
            {\
                this.target_color = 'red';\
                this.X_speed = 0;\
                this.Y_speed = 0;\
                if(this.target_life==1)\
                {\
                target_count = target_count -1;\
                this.target_life = this.target_life -1;\
                }\
            } \
        }\
        else\
        {\
            mark_color_R = 255;\
        }\
    }\
    draw()\
    {\
        push();\
        fill(this.target_color);\
        circle(this.x,this.y,this.target_range);\
        pop();\
    }\
}\
//I wrote variables in 'constructor()' and I added functions such as conditional statements in 'update()', and I drew shapes in 'draw().
# Arrays
## How to use
Array is  bringing together several data of the same format. Array use[]. If 'let ary = [a,b,c]' is 'ary[0] =a', 'ary[1] = b' and 'ary[2] = c' from the beginning.
## example
let say_words = ["Cheer up!", "Don't Give up!", "play it cozy!"]\
text(say_words[index],220,50);\
if (mouseIsPressed == true && mouseWasPressed == false)\
{\
    index = index + 1\
    if(index > 2)\
    {\
        index = 0\
    }\
}\
//I made the words in the array of 'say_words' appear every time I press the mouse.