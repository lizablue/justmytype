$(document).ready(function () {
    // hide uppercase keyboard when page loads
    $('#keyboard-upper-container').hide();

    // determine if shift key was pressed
    $(document).on({
        keydown: function(e) {
          if (e.originalEvent.key === "Shift") {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
          }
        }
    });
    $(document).on({
        keyup: function(e) {
            if (e.originalEvent.key === "Shift") {
              $('#keyboard-upper-container').toggle();
              $('#keyboard-lower-container').toggle();
            }
        }
    })
});