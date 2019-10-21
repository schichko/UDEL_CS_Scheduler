import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  semesterPlan;
  planID;

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.semesterPlan = [];
    this.planID = 1;
  }

  getPlan(planID: number) {
    return this.http.get(`https://planner.cis.udel.edu:3002/api/plans/${planID}`).subscribe(plan => this.semesterPlan = plan);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.planID = params['planID']);
    console.log("getting plan");
    this.getPlan(this.planID);
  }

}
