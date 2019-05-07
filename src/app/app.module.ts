import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { 
  LoginModule, 
  LoginRoutingModule, 
  CadastroPjModule,
  CadastroPjRoutingModule,
  CadastroPfModule,
  CadastroPfRoutingModule
} from './autenticacao';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './telasiniciais/home/home.component';
import { RodapeComponent } from './telasiniciais/rodape/rodape.component';
import { TopoComponent } from './telasiniciais/topo/topo.component';
import { PginicialComponent } from './telasiniciais/pginicial/pginicial.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CriarComponent } from './telasplano/criar/criar.component';
import { ConsultarComponent } from './telasplano/consultar/consultar.component';
import { AlterarComponent } from './telasplano/alterar/alterar.component';
import { VincularComponent } from './telasplano/vincular/vincular.component';
import { ExcluirComponent } from './telasplano/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    TopoComponent,
    PginicialComponent,
    CriarComponent,
    ConsultarComponent,
    AlterarComponent,
    VincularComponent,
    ExcluirComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    MatPasswordStrengthModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
