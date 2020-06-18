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
import { DefaultpartComponent } from './defaultpart/defaultpart.component';
import { AuthentificationGuard } from './authentification.guard';
import { OuSommeNousComponent } from './ou-somme-nous/ou-somme-nous.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { EditeComponent } from './users/edite/edite.component';


const routes: Routes = [
  { path: '', component:ForrConnexionComponent},
  { path: 'Map', component:OuSommeNousComponent},

  
  { path: 'default', component:DefaultComponent,canActivate:[AuthentificationGuard],
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
        { path: 'edite', component:EditeComponent},


  ]
},
{ path: 'defaultpart', component:DefaultpartComponent,canActivate:[AuthentificationGuard],
  children:
  [
    { path: 'users', component:AjoutUserComponent},
    { path: 'liste-users', component:ListUserComponent},
    { path: 'affectation', component:AffectationComponent},
    { path: 'liste-affectation', component:ListeAffectComponent},
    { path: 'transaction', component:OperationComponent},
    { path: 'lister-operation', component:ListeoperationComponent},
    { path: 'static', component:MyStaticComponent},
    { path: 'conf', component:ConfidentialiteComponent},



  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
