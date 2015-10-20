var timeLineEffect = function($element) {

    $('.active-circle').removeClass('active-circle');

    $element.addClass('active-circle')
      .prevAll('span').addClass('active-line-pipe')
      .prevAll('.block-line-pipe .circle').addClass('active-circle-prev');

    $element.nextAll('span').removeClass('active-line-pipe');
    $element.nextAll('.block-line-pipe .circle').removeClass('active-circle-prev');

  },
  Movie = function($element) {
    var leftElement = $element.offset().left,
      topElement = $element.offset().top,
      frameClass = "",
      articleFrame = "",
      $slideBlock = $('.slide-block'),
      goToFrame1 = function() {
        moveBackImage(1);
        $slideBlock.animate({
          'margin-left': leftElement - 160
        });
        frameClass = 'square-frame1';
        setArticleValues({
          'title': '01.<br>Abastecimiento',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('100');
      },
      goToFrame2 = function() {
        $slideBlock.animate({
          'margin-left': leftElement - 150
        });
        frameClass = 'square-frame2';
        setArticleValues({
          'title': '02.<br>Almacenaje',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('150');
        moveBackImage(2);
      },
      goToFrame3 = function() {
        $slideBlock.animate({
          'margin-left': leftElement - 80
        });
        frameClass = 'square-frame3';
        setArticleValues({
          'title': '03.<br>Crossdocking',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('220');
        moveBackImage(3);
      },
      goToFrame4 = function() {
        $slideBlock.animate({
          'margin-left': leftElement - 20
        });
        frameClass = 'square-frame4';
        setArticleValues({
          'title': '04.<br>Transporte Nacional',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('300');
        moveBackImage(4);
      },
      goToFrame5 = function() {
        $slideBlock.animate({
          'margin-left': leftElement - 150
        });
        frameClass = 'square-frame5';
        setArticleValues({
          'title': '05.<br>Transporte Drop & Hook',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('80');
        moveBackImage(5);
      },
      goToFrame6 = function() {
        $slideBlock.animate({
          'margin-left': leftElement - 150
        });
        frameClass = 'square-frame6';
        setArticleValues({
          'title': '06.<br>Distribución',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('100');
        moveBackImage(6);
      },
      goToFrame7 = function() {
        $slideBlock.animate({
          'margin-left': leftElement - 250
        });
        frameClass = 'square-frame7';
        setArticleValues({
          'title': '07.<br>Logisitica Segura',
          'body': '"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
        setLineMark('120');
        moveBackImage(7);
      },
      setArticleValues = function(arg) {
        $('.slide-block').find('h1').html(arg.title);
        $('.slide-block').find('p').html(arg.body)
      },
      setLineMark = function(heightLine) {
        $('#line-mark').fadeIn(function() {
          $(this).animate({
            'height': heightLine + 'px',
            'top': '-' + heightLine + '%',
            'left': leftElement + 3
          });
        });
      },
      moveBackImage = function (index) {
        var $element1 = $('#frame-image'+index),
            $element2 = $('#frame-image'+ parseInt(index+1)),
            top = $('#carousel-image').offset().top;

        $('#carousel-image .block').css('left', - window.screen.width);
        /* $element1.fadeIn('fast');
         $element2.fadeIn('fast');*/

         $element2.animate({'left': '50%', 'top': top });
         $element1.animate({'left' : "-50%" });


      };

    switch (parseInt($element.attr('data-frame'))) {
      case 1:
        goToFrame1();
        break;
      case 2:
        goToFrame2();
        break;
      case 3:
        goToFrame3();
        break;
      case 4:
        goToFrame4();
        break;
      case 5:
        goToFrame5();
        break;
      case 6:
        goToFrame6();
        break;
      case 7:
        goToFrame7();
        break;
    };
    $('#square-efect').removeClass();
    $('#square-efect').addClass(frameClass);
  };


$(document).ready(function() {
  $('.circle').on('click', function() {

    timeLineEffect($(this));

    Movie($(this));

  });

 $( window ).resize( function () {

    Movie($('.active-circle'));
    timeLineEffect($('.active-circle'));
 });

});
