import { BadInput } from './../commun/bad-input';
import { NotFoundError } from './../commun/not-found-error';
import { AppError } from './../commun/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export class DataService {
    
  constructor( private url:string,private http: HttpClient) {
    
   }
   
   getAll(limit?:number){
    return this.http.get(this.url+"/"+limit).pipe(
        map(response=>response),
      catchError(this.handleError)
  );
  }

  getOne(slug:string){
    return this.http.get(this.url+"/"+slug).pipe(
        map(response=>response),
      catchError(this.handleError)
  );
  }

  creat(resouce){
   return this.http.post(this.url,resouce).pipe(
    map(response=>response),
    catchError(this.handleError)
  );
  }
 


   private handleError(error:Response){
    
      if(error.status === 404)
        return throwError(new NotFoundError);
      if(error.status===400)
        return throwError(new BadInput);
      else
        return throwError(new AppError);
     
   }
}
