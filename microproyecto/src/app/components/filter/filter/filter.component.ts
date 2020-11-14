import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public filtrosForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,) {
      this.filtrosForm=this.formBuilder.group({
        name:'',
        salive:false,
        sdead:false,
        sunknown:false,
        especie:'',
        tipo:'',
        gmale:false,
        gfemale:false,
        ggenderless:false,
        gunknown:false,
      });

  }

  public onSubmit() {
    
  }

  ngOnInit(): void {
  }

}
