import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TermComponent } from './term/term.component'
import { PlanComponent } from './plan/plan.component'
import { environment } from 'src/environments/environment'
import { AuthGuard } from './auth.guard'

let routes: Routes = [];

if (environment.production) {
  routes = [
    { path: 'term', component: TermComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'plan/:planID', component: PlanComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }
  ];
} else {
  routes = [
    { path: 'term', component: TermComponent },
    { path: 'home', component: HomeComponent },
    { path: 'plan/:planID', component: PlanComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
