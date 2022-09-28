import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { UserLayoutModule } from './user-layout/user-layout.module';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { SoftwaresComponent } from './softwares/softwares.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    AboutComponent,
    HomeComponent,
    EducationComponent,
    ContactComponent,
    AwardsComponent,
    PublicationsComponent,
    ResearchComponent,
    SoftwaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
