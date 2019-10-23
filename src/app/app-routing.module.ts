import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TermComponent } from './term/term.component'
import { PlanComponent } from './plan/plan.component'
import { WhatifComponent } from './whatif/whatif.component'


// UNCOMMENT AND USE THIS WHEN IN PRODUCTION FOR AUTHENTICATION
// - Does not have the AuthGuard
/*
import { AuthGuard } from './auth.guard'
const routes: Routes = [
  { path: 'term', component: TermComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'plan/:planID', component: PlanComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }
];
*/

// USE THIS WHEN IN DEV
const routes: Routes = [
  { path: 'term', component: TermComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plan/:planID', component: PlanComponent },
  { path: 'what-if', component: WhatifComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
