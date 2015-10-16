var timeLineEffect = function($element) {
    $element.addClass('active-circle')
      .prevAll('span').addClass('active-line-pipe')
      .prevAll('.block-line-pipe .circle').addClass('active-circle');

    $element.nextAll('span').removeClass('active-line-pipe')
      .nextAll('.block-line-pipe .circle').removeClass('active-circle');
  },
  Movie = function($element) {
    var left = $element.offset().left,
      frameClass = "",
      articleFrame = "",
      $slideBlock = $('.slide-block'),
      goToFrame1 = function() {
        $slideBlock.animate({
          'margin-left': left - 160
        });
        frameClass = 'square-frame1';
        setArticleValues({
          'title':'01.<br>Abastecimiento',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      goToFrame2 = function() {
        $slideBlock.animate({
          'margin-left': left - 150
        });
        frameClass = 'square-frame2';
        setArticleValues({
          'title':'02.<br>Almacenaje',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      goToFrame3 = function() {
        $slideBlock.animate({
          'margin-left': left - 80
        });
        frameClass = 'square-frame3';
        setArticleValues({
          'title':'03.<br>Crossdocking',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      goToFrame4 = function() {
        $slideBlock.animate({
          'margin-left': left - 20
        });
        frameClass = 'square-frame4';
        setArticleValues({
          'title':'04.<br>Transporte Nacional',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      goToFrame5 = function() {
        $slideBlock.animate({
          'margin-left': left - 150
        });
        frameClass = 'square-frame5';
        setArticleValues({
          'title':'05.<br>Transporte Drop & Hook',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      goToFrame6 = function() {
        $slideBlock.animate({
          'margin-left': left - 150
        });
        frameClass = 'square-frame6';
        setArticleValues({
          'title':'06.<br>Distribución',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      goToFrame7 = function() {
        $slideBlock.animate({
          'margin-left': left - 250
        });
        frameClass = 'square-frame7';
        setArticleValues({
          'title':'07.<br>Logisitica Segura',
          'body':'"En la mayor parte de las compañias, los aprovisionamientos consumen entre un 20% y 50% de los ingresos totales en mercadería y servicios"'
        });
      },
      setArticleValues = function (arg) {
        $('.slide-block').find('h1').html(arg.title);
        $('.slide-block').find('p').html(arg.body)
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

});
