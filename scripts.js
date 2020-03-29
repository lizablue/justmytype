
$(document).ready(function () {
  // hide uppercase keyboard when page loads
  $('#keyboard-upper-container').hide();

  // toggle keyboards if shift key is pressed
  // show upper keyboard
  $(document).on({
    keydown: function (e) {
      if (e.originalEvent.key === "Shift") {
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
    }
  })

  // style key on keypress
  $(document).keydown(function (e) {
    let keyPressed = event.keyCode // letter/character pressed  
    // let asciiVal = event.which; // ascii value or keyPressed
    // let key = $(this).attr('id');
    // let keyId = $(e.currentTarget.activeElement).attr('id');
    // let keyId = e.id
    console.log(keyPressed);
  });
  // let ascii = {
  //   "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
  //   "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
  //   "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
  //   "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
  //   "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
  //   "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
  //   "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
  //   "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
  //   "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
  //   "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
  //   "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
  //   "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
  //   "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
  //   "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
  //   "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
  //   "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
  //   "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
  //   "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
  //   "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
  //   "126": "~",    "127": ""
  //   };

  // sentence array
  let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

  function resetGame() {
    displaySent();
    
  }
  
    // reset display with new sentence
  function resetDisp() {
    $('#feedback') = null
    // $('#yellow-block') = 
  }

  // display next character in sequence
  let x = 0
  function displayChar() {
    $('#target-letter').text(displayText.charAt(x));
  }

  // display sentences one at a time
  let i = 0;
  let displayText = sentences[i];
  function displaySent() {
    $('#sentence').text(displayText);

    if (x < displayText.length) {
      x++;
      displayChar();
    } else {
      i++;
      resetDisp();
    }
  };

  if (i < sentences.length) {
    displaySent();
  } else {
    $('sentence').text('You completed all the sentences! Your score is ' + words + ' per minute.');
    $('#target-letter').append('<button> Play Again?</button>');
  }
  
  // keyPressed.charCodeAt()


});