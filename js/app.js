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


    function verificacion(){
        var col1 = $(".col-1").find("img");
        var col2 = $(".col-2").find("img");
        var col3 = $(".col-3").find("img");
        var col4 = $(".col-4").find("img");
        var col5 = $(".col-5").find("img");
        var col6 = $(".col-6").find("img");
        var col7 = $(".col-7").find("img");

        
    }


});