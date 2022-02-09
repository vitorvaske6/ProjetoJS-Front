import { endereco } from './../endereco.model';
import { enderecoService } from './../endereco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.css']
})
export class EnderecoCreateComponent implements OnInit {

  endereco: endereco = {
    _id: null,
    idEndereco: null,
    idCliente: null,
    logradouro: null,
    bairro: null,
    numero: null,
    complemento: null,
    cidade: null,
    cep: null,
    idEstado: null,
    descricaoEstado: null,
    pais: null
  }

  constructor(private enderecoService: enderecoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createEndereco(): void {
    this.enderecoService.create(this.endereco).subscribe(() => {
      this.enderecoService.showMessage('Endereco criado!')
      this.router.navigate(['/enderecos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/enderecos'])
  }
}
