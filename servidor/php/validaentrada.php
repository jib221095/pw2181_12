<?php
include 'conexiones.php' /*es para ver las funciones de conexiones.php*/
function valida(){
	//conectarnos al servidor bd 
	$respuesta= false;
    $usuario=$_POST["usuario"];
    $clave  =md5($_POST["clave"]);
    $con=conecta();
    $consulta="select * from usuario where usuario= '".$usuario."' and clave='".$clave."' limit 1";
    $resConsulta=mysli_query($con,$consulta);
    if(mysqli_num_row($resConsulta) > 0){
       $respuesta = true;
    }
    $salidaJSON = array('respuesta'=> $respuesta);
    print json_encode($salidaJSON);
}
     $opc=$_POST["opc"]
     switch ($opc) {
     	case 'validaentrada':
     		valida();
     		break;
     	
     	default:
     		# code...
     		break;
     }
?>