import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../../services/favoritos.service';
import { Favchars } from '../../../models/favchars/favchars';
import { auth } from 'firebase';
import { DataService } from '../../../services/data.service';
import { APIResponse } from '../../../models/APIResponse/apiresponse'
import { Character } from '../../../models/character/character'

@Component({
  selector: 'app-misfav',
  templateUrl: './misfav.component.html',
  styleUrls: ['./misfav.component.scss']
})
export class MisfavComponent implements OnInit {

  txt = '';
  favoritos: Array<number>;
  loading = false;
  personajes: Array<Character>
  

  constructor(private favsService: FavoritosService,
    private dataService: DataService) { }

  ngOnInit() {
    this.getAllFavs();

  }

  

  

  getAllFavs(): void {
    this.loading = true;
    this.favsService.getFavoritosId(auth().currentUser.uid).subscribe((items) => {
      this.favoritos = items.payload.data().favorites;
      for (let i of this.favoritos) {
        this.txt = this.txt + i + ','
      }
      console.log(this.txt);
      this.dataService.getMultChar(this.txt).subscribe((items: Array<Character>) => {
        this.personajes = items;
        console.log(this.personajes)
      })
      this.loading = false;
    });
    

}

  

}
