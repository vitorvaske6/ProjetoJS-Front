import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteRead2Component } from './components/cliente/cliente-read2/cliente-read2.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EnderecoCreateComponent } from './components/endereco/endereco-create/endereco-create.component';
import { EnderecoDeleteComponent } from './components/endereco/endereco-delete/endereco-delete.component';
import { EnderecoReadComponent } from './components/endereco/endereco-read/endereco-read.component';
import { EnderecoUpdateComponent } from './components/endereco/endereco-update/endereco-update.component';
import { EstadoCreateComponent } from './components/estado/estado-create/estado-create.component';
// import { EstadoDeleteComponent } from './components/estado/estado-delete/estado-delete.component';
import { EstadoReadComponent } from './components/estado/estado-read/estado-read.component';
// import { EstadoUpdateComponent } from './components/estado/estado-update/estado-update.component';
import { EnderecoCrudComponent } from './views/endereco-crud/endereco-crud.component';
import { EstadoCrudComponent } from './views/estado-crud/estado-crud.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    RedDirective,
    ForDirective,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteReadComponent,
    ClienteRead2Component,
    ClienteUpdateComponent,
    ClienteCrudComponent,
    EnderecoCreateComponent,
    EnderecoDeleteComponent,
    EnderecoReadComponent,
    EnderecoUpdateComponent,
    EstadoCreateComponent,
 //   EstadoDeleteComponent,
    EstadoReadComponent,
   // EstadoUpdateComponent,
    EnderecoCrudComponent,
    EstadoCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
