import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { APIResponse } from '../../../models/APIResponse/apiresponse'
import { Character } from '../../../models/character/character'
import { Favchars } from '../../../models/favchars/favchars'
import { FavoritosService } from '../../../services/favoritos.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.scss']
})
export class CharlistComponent implements OnInit {

  numeros: Array<number>;
  products : Array<Character>;
  loading = false;
  index = null;

  constructor(private favsService: FavoritosService, private dataService: DataService) { }

  ngOnInit() {
    if(this.index==0 || this.index==null){
      this.loading = true;
      this.dataService.getCharPageOne().subscribe((data: APIResponse)=>{
        console.log(data);
        this.products = data.results;
      }) 
      this.index = 0;
      this.loading = false;
    }
  }

  nextPage(){
    this.loading = true;
    this.index= this.index+1;
    this.dataService.getCharPage(this.index).subscribe((data: APIResponse)=>{
      console.log(data);
      this.products = data.results;
    }) 
    this.loading = false;
    
  }



  prevPage(){
    this.loading = true;
    this.index= this.index-1;
    this.dataService.getCharPage(this.index).subscribe((data: APIResponse)=>{
      console.log(data);
      this.products = data.results;
    }) 
    this.loading = false;
  }

  
}
  


