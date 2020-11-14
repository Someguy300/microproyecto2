import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap } from 'rxjs/operators';
import { APIResponse } from '../models/APIResponse/apiresponse';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  configURL = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCharPageOne(){
    return this.http.get(this.configURL);
  }

  getCharPage(index: number){
    return this.http.get(this.configURL+'?page='+index);
  }
  
  
}
