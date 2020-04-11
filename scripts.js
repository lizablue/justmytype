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
  $('#sentence').empty();
  $('#sentence').append(currentSentence);
};

// display next character in sequence
function displayChar() {
  $('#target-letter').empty();
  $('#target-letter').append(currentLetter);
  
};

// reset display with new sentence
function resetDisp() {
  $('#feedback').empty();
  letterIndex = 0;
  $('#yellow-block').removeAttr('style');
};

// keep track of letterIndex and sentenceIndex
function indexCounter() {
  letterIndex++;
  if (currentSentence.length < letterIndex) {
    sentenceIndex++;
    displaySent();
    resetDisp();
  } else {
    displayChar();
  };
};

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
  // give feedback on key that was pressed
  if (currentSentence.charCodeAt(letterIndex) === keyPressed) {
    $('#feedback').append('<p class="glyphicon glyphicon-ok"></p>');
  } else {
    $('#feedback').append('<p class="glyphicon glyphicon-remove"></p>');
  }
  $('#yellow-block').animate({
    marginLeft: '+=18px'
  },100);
  console.log('li = ' + letterIndex);
  console.log('si = ' + sentenceIndex);
  console.log('cl = ' + currentLetter);
  console.log('cs = ' + currentSentence);
  // move to the next letter or sentence
  indexCounter();
  // displayChar();
});

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
  letterIndex = 0;
  sentenceIndex = 0;
  displaySent();
  displayChar();
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