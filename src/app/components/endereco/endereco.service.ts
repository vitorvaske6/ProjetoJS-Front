import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { endereco } from "./endereco.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class enderecoService {
  baseUrl = "http://localhost:3000/enderecos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(endereco: endereco): Observable<endereco> {
    return this.http.post<endereco>(this.baseUrl, endereco).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<endereco[]> {
    return this.http.get<endereco[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(_id: string): Observable<endereco> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<endereco>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(endereco: endereco): Observable<endereco> {
    const url = `${this.baseUrl}/${endereco._id}`;
    return this.http.put<endereco>(url, endereco._id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(endereco: endereco): Observable<endereco> {
    const url = `${this.baseUrl}/${endereco._id}`;
    return this.http.delete<endereco>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
