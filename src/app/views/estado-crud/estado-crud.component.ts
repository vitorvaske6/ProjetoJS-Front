import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-estado-crud',
  templateUrl: './estado-crud.component.html',
  styleUrls: ['./estado-crud.component.css']
})
export class EstadoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Estados',
      icon: 'storefront',
      routeUrl: '/estados'
    }
  }

  ngOnInit(): void {
  }

  navigateToEstadoCreate(): void {
    this.router.navigate(['/estados/create'])
  }

}
