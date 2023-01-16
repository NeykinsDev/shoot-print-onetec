import { ElementRef, Injectable, Input, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
   
    picture:any="";
    number:any;
   dico:any=[];
   lang:any="fr";
    constructor(private router: Router, private httpClient: HttpClient){
        
    }

    ngAfterViewInit():void{
         
    }
}