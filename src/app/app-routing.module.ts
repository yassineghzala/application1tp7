import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './app1/clothes/vetements/vetements.component';
import { ChaussuresComponent } from './app1/shoes/chaussures/chaussures.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './app1/acceuil/acceuil.component';
import { ContactComponent } from './app1/contact/contact.component';
import { ErreurComponent } from './app1/erreur/erreur.component';
import { EteComponent } from './app1/clothes/ete/ete.component';
import { HiverComponent } from './app1/clothes/hiver/hiver.component';
import { BebeComponent } from './app1/shoes/bebe/bebe.component';
import { FemmeComponent } from './app1/shoes/femme/femme.component';
import { HommeComponent } from './app1/shoes/homme/homme.component';

const routes: Routes = [
  {path:"home",component:AcceuilComponent},
  {path:"clothes",component:VetementsComponent,
  children:[
      {path:"ete",title:"Habits ete",component:EteComponent},
      {path:"hiver",title:"Habits hiver",component:HiverComponent},
      {path:"",redirectTo:"ete",pathMatch:"full"}
    ]
  },
  
  {path:"shoes",component:ChaussuresComponent,
  children:[
      {path:"baby",title:"Chaussures pour bebe",component:BebeComponent},
      {path:"women",title:"Chaussures pour Femmes",component:FemmeComponent},
      {path:"men",title:"Chaussures pour Hommes",component:HommeComponent},
      {path:"",redirectTo:"baby",pathMatch:"full"}
    ]
  },
  {path:"contact",component:ContactComponent},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"**",component:ErreurComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
