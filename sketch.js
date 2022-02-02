 var notas = [10,7,9,10,8,3,5,7,6,10,12];
var sum = 0;
 
function setup() 
{
  createCanvas(400,400);
   for (var i = 0; i<notas.length; i++) {
     sum = sum + notas [i];
   }
    
  var average = sum/notas.length;
  console.log (average)
}

function draw() 
{
background(51);

}

