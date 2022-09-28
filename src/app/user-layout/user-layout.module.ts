import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { UserLayoutRoutes } from './user-layout.routing';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
  ]
})
export class UserLayoutModule { }
