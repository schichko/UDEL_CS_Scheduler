import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';

@Component({
  selector: 'app-empty-term',
  templateUrl: './empty-term.component.html',
  styleUrls: ['./empty-term.component.css']
})
export class EmptyTermComponent implements OnInit {


  @Input()
  semsester: string;

  @Input()
  startYear : string;
  
  @Input()
  term:string;

  // @Output() sendClassesEvent: EventEmitter<[Array<String>,number]> = new EventEmitter<[Array<String>,number]>();

  // @Output() sendClassesEvent: EventEmitter<string> = new EventEmitter<string>();
 
  // @Output()
  @Output() notify: EventEmitter<[number,Array<String>,number]> = new EventEmitter<[number,Array<String>,number]>();

  private semesterPasser : number ;

  
  private classNames : Array<String> = new Array<String>();
  private creditCount : number =0;

  private classesInThisBlock : number = 1;

  private newTitleID : string;
  private newTableID : string;


  constructor() {
  }

  ngOnInit() {
    this.semesterPasser = parseInt(this.semsester, 10);
    this.newTitleID = "semesterNum"+this.semsester;
    this.newTableID = "tableSemseterNum"+this.semsester;
  
    document.getElementById("semeseterNum").id = this.newTitleID ;
    document.getElementById("table").id = this.newTableID;
    document.getElementById(this.newTitleID).innerHTML= this.term +" "+this.startYear;
  }
  
  
  
  addClass(){
    var tableRef = document.getElementById(this.newTableID).getElementsByTagName('tbody')[0];
    var newRow   = tableRef.insertRow();
    var newNumberCell  = newRow.insertCell(0);
    var newClassCell  = newRow.insertCell(1);
    var newCreditCell  = newRow.insertCell(2);


    // Append a text node to the cell
    var newNumberText  = document.createTextNode(this.classesInThisBlock.toString(10));
    newNumberCell.append(newNumberText);
    this.classesInThisBlock = this.classesInThisBlock +1;

    var newInputClass =  document.createElement("input");
    newInputClass.type = "text";
    newInputClass.id = "Class_ID"+this.semesterPasser;
    newInputClass.placeholder = "EX: CISC###";
    newInputClass.style.width = "100px";
    newClassCell.appendChild(newInputClass);

    var newInputCredit =  document.createElement("input");
    newInputCredit.type = "text";
    newInputCredit.id = "Credit_ID"+this.semesterPasser;
    newInputCredit.maxLength = 2;
    newInputCredit.style.width = "30px";
    newInputCredit.style.alignContent;
    newCreditCell.appendChild(newInputCredit);
  }

  isAlphabetic(myChar : string){
    if((myChar.charCodeAt(0) >= 65 &&myChar.charCodeAt(0) <= 90) || (myChar.charCodeAt(0) >= 97 && myChar.charCodeAt(0) <= 122)){
      return true;
    }
    else{
      return false;
    }
  }

  handleClick(){
    var myStuff = document.getElementsByTagName("input");
    this.creditCount = 0;
    this.classNames = [];
    var wrongInputAlert = false;
    for(var i = 0;i <myStuff.length;i++){
      if(myStuff[i].id == "Credit_ID"+this.semesterPasser){
        //console.log(myStuff[i].value + "Is a credit")
        if(parseInt(myStuff[i].value) > 20){
          console.log("In Change Color")
          myStuff[i].style.backgroundColor= "red";
          wrongInputAlert = true;
        }
        else{
          this.creditCount += parseInt(myStuff[i].value);
        }
      }
      else if(myStuff[i].id == "Class_ID"+this.semesterPasser){
        switch(myStuff[i].value.length){
          case 6:
              var finalString = [];
              var correctInput = true;
              for(var j = 0; j<myStuff[i].value.length;j++){
                if(j<3 && this.isAlphabetic(myStuff[i].value.charAt(j))){
                  console.log("Is Alphabetic");
                  finalString.push(myStuff[i].value.charAt(j).toUpperCase());
                }
                else if(j>=3 && parseInt(myStuff[i].value.charAt(j),10) != NaN){
                  console.log("Is Number");
                  finalString.push(myStuff[i].value.charAt(j));
                }
                else {
                  correctInput = false;
                  break;
                }
              }
              if(correctInput == false){
                myStuff[i].style.backgroundColor= "red";
                wrongInputAlert = true;
              }
              else{
                finalString.join();
                console.log(finalString);
                // myStuff[i].value.charAt(0).se = 'r';
                // console.log((Number)(myStuff[i].value.charCodeAt(6)))
                // console.log((Number)(myStuff[i].value.charCodeAt(0)))
                this.classNames.push(finalString.join(""));
              }
            break;

          case 7:
              // if(myStuff[i].value.charAt(6)  )
              var finalString = [];
              var correctInput = true;
              for(var j = 0; j<myStuff[i].value.length;j++){
                if(j<4 && this.isAlphabetic(myStuff[i].value.charAt(j))){
                  console.log("Is Alphabetic");
                  finalString.push(myStuff[i].value.charAt(j).toUpperCase());
                }
                else if(j>=4 && parseInt(myStuff[i].value.charAt(j),10) != NaN){
                  console.log("Is Number");
                  finalString.push(myStuff[i].value.charAt(j));
                }
                else {
                  correctInput = false;
                  break;
                }
              }
              if(correctInput == false){
                myStuff[i].style.backgroundColor= "red";
                wrongInputAlert = true;
              }
              else{
                finalString.join();
                console.log(finalString);
                // myStuff[i].value.charAt(0).se = 'r';
                // console.log((Number)(myStuff[i].value.charCodeAt(6)))
                // console.log((Number)(myStuff[i].value.charCodeAt(0)))
                this.classNames.push(finalString.join(""));
              }
            break;
          
          default:
            myStuff[i].style.backgroundColor= "red";
            wrongInputAlert = true;
            break;
        }        
      }
    }
    if(wrongInputAlert == true){
      alert("Wrong Input Entered please check the red boxes and submit again.\nClass input should be 3/4Letters Followed by 3 Numbers\nEX:CISC320, EX:ART100")
    }
    else{
      this.notify.emit([this.semesterPasser,this.classNames,this.creditCount]);
    }
  }

}


