<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$random = generateRandomString(15);


$output=null;
$retval=null;
exec("\"C:\Program Files (x86)\digiCamControl\CameraControlCmd.exe\" /capture /filename C:\\xampp\\htdocs\\shoot-print-onetec\\api\\photos\\".$random.".jpg", $output, $retval);

    //if(filemtime('IMG_0001.JPG') > strtotime("-2 seconds")) {
        $filename=$random.".jpg";
    
echo(json_encode($filename));
