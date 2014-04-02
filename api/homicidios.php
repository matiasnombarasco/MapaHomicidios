<?php

 $username = 'fpalossi';
 $password = 'KLRdecline';
 $database = 'mapab24h';
 $server = 'mysql.boasso24horas.com';


// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

// Opens a connection to a MySQL server

$connection=mysql_connect ($server, $username, $password);
if (!$connection) {  die('Not connected : ' . mysql_error());}

// Set the active MySQL database

$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the markers table

$query = "SELECT h.*,
			i.nombre as inombre,
			i.apellido as iapellido,
			i.edad as iedad,
			c.nombre as cname
			 from homicidios as h
          	inner join `imputado` as i on h.imputado = i.id
          	inner join `comisaria` as c on h.comisaria = c.id
          	inner join `nacionalidad` as n on i.nacionalidad = n.id  order by h.id desc limit 1000";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header('Content-type: application/json');

// Iterate through the rows, adding XML nodes for each
$i = 0;
$data = array();
while ($row = @mysql_fetch_assoc($result)){

  $data[$i] = array(
      'id' => $row['id'],
      'gps' => array(
          'latitud' => $row["lat"],
          'longitud' => $row["lng"]
      ),
      'victima' => array(
        'nombre' => $row['nombre'],
        'apellido' => $row['apellido'],
        'edad' => $row['edad']
        ),
      'inputado' => array(
        'nombre' => $row['inombre'],
        'apellido' => $row['iapellido'],
        'edad' => $row['iedad']
        ),

      'comisaria' => $row['cname'],
      'resumen' => $row['resumen'],
      'link' => $row['link'],
      'fuente' => $row['fuente'],

  );

  $i++;
  // ADD TO XML DOCUMENT NODE
}

echo json_encode($data);
?>