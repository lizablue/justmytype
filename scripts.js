$(document).ready(function () {
    // hide uppercase keyboard when page loads
    $('#keyboard-upper-container').hide();

    // toggle keyboards if shift key is pressed
    // show upper keyboard
    $(document).on({
        keydown: function(e) {
          if (e.originalEvent.key === "Shift") {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
          }
        }
    });
    //show lower keyboard
    $(document).on({
        keyup: function(e) {
            if (e.originalEvent.key === "Shift") {
              $('#keyboard-upper-container').toggle();
              $('#keyboard-lower-container').toggle();
            }
        }
    })
    
    // style key on keypress
    // let key = $('#65')

    $(document).on({
      keydown: function(e) {
        if (e.originalEvent.key === 'a') {
          $('#97').css('background-color', 'blue');
        }
      }
  });
  $(document).on({
      keyup: function(e) {
          if (e.originalEvent.key === 'a') {
            $('#97').css('background-color', '');
          }
      }
  })
});