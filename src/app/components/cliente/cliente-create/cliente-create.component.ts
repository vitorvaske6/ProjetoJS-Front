import { cliente } from './../cliente.model';
import { clienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: cliente = {
    _id: null,
    idCliente: null,
    nome: null,
    cnpj: null
  }

  constructor(private clienteService: clienteService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!')
      this.router.navigate(['/clientes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
