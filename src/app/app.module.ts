import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AdminLoginModule,AdminLoginComponent } from './admin/admin.component'
import { InterviewPanelComponent,InterviewPanelModule } from './shared/interview-panel';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminLoginComponent }, 
  { path:'interview', component: InterviewPanelComponent },
  { path: '',
    redirectTo: '/interview',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    InterviewPanelModule,
    AdminLoginModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
