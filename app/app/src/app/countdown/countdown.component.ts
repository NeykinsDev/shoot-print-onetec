import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @ViewChild('video') videoElement!: ElementRef;

  countdown:number=5;

  stream:any;
  videoWidth = 0;
  videoHeight = 0;
  interval:any;
  constraints = { audio: false, video: true };
  loader=true;
  flag=0;

  title:string="";
  waiting:string="";
  retry:string="";
  shootStr:string="";

  constructor(private renderer :Renderer2, private httpClient: HttpClient,private router:Router, public dataService:DataService) {
    this.flag=0;
    this.httpClient
    .get<any>('assets/dico.json')
    .subscribe(
    );
  }


  ngOnInit(): void {
    this.startCamera();
  }

  startCountdown(){

      this.interval = setInterval(()=>{
        if(this.countdown == 3){
          this.stopStreamedVideo();
        }
        if(this.countdown == 2){
          this.shoot();
        }
      
        if(this.countdown > 0){
          this.countdown --;
        }
      }, 1000);
    
  }
  
  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
         this.stream = navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
         
    } else {
        console.log("error")
    }
  } 

  attachVideo(stream:any) {
    console.log(this.stream);

    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      if(this.flag == 1){
        this.stopStreamedVideo();
      }
    });
    this.loader = false;
    this.startCountdown();
  }

  handleError(error:any) {
    console.log('Error: ', error);
  }

  stopStreamedVideo(){
    const stream = this.videoElement.nativeElement.srcObject;
    if(stream != null){
      const tracks = stream.getTracks();
  
      tracks.forEach((track:any) =>{
        track.stop();
        this.flag=0;
        
      });
    }
    else{
      this.flag =1;
    }
    
    this.videoElement.nativeElement.srcObject = null;
  }

  shoot(){
    this.httpClient
    .get(environment.apiUrl + 'shoot.php')
    .subscribe(
        (data)=>{
            this.dataService.picture = data;
            this.router.navigate(['validation']);
        },
        
    );
  }

  ngOnDestroy(): void{
    this.stopStreamedVideo();
    clearInterval(this.interval);
  }
}