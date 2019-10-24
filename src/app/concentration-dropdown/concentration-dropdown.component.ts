import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-concentration-dropdown',
  templateUrl: './concentration-dropdown.component.html',
  styleUrls: ['./concentration-dropdown.component.css']
})
export class ConcentrationDropdownComponent implements OnInit {
  @Input()
  planNames;

  constructor() {}

  ngOnInit() {}

}
