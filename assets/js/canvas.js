
var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = new Array();
var rint = 60;

$(document).ready(function(){

  WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	$('canvas').width(WIDTH).height(HEIGHT);

  canvas = document.getElementById('star-particle');

  $(canvas).attr('width', WIDTH).attr('height',HEIGHT);

  con = canvas.getContext('2d');

  for(var i = 0; i < 100; i++) {
		pxs[i] = new Circle();
		pxs[i].reset();
	}

  setInterval(draw,rint);


  var $container = $('canvas');

	$container.mousedown(function(ev){
		var ox = ev.clientX;

		$container.mouseup(function(){
			$container.unbind('mousemove');
			$container.unbind('mouseup');
		});
	});
});

function draw() {
	con.clearRect(0,0,WIDTH,HEIGHT);
	for(var i = 0; i < pxs.length; i++) {
		pxs[i].fade();
		pxs[i].move();
		pxs[i].draw();
	}
}

function Circle() {
	this.s = {ttl:5000, xmax:4, ymax:5, rmax:4, rt:1, xdef:1920, ydef:800, xdrift:9, ydrift: 1, random:true, blink:true};

	this.reset = function() {
		this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef);
		this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef);
		this.r = ((this.s.rmax-1)*Math.random()) + 1;
		this.dx = (Math.random()*this.s.xmax) * (Math.random() < .5 ? -1 : 1);
		this.dy = (Math.random()*this.s.ymax) * (Math.random() < .5 ? -1 : 1);
		this.hl = (this.s.ttl/rint)*(this.r/this.s.rmax);
		this.rt = Math.random()*this.hl;
		this.s.rt = Math.random()+1;
		this.stop = Math.random()*.2+.4;
		this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
		this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
	}

	this.fade = function() {
		this.rt += this.s.rt;
	}

	this.draw = function() {

    if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;

		else if(this.rt >= this.hl) this.reset();
		var newo = 1-(this.rt/this.hl);
		con.beginPath();
		con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    // con.lineWidth=5;
    // con.strokeRect(this.x,this.y,this.r,0,Math.PI*2,true);
    // con.strokeRect(this.x,this.y,80,100);
		con.closePath();
		var cr = this.r*newo;
		g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
		// g.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
		g.addColorStop(this.stop, 'rgba(19,0,97,'+(newo*.5)+')');
		// g.addColorStop(1.0, 'rgba(92,164,69,0)');
		con.fillStyle = g;
		con.fill();
	}

	this.move = function() {
		this.x += (this.rt/this.hl)*this.dx;
		this.y += (this.rt/this.hl)*this.dy;
		if(this.x > WIDTH || this.x < 0) this.dx *= -1;
		if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
	}

	this.getX = function() { return this.x; }
	this.getY = function() { return this.y; }
}
