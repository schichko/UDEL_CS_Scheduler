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
  startYear: string;

  @Input()
  term: string;

  //This is an array containing [What semester this is, all of the classes entered, total number of credits]
  @Output() notify: EventEmitter<[number, Array<String>, number]> = new EventEmitter<[number, Array<String>, number]>();

  //Information to store what semester this is (For some reason when another instance is created semester gets overwritten)
  public semesterPasser: number;

  public classNames: Array<String> = new Array<String>();
  public creditCount: number = 0;

  public classesInThisBlock: number = 1;

  //Originally we have a titleid and table name but we want to overwrite it to be unique som nothing interferes with it later on
  public newTitleID: string;
  public newTableID: string;


  constructor() {
  }

  ngOnInit() {
    //Again like said before, we want to take this.semester and save it somewhere else so when it gets overwritten we still have it(also its easier to be an int)
    this.semesterPasser = parseInt(this.semsester, 10);
    
    //Creating unique ids so later on we do not accidently overwrite it in a different empty-term component
    this.newTitleID = "semesterNum" + this.semsester;
    this.newTableID = "tableSemseterNum" + this.semsester;
  
    //Actually rewrite these ids
    document.getElementById("semeseterNum").id = this.newTitleID;
    document.getElementById("table").id = this.newTableID;
    document.getElementById(this.newTitleID).innerHTML = this.term + " " + this.startYear;
  }

  //lengthy function for dynamically adding a class to our table which consists of 3 cells
  //returns nothing
  addClass() {
    //First we want to check the input, if its true that means every other class was input correctly and they can add a class otherwise they are not able to add a new class
    if(this.checkInput() == true){
      var tableRef = document.getElementById(this.newTableID).getElementsByTagName('tbody')[0];
      var newRow = tableRef.insertRow();
      var newNumberCell = newRow.insertCell(0);
      var newClassCell = newRow.insertCell(1);
      var newCreditCell = newRow.insertCell(2);


      // Append a text node to the cell (simply storing the number of classes)
      var newNumberText = document.createTextNode(this.classesInThisBlock.toString(10));
      newNumberCell.append(newNumberText);
      this.classesInThisBlock = this.classesInThisBlock + 1;

      //Creating a new input for the user to input their class
      var newInputClass = document.createElement("input");
      newInputClass.addEventListener("keyup", event => {
        this.checkInput();
      })
      newInputClass.type = "text";
      newInputClass.id = "Class_ID" + this.semesterPasser;
      newInputClass.placeholder = "EX: CISC###";
      newInputClass.maxLength = 7;
      newInputClass.style.width = "100px";
      newClassCell.appendChild(newInputClass);

      //Creating a new input for the user to input the amount of credits a certain class was
      var newInputCredit = document.createElement("input");
      newInputCredit.addEventListener("keyup", event => {
        this.checkInput();
      })
      newInputCredit.type = "text";
      newInputCredit.id = "Credit_ID" + this.semesterPasser;
      newInputCredit.maxLength = 2;
      newInputCredit.style.width = "30px";
      newInputCredit.style.alignContent;
      newCreditCell.appendChild(newInputCredit);
    }
    //If the inputs previously ented was not 
    else{
      alert("Wrong Input Entered please check the red boxes before you add another class.\nClass input should be 3/4Letters Followed by 3 Numbers\nEX:CISC320, EX:ART100")
    }
  }

  //Function to check if a string constists of only alphabetical characters
  //Returns false if it contains a number/sybmol, else returns true
  isAlphabetic(myChar: string) {
    if ((myChar.charCodeAt(0) >= 65 && myChar.charCodeAt(0) <= 90) || (myChar.charCodeAt(0) >= 97 && myChar.charCodeAt(0) <= 122)) {
      return true;
    }
    else {
      return false;
    }
  }

  //Function to check users input
  //Retruns true if all of our user inputs meet our specifications, returns false otherwise
  checkInput() {
    //get elements by tag returns a list of every element with the input tag, in our case it would have all of the class data and all of the credit data
    var allUserInputs = document.getElementsByTagName("input");
    //Resets the credit count
    this.creditCount = 0;
    //Resets the class names (both of these resets are to account if they changed a previous one, we do not want to append a duplicate)
    this.classNames = [];
    
    var wrongInputFlag = false;
    for (var i = 0; i < allUserInputs.length; i++) {
      //As mentioned before the list contains every input tag, we want to first check if the id is for a credit or for a class and do different things based on the id
      if (allUserInputs[i].id == "Credit_ID" + this.semesterPasser) {
        //The credit cannot be negative, blank or very high(over 20) this prevents the user from doing that
        if (parseInt(allUserInputs[i].value) > 20 || parseInt(allUserInputs[i].value) < 0||allUserInputs[i].value == undefined  || allUserInputs[i].value == "") {
          allUserInputs[i].style.backgroundColor = "red";
          wrongInputFlag = true;
        }
        else {
          allUserInputs[i].style.backgroundColor = "white";
          this.creditCount += parseInt(allUserInputs[i].value);
        }
      }
      //As mentioned before the list contains every input tag, we want to first check if the id is for a credit or for a class and do different things based on the id
      else if (allUserInputs[i].id == "Class_ID" + this.semesterPasser) {
        //A class can be 6 or 7 characters (EX: ART231 or CISC324), to our knowledge there is no class greater than 7 characters or less than 6
        switch (allUserInputs[i].value.length) {
          case 6:
            var finalString = [];
            var correctInput = true;
            for (var j = 0; j < allUserInputs[i].value.length; j++) {
              if (j < 3 && this.isAlphabetic(allUserInputs[i].value.charAt(j))) {
                finalString.push(allUserInputs[i].value.charAt(j).toUpperCase());
              }
              else if (j >= 3 && parseInt(allUserInputs[i].value.charAt(j), 10) != NaN) {
                finalString.push(allUserInputs[i].value.charAt(j));
              }
              else {
                correctInput = false;
                break;
              }
            }
            if (correctInput == false) {
              allUserInputs[i].style.backgroundColor = "red";
              wrongInputFlag = true;
            }
            else {
              allUserInputs[i].style.backgroundColor = "white";
              finalString.join();
              this.classNames.push(finalString.join(""));
            }
            break;

          case 7:
            var finalString = [];
            var correctInput = true;
            for (var j = 0; j < allUserInputs[i].value.length; j++) {
              if (j < 4 && this.isAlphabetic(allUserInputs[i].value.charAt(j))) {
                finalString.push(allUserInputs[i].value.charAt(j).toUpperCase());
              }
              else if (j >= 4 && parseInt(allUserInputs[i].value.charAt(j), 10) != NaN) {
                finalString.push(allUserInputs[i].value.charAt(j));
              }
              else {
                correctInput = false;
                break;
              }
            }
            if (correctInput == false) {
              allUserInputs[i].style.backgroundColor = "red";
              wrongInputFlag = true;
            }
            else {
              allUserInputs[i].style.backgroundColor = "white";
              finalString.join();
              this.classNames.push(finalString.join(""));
            }
            break;

          default:
            console.log("InDefault");
            allUserInputs[i].style.backgroundColor = "red";
            wrongInputFlag = true;
            break;
        }
      }
    }
    if (wrongInputFlag == true) {
      return false;
    }
    else {
      this.notify.emit([this.semesterPasser, this.classNames, this.creditCount]);
      return true;
    }
  }

}


