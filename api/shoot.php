<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');
    require './intervention/vendor/autoload.php';
    use Intervention\Image\ImageManager;

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

function addOverlay($file){
    $manager = new ImageManager(array('driver' => 'gd'));
    $img = $manager->make($file);
    $bg = $manager->make('./assets/branding.png');
    $bg2 = $manager->make('./assets/branding2.png');
    $img->orientate();

    //portait
    if($img->height() > $img->width()){
        $width = $bg2->width();        
        $height = $bg2->height();
        $img->resize($width,$height);
        $img->insert($bg2,'center');
    } 
    //paysage
    else{
        $width = $bg->width();
        $height = $bg->height();
        $img->resize($width,$height);
        $img->insert($bg,'center');
    }
    //rajouter du txt sur nos photos
    $img->text('ONETEC', 600, 400, function($font) {
        $font->file('./assets/font.ttf');
        $font->size(15);
        $font->align('bottom');
        $font->valign('bottom');
        $font->angle(0);
    });

    $img->save('./photos/'.basename($file));

}

$output=null;
$retval=null;
exec("\"C:\Program Files (x86)\digiCamControl\CameraControlCmd.exe\" /capture /filename C:\\xampp\\htdocs\\shoot-print-onetec\\api\\photos\\".$random.".jpg", $output, $retval);

    //if(filemtime('IMG_0001.JPG') > strtotime("-2 seconds")) {

    
        $filename=$random.".jpg";
        addOverlay('./original/' .$filename);

    
echo(json_encode($filename));
