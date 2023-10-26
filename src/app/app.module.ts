import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './app1/acceuil/acceuil.component';
import { ContactComponent } from './app1/contact/contact.component';
import { ErreurComponent } from './app1/erreur/erreur.component';
import { MenuComponent } from './app1/menu/menu.component';
import { VetementsComponent } from './app1/clothes/vetements/vetements.component';
import { ChaussuresComponent } from './app1/shoes/chaussures/chaussures.component';
import { EteComponent } from './app1/clothes/ete/ete.component';
import { HiverComponent } from './app1/clothes/hiver/hiver.component';
import { BebeComponent } from './app1/shoes/bebe/bebe.component';
import { HommeComponent } from './app1/shoes/homme/homme.component';
import { FemmeComponent } from './app1/shoes/femme/femme.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ContactComponent,
    ErreurComponent,
    MenuComponent,
    VetementsComponent,
    ChaussuresComponent,
    EteComponent,
    HiverComponent,
    BebeComponent,
    HommeComponent,
    FemmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
