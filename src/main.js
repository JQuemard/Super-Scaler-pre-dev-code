import audioHandler from "/src/audioHandler.js";
import road from "/src/road.js";
var canvas = document.getElementById("canvas"); //linking script to the html canvas element
var ctx = canvas.getContext("2d"); //sets the renderer context

let dt, pt; ///time the frame takes to render



const y = 50;

let road1 = new road();



function mainLoop(timestamp){

    ctx.fillStyle = '#208dcb';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Segoe UI semibold';
    ///ctx.fillText(`DDZ:${DDZ}, DZ:${DZ}, Z:${Z}`, 15, 30 );

    dt = timestamp - pt;
    pt = timestamp;
    if (dt){
        road1.draw(ctx); 
    }
     



    requestAnimationFrame(mainLoop);
}


mainLoop(); //initial run of loop