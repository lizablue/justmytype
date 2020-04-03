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

// display sentences one at a time
function displaySent() {
  $('#sentence').append(currentSentence);
};

// display next character in sequence
function displayChar() {
  $('#target-letter').append(currentLetter.charAt(letterIndex));
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
    ('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
  } else {
    console.log('incorrect');
    ('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
  }
  // display target letter in current sentence
  if (letterIndex < currentSentence.length) {
    displayChar();
    letterIndex++;
  } else {
    sentenceIndex++;
    resetDisp();
  };
});

// reset display with new sentence
function resetDisp() {
  $('#feedback') = null
  let letterIndex = 0;
  // $('#yellow-block') = 
};

let numberOfMistakes
let minutes = $('#minutes').val() * 60
let score = 54 / minutes - 2 * numberOfMistakes

// game results
if (sentenceIndex < sentences.length) {
  displaySent();
}
else {
  $('#sentence').text('Sentences complete! You typed ' + score + ' words per minute.');
  $('#target-letter').append('<button> Play Again?</button>');
}

// reset game to beginning
function resetGame() {
  let letterIndex = 0;
  let sentenceIndex = 0;
  displaySent();
  resetDisp();
};

  // keyPressed.charCodeAt()

  //timer
// let sec = 0;
// function pad(val) { return val > 9 ? val : "0" + val; }
// setInterval(function () {
//   $("#seconds").html(pad(++sec % 60));
//   $("#minutes").html(pad(parseInt(sec / 60, 10)));
// }, 1000);