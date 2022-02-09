import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { cliente } from "./cliente.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class clienteService {
  baseUrl = "http://localhost:3000/clientes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(cliente: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.baseUrl, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<cliente[]> {
    return this.http.get<cliente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(_id: string): Observable<cliente> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(cliente: cliente): Observable<cliente> {
    const url = `${this.baseUrl}/${cliente._id}`;
    return this.http.put<cliente>(url, cliente._id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(cliente: cliente): Observable<cliente> {
    const url = `${this.baseUrl}/${cliente._id}`;
    return this.http.delete<cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
