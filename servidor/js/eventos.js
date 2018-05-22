var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val(); /*estamos obteniendo los resultados 
		que se estan poniendo al momento de logiar */
		var usuario=$("#txtClave").val();
		var parametros="opc=validaentrada"+
		                "&usuario="+usuario+
		                "&clave="+clave+
		                "&aleatorio="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json";
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
              if(response.respuesta== true){
              	alert("bienvenido");
              }else{
              	alert("usuario o clave incorrectas(S)");
              }
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
	}
	$("#btnAceptar").on("click",Aceptar); /*debe llevar # por que es un id */
}

$(document).ready(inicioApp);