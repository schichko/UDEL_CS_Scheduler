import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TermComponent } from './term/term.component'
import { PlanComponent } from './plan/plan.component'
import { UserInfoComponent } from './user-info/user-info.component';


const routes: Routes = [
  { path: 'term', component: TermComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'user-info',component: UserInfoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
