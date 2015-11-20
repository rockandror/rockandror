$(function () {
  $('#movesection').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 3;
    var y = -(e.pageY + this.offsetTop) / 3 ;
    $('.intro-image').css('background-position', x + 'px ' + y + 'px');
    $('.faces').css('right', x / 5 + 'px ');
    $('.faces').css('top', y / 5 + 'px ');
    $('.title').css('top', y / 2 + 'px ');
  });  
});