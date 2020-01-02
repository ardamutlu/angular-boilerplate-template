// Angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// RxJS
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: any) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
