import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { AutobiographyComponent } from './autobiography/autobiography.component';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path:'layout',component:LayoutComponent},
  { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
