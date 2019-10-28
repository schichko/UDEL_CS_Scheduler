import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-concentration-dropdown',
  templateUrl: './concentration-dropdown.component.html',
  styleUrls: ['./concentration-dropdown.component.css']
})
export class ConcentrationDropdownComponent implements OnInit  {
  @Input()
  planNames;

  planName;

  constructor() {}

  ngOnInit() {}

  onChange(value){
    console.log(value);
  }

}