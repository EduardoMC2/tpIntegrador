import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  interes : any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>
      {console.log(data)
      this.interes = data;
      });
      
  }
  
}