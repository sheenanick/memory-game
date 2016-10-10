var Turn = require('./../js/memory.js').turnModule;

$(document).ready(function(){
  var turn = new Turn();
  var counter = 0;
  $(".col-md-2").click(function() {
    counter++;
    if (counter % 2 == 1) {
      turn.clear();
    }
    var id = this.id;
    $("#" + id).removeClass("background");
    $("#" + id + "img").show();
    var card = $("#" + id + " img").attr("src");
    var sameCard = turn.flipCard(card, id);
    if (counter % 2 == 0 && sameCard == false) {
      $("#" + turn.cardIds[0] + "img").delay(500).fadeOut();
      $("#" + turn.cardIds[1] + "img").delay(500).fadeOut();
      setTimeout(function() {
        $("#" + turn.cardIds[0]).addClass("background")
        $("#" + turn.cardIds[1]).addClass("background")
      }, 1000);
    }
  });

});
