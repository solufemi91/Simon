$(function(event) {

var $startButton = $('#startButton');
var $zeroBox = $('#zero');
var $oneBox = $('#one');
var $twoBox = $('#two');
var $threeBox = $('#three');
var $boxes = $('.boxes');
var boxes = document.getElementsByClassName('boxes');
var fourColours = ['red','blue','green','yellow'];
var i = 0;
$startButton.click(function(){

  var id = setInterval(frame,1000);
  function frame(){
    if(i==4){
      clearInterval(id);
      $boxes.css('background-color','white')
    } else {
    boxes[i].style.backgroundColor = fourColours[i];
    i++;
   }
  }

})


});
