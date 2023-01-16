import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishComponent } from './finish/finish.component';
import { ValidationComponent } from './validation/validation.component';
import { StartComponent } from './start/start.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DataService } from './services/data.services';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component:  StartComponent},
  { path: 'countdown', component:  CountdownComponent},
  { path: 'validation', component:  ValidationComponent},
  { path: 'finish', component:  FinishComponent},
  { path : '**', redirectTo: '/start', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CountdownComponent,
    ValidationComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
