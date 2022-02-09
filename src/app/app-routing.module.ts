import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { EnderecoDeleteComponent } from './components/endereco/endereco-delete/endereco-delete.component';
import { EnderecoUpdateComponent } from './components/endereco/endereco-update/endereco-update.component';
// import { EstadoDeleteComponent } from './components/estado/estado-delete/estado-delete.component';
// import { EstadoUpdateComponent } from './components/estado/estado-update/estado-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ClienteCrudComponent } from "./views/cliente-crud/cliente-crud.component";
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { EnderecoCrudComponent } from "./views/endereco-crud/endereco-crud.component";
import { EnderecoCreateComponent } from './components/endereco/endereco-create/endereco-create.component';
import { EstadoCrudComponent } from "./views/estado-crud/estado-crud.component";
import { EstadoCreateComponent } from './components/estado/estado-create/estado-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  // PRODUTOS
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  //CLIENTES
  {
    path: "clientes",
    component: ClienteCrudComponent
  },
  {
    path: "clientes/create",
    component: ClienteCreateComponent
  },
  {
    path: "clientes/update/:_id",
    component: ClienteUpdateComponent
  },
  {
    path: "clientes/delete/:_id",
    component: ClienteDeleteComponent
  },
  //ENDERECO
  {
    path: "enderecos",
    component: EnderecoCrudComponent
  },
  {
    path: "enderecos/create",
    component: EnderecoCreateComponent
  },
  {
    path: "enderecos/update/:_id",
    component: EnderecoUpdateComponent
  },
  {
    path: "enderecos/delete/:_id",
    component: EnderecoDeleteComponent
  },
    //ESTADOS
  {
    path: "estados",
    component: EstadoCrudComponent
  },
  {
    path: "estados/create",
    component: EstadoCreateComponent
  }
  // {
  //   path: "estados/update/:_id",
  //   component: EstadoUpdateComponent
  // },
  // {
  //   path: "estados/delete/:_id",
  //   component: EstadoDeleteComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
