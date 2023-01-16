import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }

  goCountdown(){
    this.router.navigate(['countdown']);
  }

}
