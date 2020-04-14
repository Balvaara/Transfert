import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { ForrConnexionComponent } from './components/forr-connexion/forr-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';

import { APP_BASE_HREF, NgIfContext } from '@angular/common';

import { AjoutUserComponent } from './users/ajout_users/ajout-user.component';
import { ListUserComponent } from './users/listUser/list-user/list-user.component';
import { CrerCompteComponent } from './comptes/crer-compte/crer-compte.component';
import { PartenerComponent } from './partenaires/partener/partener.component';
import { ListeCompteComponent } from './comptes/liste-compte/liste-compte.component';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { FaireDepotComponent } from './comptes/faire-depot/faire-depot.component';
import { ListedepotComponent } from './comptes/listedepot/listedepot.component';
import { AffectationComponent } from './affect/affectation/affectation.component';
import { ListeAffectComponent } from './affect/liste-affect/liste-affect.component';
import { OperationComponent } from './transaction/operation/operation.component';
import { MyStaticComponent } from './static/my-static/my-static.component';
import { ListeoperationComponent } from './transaction/listeoperation/listeoperation.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ForrConnexionComponent,
    AjoutUserComponent,
    
    ListeCompteComponent,
    ListUserComponent,
    CrerCompteComponent,
    PartenerComponent,
    DefaultComponent,
    NavbarComponent,
    SidbarComponent,
    FaireDepotComponent,
    ListedepotComponent,
    AffectationComponent,
    ListeAffectComponent,
    OperationComponent,
    MyStaticComponent,
    ListeoperationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: APP_BASE_HREF, useValue : '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
