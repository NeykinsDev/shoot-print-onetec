import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router, public dataService:DataService) { }

  ngOnInit(): void {
    setTimeout(() => this.executeAfter5s(), 5000);
  }

  executeAfter5s(){ 
    this.router.navigate(['start']);
  }
   

}
