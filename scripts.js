
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

  // key style
  // let style = $('span').attr('background-color: yellow');

  // style key on keypress
  $(document).on({
    keypress: function (e) {
      if (e.originalEvent.key === 'a') {
        $('#97').attr('style', 'background-color: lightblue');
        $('#yellow-block').animate({left: '7px'});
      }
    }
  });
  $(document).on({
    keyup: function (e) {
      if (e.originalEvent.key === 'a') {
        $('#97').attr('style', 'background-color:');
      }
    }
  })

  // sentence array
  let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

  // display sentences one at a time
  function displaySent() {
    let i = 0;
    let displayText = sentences[i];
    $('#sentence').text(displayText);
    function displayChar() {
      let x = 0
      $('#target-letter').text(displayText.charAt(x));
      x++;
    }
    displayChar();
    i++;
  };
  displaySent();



});