import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  title = 'Fall 2019';

  @Input()
  classes;

  constructor() { }

  ngOnInit() {
    console.log(this.classes);
  }

}
