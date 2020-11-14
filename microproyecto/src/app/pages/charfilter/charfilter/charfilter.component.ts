import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { APIResponse } from '../../../models/APIResponse/apiresponse'
import { Character } from '../../../models/character/character'
import { FilterComponent } from '../../../components/filter/filter/filter.component'

@Component({
  selector: 'app-charfilter',
  templateUrl: './charfilter.component.html',
  styleUrls: ['./charfilter.component.scss']
})
export class CharfilterComponent implements OnInit {

  

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  

}
