var currentColor = 'red';
var canvasHolder = [];
document.addEventListener('DOMContentLoaded', function(){

console.log('made it to for loop');
  var board=document.getElementById('board');
  for(var i = 0; i < 1000;i++){

  var canvas=document.createElement('div');
      canvas.className += 'canvas'+i;
      canvas.style.height='20px'
      canvas.style.width='20px'
      canvas.style.float='center';
      board.appendChild(canvas);
      canvas.addEventListener('mouseover',function(event){
        console.log(event.target);
        this.style.backgroundColor = currentColor;

      });

    }


  console.log(canvas);




// for(var i =0; i < currentColor.length; i++){}
  var colorSpace = document.getElementsByClassName('colorSpace')[0];

     colorSpace.addEventListener('click', function(event){
       console.log(event.target.id);
      currentColor = event.target.id;     // Targeted
      console.log(currentColor)
})
});


//
// var red = document.getElementById('red');
// red.addEventListener('click',function(event){
//   event.target.style.backgroundColor = "red"
// });
// var orange = document.getElementById('orange');
// orange.addEventListener('click', function(event){
//   event.target.style.backgroundColor ="orange"
// });
// var yellow = document.getElementById('yellow');
// yellow.addEventListener('click',function(event){
//   event.target.style.backgroundColor = 'yellow'
// });
// var green = document.getElementById('green');
// green.addEventListener('click', function(event){
//   event.target.style.backgroundColor= 'green'
// });
//  var blue = document.getElementById('blue');
//  blue.addEventListener('click', function(event){
//    event.target.style.backgroundColor = 'blue'
//  });
// var purple = document.getElementById('purple');
// purple.addEventListener('click', function(event){
// event.target.style.backgroundColor = 'purple'
// });
// var black = document.getElementById('black');
// black.addEventListener('click',function(event){
// event.target.style.backgroundColor = 'black'
// });
// var colors ={red,orange,yellow,green,blue,purple,black}
// function pickcolor(){
//   for(var c = 0;c < colors[6];c++){
//     return currentColor(colors)
//     }
//   }
