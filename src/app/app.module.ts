import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent,
    Error404Component,
    CardDetailComponent,
    ContactComponent,
    ContactReactiveComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
