import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AwardsComponent } from '../awards/awards.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { HomeComponent } from '../home/home.component';
import { PublicationsComponent } from '../publications/publications.component';
import { ResearchComponent } from '../research/research.component';
import { SoftwaresComponent } from '../softwares/softwares.component';

export const UserLayoutRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'education', component: EducationComponent },
    { path: 'awards', component: AwardsComponent},
    { path: 'publications', component: PublicationsComponent},
    { path: 'research', component: ResearchComponent},
    { path: 'softwares', component: SoftwaresComponent}
];