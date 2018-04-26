var marvel = function(){
	var Buscar = function(){
		var personaje = $("#personaje").val();
		var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";
        var cantidadComics = 0;
        var catidadSeries = 0; 
        var comics = ""
        var series = ""
        url = url+personaje;
        $.ajax({dataType:"json",
                 url: url, 
                 success: function(response){
                 	if(response.code == 200){
                 		$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
                        $("#nombre").html(response.data.results[0].name);
                        $("#series").html(response.data.results[0].series.items[0].name);
                        cantidadComics=response.data.results[0].comics.returned;
                        for(var i=0; i<cantidadComics; i++){
                            comics+=response.data.results[0].comics.items[i].name+"<br>";
                            series+=response.data.results[0].series.items[i].name+"<br>";
                        }
                        $("#comics").html("Comics: <br>"+comics);
                        $("#series").html("series: <br>"+series);
                 		
                 		} 

                        


	}
});
    }

 var teclaPersonaje = function(tecla) {
    if(tecla.which == 13){
        Buscar();
    }
 }
 $("#btnBuscar").on("click",Buscar);
 $("#personaje").on("keypress",teclaPersonaje);

}
$(document).ready(marvel);