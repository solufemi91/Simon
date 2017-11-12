$(function(event) {

var $startButton = $('#startButton');
var boxes = document.getElementsByClassName('boxes');
var $boxes = $('.boxes');
var $redBox = $('#red');
var $blueBox = $('#blue');
var $greenBox = $('#green');
var $yellowBox = $('#yellow');
var fourColours = ['red','blue','green','yellow'];
var playersChoice = [];
var computersChoice = [];
var randomBox = 0;
var randomColor = 0
var counter = 0;
var id = 0;


$boxes.click(function(){
  var boxIClicked = $(this).attr('id');
  $(this).css('backgroundColor',boxIClicked);

  playersChoice.push(boxIClicked);
  console.log(playersChoice);
})

$startButton.click(function(){

  var id = setInterval(frame,500);
  function frame(){
    if(randomColor != 0){
      randomBox.style.backgroundColor = 'white';
      randomColor = 0;
      counter++


      checkCounter();

    } else{
    randomBox = boxes[Math.floor(Math.random() * 4)]
    randomColor = randomBox.getAttribute('id')
    computersChoice.push(randomColor);
    console.log(computersChoice)
    randomBox.style.backgroundColor = randomColor;
    /// wait a few milli seconds and then change it to white
    
  }
  function checkCounter(){
    if(counter == 4){
      clearInterval(id);

    }
  }

  }

})




// press a button
// any combination of the boxes should flash 4 times
// a notification to tell the player when he should start copying the pattern
//a way of recording what the player has entered
// a submit button
// a message indicating whether the answer was right or not



});
