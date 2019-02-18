$(document).ready(function () {

    //Esta seccion para cambiar los colores del titulo, realiza funciones recursivas
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
    //Final de la seccion de los colores del titulo
    //Se establece que los items de las columnas sean arrastables entre si 

    $(".col-1",).sortable();
    $(".col-2").sortable();
    $(".col-3").sortable();
    $(".col-4").sortable();
    $(".col-5").sortable();
    $(".col-6").sortable();
    $(".col-7").sortable();

    //fin de la seccion de las columnas
    //Se crea las funciones del boton Iniciar

  $(".btn-reinicio").click(function(){

   var texto = $(this).text();
    
    if(texto=="Iniciar"){
        $(this).text("Reinicio");
        $(function(){
            $('#timer').startTimer({        //Plugin para el tiempo 
              onComplete: function(){
              ocultar();
              }
            });
        })
        relleno();
    }else if ( texto == "Reinicio"){    //carga la pagina de nuevo si ya se pulso una vez el boton de iniciar
        location.reload();
    }
    
   
  });


  function ocultar (){                              //Oculta y borra el panel tablero al pasar los dos minutos 
    $(".panel-tablero").hide(800);
    setTimeout(function(){ $(".panel-tablero").remove();}, 850);
    $(".panel-score").animate({ width: "+=1500"},800);
  }



  function relleno(){                                                   //Funcion de relleno automatico al comenzar la partida
      var aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;

        for(var i=0; i<=7; i++){
            for(var x=0; x<6; x++){
                $(".col-" + i).append("  <img src= image/" + aleatorio +".png id="+aleatorio+">");
            aleatorio = Math.floor(Math.random()*(5 - 1)) + 1;
            }
             
        }

        verificacion();
       
    }

    function parpadeo(etiqueta){                    //Funcion para generar la animacion antes de desaparecer los dulce 
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
                                                        //Funcion que verifica la cantidad de dulces en linea, y establece si son 3 o mas, para posteriormente eliminarlos y reemplazarlos
    
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

$(".panel-tablero").hover(function () {    //Genera la revision de los dulces en linea despues de un movimiento del usuario 
    verificacion();
});

$(".panel-tablero").mouseup(function () {           //Funcion que cuenta los movimientos del usuario
    valortexto = $("#movimientos-text").text();
    valornumero = parseInt(valortexto) + 1;
    $("#movimientos-text").text(valornumero);
});


  
});