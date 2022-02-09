import { cliente } from "./../cliente.model";
import { Router, ActivatedRoute } from "@angular/router";
import { clienteService } from "./../cliente.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cliente-update",
  templateUrl: "./cliente-update.component.html",
  styleUrls: ["./cliente-update.component.css"],
})
export class ClienteUpdateComponent implements OnInit {
  cliente: cliente;

  constructor(
    private clienteService: clienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get("_id");
    this.clienteService.readById(_id).subscribe((cliente) => {
      this.cliente = cliente;
      console.log(cliente)
    });
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clientes"]);
  }
}
