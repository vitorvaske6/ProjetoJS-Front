import { cliente } from './../cliente.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { clienteService } from './../cliente.service';



const EXAMPLE_DATA: cliente[] = [
  {_id:"605abde421f2eb45f0879f6c", idCliente: 1, nome: 'Hydrogen', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 2, nome: 'Helium', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 3, nome: 'Lithium', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 4, nome: 'Beryllium', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 5, nome: 'Boron', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 6, nome: 'Carbon', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 7, nome: 'Nitrogen', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 8, nome: 'Oxygen', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 9, nome: 'Fluorine', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 10, nome: 'Neon', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 11, nome: 'Sodium', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 12, nome: 'Magnesium', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 13, nome: 'Aluminum', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 14, nome: 'Silicon', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 15, nome: 'Phosphorus', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 16, nome: 'Sulfur', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 17, nome: 'Chlorine', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 18, nome: 'Argon', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 19, nome: 'Potassium', cnpj: "00-000-000/0001-00"},
  {_id:"605abde421f2eb45f0879f6c", idCliente: 20, nome: 'Calcium', cnpj: "00-000-000/0001-00"}
];

/**
 * Data source for the ClientRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientRead2DataSource extends DataSource<cliente> {
  data: cliente[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<cliente[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (cliente-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: cliente[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (cliente-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: cliente[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'idCliente': return compare(+a.idCliente, +b.idCliente, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Nome columns (for cliente-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
