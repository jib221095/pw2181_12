<?php 
function conecta(){
	//servidor , usuario,contrase;a,bade de datos
	 $con=mysqli_connect("127.0.0.1","root","",pw218112)
	 return $con;
}