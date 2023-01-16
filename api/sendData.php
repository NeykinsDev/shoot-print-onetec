<?php
    header("Access-Control-Allow-Origin: *");

    //print foto
    // $emailText = addslashes($_POST['email']);
    // $photo= basename($_POST['photo']);
    // $lang = $_POST['lang'];

    // $path = realpath('./photos/'.$photo);
    // $str = str_replace('\\', '/', $path);

    // $output = null;
    // $retval = null;

    // $exe = realpath('./printImage/printImage.exe');
    // $full = $exe.' --path="'.$str.'"';

    //exec($full, $output, $retval);

    $info = pathinfo('./photos/'.$photo);
    $photoSansExt = $info['filename'];


    $nomSansExt = substr($photo, 0, -4);

    $imagedata = file_get_contents('./photos/'.$_POST['photo']);
    $base64 = base64_encode($imagedata);

    echo json_encode(200);
 
?>