var Player = function(mark) {
  this.mark = mark;

  if (mark == "X") {
    this.active = true;
  } else if (mark == "O") {
    this.active = false;
  }

};

export default Player;
