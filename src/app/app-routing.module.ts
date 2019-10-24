import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TermComponent } from './term/term.component'
import { PlanComponent } from './plan/plan.component'
import { UserInfoComponent } from './user-info/user-info.component';
import { WhatifComponent } from './whatif/whatif.component'
import { environment } from 'src/environments/environment'
import { AuthGuard } from './auth.guard'

const productionRoutes: Routes = [
  { path: 'term', component: TermComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user-info',component: UserInfoComponent, canActivate: [AuthGuard] },
  { path: 'plan/:planID', component: PlanComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }
];

const developmentRoutes: Routes = [
  { path: 'term', component: TermComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-info',component: UserInfoComponent},
  { path: 'plan/:planID', component: PlanComponent },
  { path: 'what-if', component: WhatifComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

let currentRoutes = (environment.production) ? productionRoutes : developmentRoutes;

@NgModule({
  imports: [RouterModule.forRoot(currentRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
