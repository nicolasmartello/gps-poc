$( document ).ready(function () {
    $('.circle').on('click', function () {
      $(this).addClass('active-circle')
       .prevAll('span').addClass('active-line-pipe')
       .prevAll('.block-line-pipe .circle').addClass('active-circle');
      
      $(this).nextAll('span').removeClass('active-line-pipe')
       .nextAll('.block-line-pipe .circle').removeClass('active-circle');

    });
  });