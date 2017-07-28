<?php
$code = 200;
$sid = $_GET['CallSid'];
$data = print_r($_HTTP, true);
$get = print_r($_GET, true);
$post = print_r($_POST, true);
//header("HTTP/1.1 200 OK");
//$json_str = file_get_contents('php://input');

$json_string = json_encode($json_str);
//$json_string = json_encode($_GET);

$file_handle = fopen('get_data_exotel.txt', 'w');
fwrite($file_handle, $get);
fclose($file_handle);

//file_put_contents("outputfile.txt", file_get_contents("php://input"));

http_response_code($code);
echo 'DOne';
echo $sid;


?>