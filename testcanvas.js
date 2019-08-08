// JavaScript Document

//window.addEventListener('load', () =>{
//	var canvas = document.querySelector('#canvans');
//    var ctx; 
//	//= canvas.getContext('2d');
//	//resizing 
//	canvas.height = window.innerHeight;
//	canvas.width = window.innerWidth;
//	//shapre
//	ctx.fillStyle('green');ctx.lineWidth =5;
//	ctx.fillRect(50,50,200);
//	//drawline 
//	ctx.beginPath();
//	ctx.moveTo(100,100);
//	ctx.lineTo(200,150);
//	ctx.stroke();
	//painting
	//variables
//	let painting = false;
//	
//	function startPosition(e){painting = true;draw(e);}
//	
//	function finishposition(){painting = false;ctx.beginPath()}
//	
//	function draw(e) {
//		if(!painting) 
//		return;
//		ctx.lineWidth = 10;
//		ctx.lineCap = 'round';
//		ctx.lineTo(e.clientX, e.clientY);
//		ctx.stroke();
//		ctx.beginPath();
//		ctx.moveTo(e.clientX, e.clientY);
//	}
//	//evenlister
//	canvas.addEventListener("mousedown", startPosition);
//	canvas.addEventListener("mouseup", finishposition);
//	canvas.addEventListener("mousemove", draw);
//});

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
