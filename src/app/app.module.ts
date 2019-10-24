import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermComponent } from './term/term.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { ConcentrationDropdownComponent } from './concentration-dropdown/concentration-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatifComponent } from './whatif/whatif.component';
import { environment } from '../environments/environment';
import { UserInfoComponent } from './user-info/user-info.component';
import { EmptyTermComponent } from './empty-term/empty-term.component';

@NgModule({
  declarations: [
    AppComponent,
    TermComponent,
    UserComponent,
    HomeComponent,
    PlanComponent,
    ConcentrationDropdownComponent,
    HeaderComponent,
    FooterComponent,
    WhatifComponent,
    UserInfoComponent,
    EmptyTermComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EmptyTermComponent]
})
export class AppModule { }
