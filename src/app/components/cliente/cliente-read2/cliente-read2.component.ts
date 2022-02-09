import { cliente } from './../cliente.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientRead2DataSource } from './cliente-read2-datasource';

@Component({
  selector: 'app-cliente-read2',
  templateUrl: './cliente-read2.component.html',
  styleUrls: ['./cliente-read2.component.css']
})
export class ClienteRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<cliente>;
  dataSource: ClientRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idCliente', 'nome', 'cnpj'];

  ngOnInit() {
    this.dataSource = new ClientRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
