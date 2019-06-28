<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Шахматы</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Шахматы</h1>
<table>
<?php
for($i=0; $i<8; $i++){
echo "<tr>";
for($j=0; $j<8; $j++){
if(($i+$j)%2!=0){
echo "<td class='black'>".$i.$j."</td>";
}else{
echo "<td class='white'>".$i.$j."</td>";
};
};
echo "</tr>";
};
?>
</table>
</body>
</html>