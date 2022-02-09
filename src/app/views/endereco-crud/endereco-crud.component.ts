import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-endereco-crud',
  templateUrl: './endereco-crud.component.html',
  styleUrls: ['./endereco-crud.component.css']
})
export class EnderecoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Enderecos',
      icon: 'storefront',
      routeUrl: '/enderecos'
    }
  }

  ngOnInit(): void {
  }

  navigateToEnderecoCreate(): void {
    this.router.navigate(['/enderecos/create'])
  }

}
