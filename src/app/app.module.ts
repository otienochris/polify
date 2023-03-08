import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// angular material
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './components/login/login.component';
import { SupportComponent } from './components/support/support.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'support', component: SupportComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    MainNavBarComponent,
    PageNotFoundComponent,
    MenuButtonComponent,
    LoginComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
