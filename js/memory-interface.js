function Turn() {
  this.cardsPicked = [];
  this.cardIds = [];
}

Turn.prototype.flipCard = function(card, id) {
  this.cardsPicked.push(card);
  this.cardIds.push(id);
  if (this.cardsPicked[0] == this.cardsPicked[1]) {
    return true;
  } else {
    return false;
  }
}

Turn.prototype.clear = function() {
  this.cardsPicked = [];
  this.cardIds = [];
}

$(document).ready(function(){
  var turn = new Turn();
  var counter = 0;
  $(".col-md-4").click(function() {
    counter++;
    if (counter % 2 == 1) {
      turn.clear();
    }
    var id = this.id;
    $("#" + id + "img").show();
    var card = $("#" + id + " img").attr("src");
    var sameCard = turn.flipCard(card, id);
    if (counter % 2 == 0 && sameCard == false) {
      $("#" + turn.cardIds[0] + "img").hide();
      $("#" + turn.cardIds[1] + "img").hide();
    }
  });

});
