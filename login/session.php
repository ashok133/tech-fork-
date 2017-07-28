<?php
   include('config.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = mysqli_query($db,"select call_sid,from_ from Users where from_ = '$user_check' ");
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   $call_sid = implode(" ",$row);
   echo $call_sid ;
   $login_user = $row['from_'];
   
   if(!isset($_SESSION['login_user'])){
      header("location:login.php");
   }
?>