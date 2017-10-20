import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AutobiographyComponent } from './autobiography/autobiography.component';
import { WorkComponent } from './work/work.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EducationComponent,
    SkillsComponent,
    AutobiographyComponent,
    WorkComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
