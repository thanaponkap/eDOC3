import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// import {Component} from '@angular/core';
import { LitsbookPage } from './litsbook.page';
import {MatIconModule} from '@angular/material/icon';

import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  
} from '@angular/material';



const routes: Routes = [
  {
    path: '',
    component: LitsbookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule     
  ],
  declarations: [LitsbookPage]
})
export class LitsbookPageModule { }

