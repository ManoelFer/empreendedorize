import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatSlideToggleChange} from '@angular/material';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

import { PginicialComponent } from './telasiniciais/pginicial/pginicial.component'


export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'pginicial', component: PginicialComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
