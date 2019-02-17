$(document).ready(function () {

    $(".main-titulo").animate(
        {color:"#DCFF0E"},500,cambiocolor()
    );

    function cambiocolor(){
        $(".main-titulo").animate(
            {color:"#F45641"},500,cambiocolor2
        );
    }

    function cambiocolor2(){
        $(".main-titulo").animate(
            {color:"#DCFF0E"},500,cambiocolor
        );
    }

  $(".btn-reinicio").click(function(){
      $(this).text("Reinicio");
      relleno();
  });

  function relleno(){
      var aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;

        for(var i=0; i<=7; i++){
            for(var x=0; x<6; x++){
                $(".col-" + i).append("  <img src= image/" + aleatorio +".png id="+aleatorio+">");
            aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;
            }
             
        }
    
    }


});