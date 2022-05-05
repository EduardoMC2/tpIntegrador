import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { PorfolioComponent } from './porfolio/porfolio.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    PresentacionComponent,
    PorfolioComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
