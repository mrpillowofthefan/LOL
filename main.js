canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var firstpositionofx, firstpositionofy;
var color="#718a3d";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
    function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft;
    currentpositionofy=e.clientY-canvas.offsetTop;
    if(mouseevent="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.moveTo(firstpositionofx, firstpositionofy);
        ctx.lineTo(currentpositionofx,currentpositionofy);
        ctx.stroke();
    }
    firstpositionofx=currentpositionofx;
    firstpositionofy=currentpositionofy;
}
