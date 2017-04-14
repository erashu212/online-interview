import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'angular2-markdown';

@Component({
  selector: 'admin-login',
  template: ` <div id="firebaseui-auth-container"></div>`
})
export class AdminLoginComponent{

}

@NgModule({
  declarations: [ AdminLoginComponent ],
  imports : [
    CommonModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    AdminLoginComponent
  ]
})

export class AdminLoginModule{

}