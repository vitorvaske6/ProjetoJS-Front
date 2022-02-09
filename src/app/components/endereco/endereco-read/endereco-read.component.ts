import { enderecoService } from './../endereco.service';
import { endereco } from './../endereco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-read',
  templateUrl: './endereco-read.component.html',
  styleUrls: ['./endereco-read.component.css']
})
export class EnderecoReadComponent implements OnInit {

  enderecos: endereco[]
  displayedColumns = [ '_id', 'idEndereco', 'idCliente', 'logradouro', 'bairro', 'numero',
     'complemento', 'cidade', 'cep', 'idEstado', 'descricaoEstado', 'pais', 'action']

  constructor(private enderecoService: enderecoService) { }

  ngOnInit(): void {
    this.enderecoService.read().subscribe(enderecos => {
      this.enderecos = enderecos
    })
  }

}
