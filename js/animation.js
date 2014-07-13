window.Animation = {

  initialize: function (divs) {
    var tailIndex = 0;
    var bodyIndex = 1;
    var headIndex = 2;
    divs[tailIndex].css({background: 'black'});
    divs[bodyIndex].css({background: 'black'});
    divs[headIndex].css({background: 'black'});

    setInterval(function () {
      divs[tailIndex].css({background: 'white'});

      if (headIndex === divs.length-1){
        headIndex = 0;
      } else if (bodyIndex === divs.length-1) {
        bodyIndex = 0;
      } else if (tailIndex === divs.length-1) {
        tailIndex = 0;
      } else {
        tailIndex++;
        bodyIndex++;
        headIndex++;
      }
      divs[tailIndex].css({background: 'black'});
      divs[bodyIndex].css({background: 'black'});
      divs[headIndex].css({background: 'black'});
    }, 80)
  }
};