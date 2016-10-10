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

exports.turnModule = Turn;
