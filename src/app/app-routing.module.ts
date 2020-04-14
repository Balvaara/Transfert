import { PartenerComponent } from './partenaires/partener/partener.component';
import { ListeCompteComponent } from './comptes/liste-compte/liste-compte.component';
import { CrerCompteComponent } from './comptes/crer-compte/crer-compte.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './pages/authentification/authentification.component';


import { ForrConnexionComponent } from './components/forr-connexion/forr-connexion.component';
import { AjoutUserComponent } from './users/ajout_users/ajout-user.component';
import { ListUserComponent } from './users/listUser/list-user/list-user.component';
import { DefaultComponent } from './default/default.component';
import { FaireDepotComponent } from './comptes/faire-depot/faire-depot.component';
import { ListedepotComponent } from './comptes/listedepot/listedepot.component';
import { AffectationComponent } from './affect/affectation/affectation.component';
import { ListeAffectComponent } from './affect/liste-affect/liste-affect.component';
import { MyStaticComponent } from './static/my-static/my-static.component';
import { OperationComponent } from './transaction/operation/operation.component';
import { ListeoperationComponent } from './transaction/listeoperation/listeoperation.component';


const routes: Routes = [
  { path: '', component:ForrConnexionComponent},
  { path: 'affectation', component:AffectationComponent},
  { path: 'liste-affectation', component:ListeAffectComponent},
  { path: 'transaction', component:OperationComponent},
  { path: 'lister-operation', component:ListeoperationComponent},




  { path: 'default', component:DefaultComponent,
  children:
  [
        { path: 'liste-users', component:ListUserComponent},
        { path: 'liste-comptes', component:ListeCompteComponent},
        { path: 'comptes', component:CrerCompteComponent},
        { path: 'users', component:AjoutUserComponent},
        { path: 'partener', component:PartenerComponent},
        { path: 'faire-depot', component:FaireDepotComponent},
        { path: 'liste-depot', component:ListedepotComponent},
        { path: 'static', component:MyStaticComponent},


       

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
