import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  configURL = 'https://rickandmortyapi.com/api/character/';
  filterString='';
  auxS=false;

  constructor(private http: HttpClient) { }

  getCharPageOne(){
    return this.http.get(this.configURL);
  }

  getCharPage(index: number){
    return this.http.get(this.configURL+'?page='+index);
  }

  getOneChar(id:number){
    return this.http.get(this.configURL+id);
  }

  
  
        
}
