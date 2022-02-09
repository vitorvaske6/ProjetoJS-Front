import { estadoService } from './../estado.service';
import { estado } from './../estado.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-read',
  templateUrl: './estado-read.component.html',
  styleUrls: ['./estado-read.component.css']
})
export class EstadoReadComponent implements OnInit {

  estados: estado[]
  displayedColumns = ['_id', 'idEstado', 'descricao', 'sigla', 'action']

  constructor(private estadoService: estadoService) { }

  ngOnInit(): void {
    this.estadoService.read().subscribe(estados => {
      this.estados = estados
    })
  }

}
