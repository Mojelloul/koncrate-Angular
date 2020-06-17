import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends DataService{

  constructor(http: HttpClient) { 
    super('http://localhost:8000/api/page',http);
  }
}
