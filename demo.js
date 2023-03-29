var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,100,100);

var maths=document.getElementById("math");

maths.innerHTML=

"<b>math PI value is </b> "+ Math.PI +"<br>"+

"<b>math E value is </b> "+ Math.E +"<br>"+

"<b>math SQRT2 value is </b> "+ Math.SQRT2 +"<br>"+

"<b>math SQRT1_2 value is </b> "+ Math.SQRT1_2 +"<br> <br>"+ 

"<b> rounded value of 4.6 is </b> "+ Math.round(4.6) +"<br>"+

"<b> ceil value of 4.0 is </b> "+ Math.ceil(4.0) +"<br>"+

"<b> floor value of 1.7 is </b> "+ Math.floor(1.7) +"<br>"+

"<b> trunc value of 12.13 is </b> "+ Math.trunc(12.13) +"<br>"+

"<b> pow value of 8,2 is </b> "+ Math.pow (8,2) +"<br>"+

"<b> min value of 0,150,20,-6,3,-1  is </b> "+ Math.min (0,150,20,-6,3,-1) +"<br>"+

"<b> max value of 0,150,20,-6,3,-1  is </b> "+ Math.max (0,150,20,-6,3,-1) +"<br>"+

"<b> random value btw 0,1 is  </b> "+ Math.random () +"<br>";

 