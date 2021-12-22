canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mousevent= "empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mousevent="mouseup";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
mousevent="mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mousevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mousevent="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=1;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}

    var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;
    if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";

}

    
    function my_touchdown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        touchEvent = "touchstart";
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
          
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = "Red";
        ctx.lineWidth = 2;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

