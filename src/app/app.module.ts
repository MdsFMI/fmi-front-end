import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';   // use this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WavesModule, TableModule, IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CampaignsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    WavesModule,
    TableModule,
    IconsModule,
    MDBBootstrapModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
