import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home'},
    { path: '/about', title: 'About'},
    { path: '/education', title: 'Education & Certifications'},
    { path: '/publications', title: 'Publications'},
    { path: '/research', title: 'Research'},
    { path: '/awards', title: 'Awards'},
    { path: '/softwares', title: 'Softwares'},
    { path: '/contact', title: 'Contact'},
];

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  menuItems: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
