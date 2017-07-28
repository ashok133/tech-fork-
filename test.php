<?php
$con = mysqli_connect("localhost","id2335965_ashok05","Drakeash133@");

$call_sid = $_GET['CallSid'];
$from_ = $_GET['From'];
$to_ = $_GET['To'];
$flow_id = $_GET['flow_id'];
$start_time = $_GET['StartTime'];
$tenant_id = $_GET['tenant_id'];

if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
 
mysqli_select_db($con, "id2335965_registrations");
 
$sql="INSERT INTO Users (call_sid, from_, to_, flow_id, start_time, tenant_id)
VALUES ('$call_sid', '$from_', '$to_', '$flow_id', '$start_time', $tenant_id)";

$file_handle = fopen('get_data_exotel.txt', 'w');
fwrite($file_handle, $sql);
fclose($file_handle);
 
if (!mysqli_query($con,$sql))
  {
  die('Error: '. mysqli_error($con));
  }
mysqli_close($con)
?>