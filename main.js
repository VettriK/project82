canvas=document.getElementById("myCanvas")
draw=canvas.getContext("2d")
mouse_event="empty"
var xpos,ypos
var color = "black"
var width = 1
canvas.addEventListener("mousedown",mousedownfn)
function mousedownfn(e){
    color = document.getElementById("color").value
    width = document.getElementById("width").value
    mouse_event = "mousedown"
}
canvas.addEventListener("mouseleave",mouseleavefn)
function mouseleavefn(e){
    mouse_event = "mouseleave"
}
canvas.addEventListener("mouseup",mouseupfn)
function mouseupfn(e){
    mouse_event = "mouseup"
}
canvas.addEventListener("mousemove",mousemovefn)
function mousemovefn(e){
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop
    if(mouse_event=="mousedown"){
        draw.beginPath()
        draw.strokeStyle = color
        draw.lineWidth= width
        draw.arc(currentX,currentY,20,0,2*Math.PI)
        draw.stroke()
    }
    xpos=currentX
    ypos=currentY
}
function Clear(){
    draw.clearRect(0,0,800,600)
    console.log("clear")
}