import { Router, ActivatedRoute } from "@angular/router";
import { enderecoService } from "./../endereco.service";
import { endereco } from "./../endereco.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.css']
})
export class EnderecoDeleteComponent implements OnInit {
  endereco: endereco;

  constructor(
    private enderecoService: enderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.enderecoService.readById(_id).subscribe((endereco) => {
      this.endereco = endereco;
    });
  }

  deleteEndereco(): void {
    this.enderecoService.delete(this.endereco).subscribe(() => {
      this.enderecoService.showMessage("Endereco excluido com sucesso!");
      this.router.navigate(["/enderecos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/enderecos"]);
  }
}
