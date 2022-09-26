import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AwardsComponent } from '../awards/awards.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { HomeComponent } from '../home/home.component';

export const UserLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'education', component: EducationComponent },
    { path: 'awards', component: AwardsComponent}
];