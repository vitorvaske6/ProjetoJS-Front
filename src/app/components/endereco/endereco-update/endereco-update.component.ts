import { endereco } from "./../endereco.model";
import { Router, ActivatedRoute } from "@angular/router";
import { enderecoService } from "./../endereco.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-endereco-update",
  templateUrl: "./endereco-update.component.html",
  styleUrls: ["./endereco-update.component.css"],
})
export class EnderecoUpdateComponent implements OnInit {
  endereco: endereco;

  constructor(
    private enderecoService: enderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get("_id");
    this.enderecoService.readById(_id).subscribe((endereco) => {
      this.endereco = endereco;
      console.log(endereco)
    });
  }

  updateEndereco(): void {
    this.enderecoService.update(this.endereco).subscribe(() => {
      this.enderecoService.showMessage("Endereco atualizado com sucesso!");
      this.router.navigate(["/enderecos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/enderecos"]);
  }
}
