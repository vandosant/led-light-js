window.Lights = {

  all: [],

  render: function(){
    var divs = [], x, y, $div;
    var longSide = 40;
    var shortSide = longSide / 2;
    var padding = shortSide / 2;

    for (var i = 0; i < 10; i++) {
      x = (i * longSide) + ((i + 1) * padding);
      $div = $('<div class="hline">').css({
        top: padding,
        left: x
      });
      divs.push($div);
    }

    for (i = 0; i < 4; i++) {
      y = (i * longSide) + ((i + 1) * padding) + shortSide;
      $div = $('<div class="vline">').css({
        top: y,
        left: x + padding + shortSide
      });
      divs.push($div);
    }

    for (i = 9; i > -1; i--) {
      x = (i * longSide) + ((i + 1) * padding);
      $div = $('<div class="hline">').css({
        top: y + longSide + padding,
        left: x
      });
      divs.push($div);
    }

    for (i = 3; i > -1; i--) {
      y = (i * longSide) + ((i + 1) * padding) + shortSide;
      $div = $('<div class="vline">').css({
        top: y,
        left: padding
      });
      divs.push($div);
      $("body").append($div);
    }

    $.each(divs, function(){
      $("body").append(this);
    });

    this.all = divs;
  }

};