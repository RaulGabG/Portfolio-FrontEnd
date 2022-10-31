import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;


  miPortfolio:any; 

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }    
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  signIn(){
    this.router.navigate(['/login'])
  }
}
