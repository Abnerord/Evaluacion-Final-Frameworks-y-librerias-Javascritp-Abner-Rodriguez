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

 

    $(".col-1",).sortable();
    $(".col-2").sortable();
    $(".col-3").sortable();
    $(".col-4").sortable();
    $(".col-5").sortable();
    $(".col-6").sortable();
    $(".col-7").sortable();


    

  $(".btn-reinicio").click(function(){

   var texto = $(this).text();
    
    if(texto=="Iniciar"){
        $(this).text("Reinicio");
        $(function(){
            $('#timer').startTimer({
              onComplete: function(){
              ocultar();
              }
            });
        })
        relleno();
    }else if ( texto == "Reinicio"){
        location.reload();
    }
    
   
  });

 
  function ocultar (){
    $(".panel-tablero").hide(500);
    setTimeout(function(){ $(".panel-tablero").remove();}, 600);
    $(".panel-score").animate({ width: "+=1500"},500);
  }



  function relleno(){
      var aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;

        for(var i=0; i<=7; i++){
            for(var x=0; x<6; x++){
                $(".col-" + i).append("  <img src= image/" + aleatorio +".png id="+aleatorio+">");
            aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;
            }
             
        }

        verificacion();
       
    }

    function parpadeo(etiqueta){
        var contar = 0;
        while (contar<4) {
            $(etiqueta).animate(
                { opacity:"0"},200
            );
            $(etiqueta).animate(
                { opacity:"100"},200
            );
            contar++;
            
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
        var valortexto="";
        var valornumero=0;
        var col = [col1,col2,col3,col4,col5,col6,col7];
      
  
            for(var i= 0; i <=3; i++){
                for(var x=0; x<=6; x++){
                    if (col[x][i].id == col[x][i+1].id && col[x][i+1].id == col[x][i+2].id ){
                      
                        $(col[x][i]).hide(200, parpadeo(col[x][i]));
                        $(col[x][i+1]).hide(200, parpadeo(col[x][i+1]));
                        $(col[x][i+2]).hide(200, parpadeo(col[x][i+2]));
                        valortexto = $("#score-text").text();
                        valornumero = parseInt(valortexto) + 40;
                        $("#score-text").text(valornumero);
                       
                        } 
                      
                }
                
            }
            
        
            for(var z= 0; z <=5; z++){
                for(var y=0; y<=4; y++){
                    if (col[y][z].id == col[y+1][z].id && col[y+1][z].id == col[y+2][z].id ){
                        $(col[y][z]).hide(200, parpadeo(col[y][z]));
                        $(col[y+1][z]).hide(200, parpadeo(col[y+1][z]));
                        $(col[y+2][z]).hide(200, parpadeo(col[y+2][z]));
                        valortexto = $("#score-text").text();
                        valornumero = parseInt(valortexto) + 40;
                        $("#score-text").text(valornumero);
                        }
                }
                
            }
            
         

        setTimeout(function(){ 
              
            var pin = 0; 

            for(var z=0;z<=7;z++){
                var borrados = $(".col-"+z).find("img:hidden");
                pin = pin + borrados.length;
            }


            if (pin>0){
                for(var z=0;z<=7;z++){
                    var borrar = $(".col-"+z).find("img:hidden");
                    var contar = borrar.length;
                 
                    for(var x=0;x<contar;x++)
                    {
                        aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;
                        $(".col-"+z).prepend("  <img src= image/" + aleatorio +".png id="+aleatorio+">");
                        
                    }
                    $(borrar).remove();

                } 

                verificacion();
            }
            }, 2000);
        
          
            
         
}

$(".panel-tablero").hover(function () { 
    verificacion();
});

$(".panel-tablero").mouseup(function () { 
    valortexto = $("#movimientos-text").text();
    valornumero = parseInt(valortexto) + 1;
    $("#movimientos-text").text(valornumero);
});


  
});