// sentence array
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
  'Too ato too nOt enot one totA not anot tOO aNot',
  'oat itain oat tain nate eate tea anne inant nean',
  'itant eate anot eat nato inate eat anot tain eat',
  'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let letterIndex = 0;
let sentenceIndex = 0;
let currentSentence = sentences[sentenceIndex];
let currentLetter = currentSentence[letterIndex];

// display next character in sequence
function displayChar() {
  $('#target-letter').text(displayText.charAt(currentLetter));
}

// hide uppercase keyboard when page loads
$('#keyboard-upper-container').hide();

// toggle keyboards if shift key is pressed
// show upper keyboard
$(document).on({
  keydown: function (e) {
    if (e.key === "Shift") {
      $('#keyboard-upper-container').toggle();
      $('#keyboard-lower-container').toggle();
    }
  }
});
//show lower keyboard
$(document).on({
  keyup: function (e) {
    if (e.originalEvent.key === "Shift") {
      $('#keyboard-upper-container').toggle();
      $('#keyboard-lower-container').toggle();
    }
    // remove key highlight
    $('.highlight').removeClass('highlight');

  }
})

$(document).keypress(function (e) {
  let keyPressed = e.keyCode // letter/character pressed
  $('#' + keyPressed).addClass('highlight') // highlight keys on keypress
  if (currentSentence.charCodeAt(letterIndex) === keyPressed) {
    console.log('correct');
  } else {
    console.log('incorrect');
  }
  // display target letter in current sentence
  if (currentLetter < currentSentence.length) {
    letterIndex++;
    displayChar();
  } else {
    sentenceIndex++;
    resetDisp();
  };
});

// reset game to beginning
function resetGame() {
  displaySent();

}

// reset display with new sentence
function resetDisp() {
  $('#feedback') = null
  // $('#yellow-block') = 
}

// display sentences one at a time
function displaySent() {
  $('#sentence').text(currentSentence);
};


let numberOfMistakes
let minutes = $('#minutes').val() * 60
let score = 54 / minutes - 2 * numberOfMistakes

// game results
if (currentSentence < sentences.length) {
  displaySent();
} else {
  $('#sentence').text('Sentences complete! You typed ' + score + ' words per minute.');
  $('#target-letter').append('<button> Play Again?</button>');
}


  // keyPressed.charCodeAt()

  //timer
// let sec = 0;
// function pad(val) { return val > 9 ? val : "0" + val; }
// setInterval(function () {
//   $("#seconds").html(pad(++sec % 60));
//   $("#minutes").html(pad(parseInt(sec / 60, 10)));
// }, 1000);