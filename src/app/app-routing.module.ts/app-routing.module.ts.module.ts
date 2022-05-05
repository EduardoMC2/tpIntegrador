import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PorfolioComponent } from '../porfolio/porfolio.component';
import { Pagina404Component } from '../pagina404/pagina404.component';

const routes : Routes =  [
  {path:"porfolio", component: PorfolioComponent},
  {path:"login", component:LoginComponent},
  {path: '**', component: Pagina404Component},
  {path: " ", redirectTo: "login", pathMatch:"full"}
];

@NgModule({
  declarations: [],
  imports: 
   [ RouterModule.forRoot (routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
