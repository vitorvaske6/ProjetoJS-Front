import { Router, ActivatedRoute } from "@angular/router";
import { clienteService } from "./../cliente.service";
import { cliente } from "./../cliente.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  cliente: cliente;

  constructor(
    private clienteService: clienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.clienteService.readById(_id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente).subscribe(() => {
      this.clienteService.showMessage("Cliente excluido com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clientes"]);
  }
}
