import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.scss']
})
export class EduExpComponent implements OnInit {

  miExperiencia:any; 
  miEducacion:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miExperiencia=data.experience;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miEducacion=data.education;
    });
  }

}
