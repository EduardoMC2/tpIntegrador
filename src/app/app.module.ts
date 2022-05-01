import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InteresesComponent } from './intereses/intereses.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule} from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InteresesComponent,
    DisponibilidadComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    SkillsComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
