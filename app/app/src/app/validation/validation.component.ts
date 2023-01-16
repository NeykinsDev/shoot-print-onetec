import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  maPhoto:any;
  constructor(private httpClient:HttpClient, private router:Router, public dataService:DataService) { 
    this.httpClient
    .get<any>('assets/dico.json')
    .subscribe(
      (data)=>{this.dataService.dico = data
        console.log(data);
        
      }
    
    );
  }

  ngOnInit(): void {
    
    this.maPhoto = environment.apiUrl+"photos/"+this.dataService.picture;
  }

  goFinish(){
  
    this.router.navigate(['finish']);
  }

  reTry(){
    this.router.navigate(['start']);
  }

}
