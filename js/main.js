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
var randomNumbers = [0,1,2,3]


$startButton.click(function(){
  i=0;
  var id = setInterval(frame,1000);
  function frame(){
    if(randomNumbers.length == 0){
      clearInterval(id);
      $boxes.css('background-color','white');
    } else {

    i = Math.floor(Math.random() * randomNumbers.length);
    console.log(i);
    boxes[i].style.backgroundColor = fourColours[i];
    randomNumbers.splice(i,1);
    i++;
   }
  }

})




});
