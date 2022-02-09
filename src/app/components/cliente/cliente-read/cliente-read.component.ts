import { clienteService } from './../cliente.service';
import { cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: cliente[]
  displayedColumns = ['_id', 'idCliente', 'nome', 'cnpj', 'action']

  constructor(private clienteService: clienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
