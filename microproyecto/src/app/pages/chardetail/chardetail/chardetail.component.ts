import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../models/character/character'
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-chardetail',
  templateUrl: './chardetail.component.html',
  styleUrls: ['./chardetail.component.scss']
})
export class ChardetailComponent implements OnInit {

  personaje: Character;
  id: number;
  private sub: any;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    
    this.dataService.getOneChar(this.id).subscribe((data: Character)=>{
      console.log(data);
      this.personaje = data;
    }) 
  }

  
    
  
  

}
