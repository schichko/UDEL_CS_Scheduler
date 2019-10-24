import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-whatif',
  templateUrl: './whatif.component.html',
  styleUrls: ['./whatif.component.css']
})
export class WhatifComponent implements OnInit {
  planNames;

  constructor(private http: HttpClient) { }

  getAllPlanNames(){
    return this.http.get(`http://localhost:3002/api/plans/plan-names`).subscribe(planNames => this.planNames = planNames);
  }

  ngOnInit() {
    this.getAllPlanNames();
  }
}
