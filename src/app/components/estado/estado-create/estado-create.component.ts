import { estado } from './../estado.model';
import { estadoService } from './../estado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-create',
  templateUrl: './estado-create.component.html',
  styleUrls: ['./estado-create.component.css']
})
export class EstadoCreateComponent implements OnInit {

  estado: estado = {
    _id: null,
    idEstado: null,
    descricao: null,
    sigla: null
  }

  constructor(private estadoService: estadoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createEstado(): void {
    this.estadoService.create(this.estado).subscribe(() => {
      this.estadoService.showMessage('Estado criado!')
      this.router.navigate(['/estados'])
    })

  }

  cancel(): void {
    this.router.navigate(['/estados'])
  }
}
