import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class CheckService {



  constructor(private http: HttpClient) 
  {

  }


  checkLogin (login): Observable<string> {
    console.log(login)
    return this.http.post<string>(`${apiUrl}/check/login`, {login: login}, httpOptions).pipe(
      tap((login: any) => console.log(`check Login w/ ${login}`)),
      catchError(this.handleError<any>('addSkill'))
    );
  }
  
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
