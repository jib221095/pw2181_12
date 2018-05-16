<?php
 $p1 = $_GET["parametro1"];
 for ($i=0; $i < 10; $i++) { 
	print("hola PHP".$i."<br>");
}
?>
<html>
<head>
	<title>Document</title>
</head>
<body>
<? print($p1); ?>	
</body>
</html>