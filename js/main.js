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
var randomColor = 0;
var counter = 0;
var id = 0;
var indexCounter = -1;
var clickCounter = 0
var correctClicks = 0;
var incorrectClicks = 0;
var $congratulationsMessage = $('#congratulations');
var $displayMessage = $('.displayMessage');
var $promptToEnter = $('#promptToEnter');
var $numberOfClicksMade = $('#numberOfClicksMade');
var level = 4;
var $scoreboard = $('#scoreboard')
var totalscore = 0;
var $clickRegister = $('#clickRegister')
var boxIClicked = 0;
var clickRegCount = 0;

/// player making their choice about what to pick
$boxes.click(function(){
  if(clickCounter < level && incorrectClicks == 0){
  var boxIClicked = $(this).attr('id');
  $(this).css('backgroundColor',boxIClicked);

  // insert code to make the the click register flashes
  function clickreg() {
    var id10 = setInterval(frame,200);

    function frame(){
      if($clickRegister.html() != ''){
        $clickRegister.html('')
        clickRegCount++
        checkClickReg()
      }
      else {
      $clickRegister.html(boxIClicked);
      $clickRegister.css('color',boxIClicked);
      }
    }
    function checkClickReg(){
      if(clickRegCount == 1){
      clearInterval(id10);
      clickRegCount = 0;
      }
    }

  };
  clickreg();
  // $clickRegister.html(boxIClicked);
  // $clickRegister.css('color',boxIClicked);
  playersChoice.push(boxIClicked);
  // each click create an index value for the two arrays when they are compared

    indexCounter++
    clickCounter++
    compareArrays();
    console.log(playersChoice);
  }
})

//random colors being genrated four times when the start button is clicked

$startButton.click(function(){

  resetter();
  var id = setInterval(frame,500);
  function frame(){
    if(randomColor != 0){
      randomBox.style.backgroundColor = 'white';
      randomColor = 0;
      counter++;
      checkCounter();

    } else {
    randomBox = boxes[Math.floor(Math.random() * 4)];
    randomColor = randomBox.getAttribute('id');
    computersChoice.push(randomColor);
    console.log(computersChoice);
    randomBox.style.backgroundColor = randomColor;
    /// wait a few milli seconds and then change it to white

  }
  // once four flashes has happened, the timer is stopped
  function checkCounter(){
    if(counter == level){
      clearInterval(id);
      counter = 0;
      $promptToEnter.html('Copy the pattern')
    }
  }

  }

})

// this function is called each time the player makes a choice. If a selection is correct, a
// message is displayed saying that it is correct
function compareArrays(){

  if(computersChoice[indexCounter] === playersChoice[indexCounter]){
    correctClicks++;
    if(correctClicks==level){
      $congratulationsMessage.html("Level " + level + " passed! Click Start to proceed to next level");
      level++;
      totalscore += correctClicks;
      $scoreboard.html('Score: ' + totalscore)
    }

    else if (clickCounter == level && correctClicks < level) {
      $congratulationsMessage.html("Unfortunately you lost this round. Click start to try again")
      // $displayMessage.html('Score ' + correctClicks);
      // $numberOfClicksMade.html('number of clicks made ' + clickCounter);
    }
    // $displayMessage.html('Score ' +  correctClicks);
    // $numberOfClicksMade.html('number of clicks made ' + clickCounter);
  }

  else if (computersChoice[indexCounter] !== playersChoice[indexCounter]){
    incorrectClicks++
    $congratulationsMessage.html("Unfortunately you lost this round. Click start to try again")
    $displayMessage.html('Score ' + correctClicks);
    $numberOfClicksMade.html('number of clicks made ' + clickCounter);

  }
  // else if (clickCounter == level && correctClicks < level){
  //
  //   $congratulationsMessage.html("Unfortunately you lost this round. Click start to try again")
  //   $displayMessage.html('Score ' + correctClicks);
  //   $numberOfClicksMade.html('number of clicks made ' + clickCounter);
  //
  // }

  else {
    // $displayMessage.html('Score ' + correctClicks);
    // $numberOfClicksMade.html('number of clicks made ' + clickCounter);
  }

}

// this function restets everything each time the button is pressed.
function resetter(){
  $congratulationsMessage.html('')
  $promptToEnter.html('')
  // $displayMessage.html('');
  // $numberOfClicksMade.html('');
  indexCounter = -1;
  playersChoice = [];
  computersChoice = [];
  $('.boxes').css('backgroundColor','white');
  clickCounter = 0;
  correctClicks = 0;
  incorrectClicks = 0;

}



});
