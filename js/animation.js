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
        bodyIndex++;
        tailIndex++;
      } else if (bodyIndex === divs.length-1) {
        bodyIndex = 0;
        headIndex++;
        tailIndex++;
      } else if (tailIndex === divs.length-1) {
        tailIndex = 0;
        bodyIndex++;
        headIndex++;
      } else {
        tailIndex++;
        bodyIndex++;
        headIndex++;
      }
      divs[tailIndex].css({background: 'black'});
      divs[bodyIndex].css({background: 'black'});
      divs[headIndex].css({background: 'black'});
    }, 60)
  }
};