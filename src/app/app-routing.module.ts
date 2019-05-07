import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatSlideToggleChange} from '@angular/material';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

import { PginicialComponent } from './telasiniciais/pginicial/pginicial.component'
import { HomeComponent } from './telasiniciais/home/home.component'
import { CriarComponent } from './telasplano/criar/criar.component'
import { ConsultarComponent } from './telasplano/consultar/consultar.component'
import { AlterarComponent } from './telasplano/alterar/alterar.component'
import { VincularComponent } from './telasplano/vincular/vincular.component'
import { ExcluirComponent } from './telasplano/excluir/excluir.component'


export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'pginicial', component: PginicialComponent},
    {path: 'home', component: HomeComponent},
    {path: 'criar', component: CriarComponent},
    {path: 'consultar', component: ConsultarComponent},
    {path: 'alterar', component: AlterarComponent},
    {path: 'vincular', component: VincularComponent},
    {path: 'excluir', component: ExcluirComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
