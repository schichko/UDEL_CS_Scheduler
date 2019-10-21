import { ViewChild,Component, OnInit, OnDestroy,ComponentRef,ViewContainerRef,ComponentFactoryResolver, Input } from '@angular/core';
import { EmptyTermComponent } from '../empty-term/empty-term.component';
import { type } from 'os';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})


export class UserInfoComponent implements OnInit{

  @Input()
  semester: number;


  @Input()
  plan: number;

  private semesterCount : number = 0;

  private currentUserYear : string = "";
  private currentUserTerm : string = "";
  
  private terms: Array<EmptyTermComponent> = [];
  private allClasses : Array<Array<string>> = [];
  private totalCredits : Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  buttonPop(inputYear : string,inputTerm: string) {
    console.log(inputTerm);
    if( /\d/.test(inputYear) != true){
      alert("Incorrect Input, please input a year");
    }
    else{
      this.currentUserYear = inputYear;
      this.currentUserTerm = inputTerm;
      this.semesterCount ++;
      this.terms.push(new EmptyTermComponent());
      this.allClasses.push([]);
    }
  }
  
    handleNotify(eventData : [number,Array<string>,number]){
      this.allClasses[eventData[0] - 1] = eventData[1];
      this.totalCredits[eventData[0]- 1] = eventData[2];
      console.log(this.allClasses);
      console.log(eventData);
    }

    submitData(){
      console.log(this.allClasses);
      console.log(this.totalCredits);
    }
  
}
