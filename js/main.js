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

  // boxes[1].style.backgroundColor = fourColours[1];
  // $zeroBox.css('background-color','red');
  // $oneBox.css('background-color','blue');
  // $twoBox.css('background-color','green');
  // $threeBox.css('background-color','yellow');

  var id = setInterval(frame,1000);
  function frame(){
    boxes[i].style.backgroundColor = fourColours[i];
    i++;
  }




})


});
