import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  /*Interpolation*/
  public name ="InterPolation";
  /*property Binding*/
  public Url=window.location.href;
  public courseId =123;
  /*Class Binding*/
  public myText="textColor";
  public myText1="textSize";
  public myText2="textStyle";
  public required=true;/*Used in both Class Binding and Style Binding*/
  public group={
    "textColor": this.required,
    "textSize": this.required,
    "textStyle": !/*NOT*/this.required
  }/*Style Binding*/
  public myColor = "tomato";
  public myStyles={
    color : "gold",
    fontSize:"40px",
    fontStyle:"italic"
  }
  userName(){
    return "welcome: "+this.name;
  }
  /*Event Binding*/
  public greet="";
  onClick(){
    this.greet="sumanth";
  }
  show(){
    alert("hello"); 
  }
  /*Template Reference*/
  // message(value){
  //   console.log(value);
  // }
  constructor() { }

  ngOnInit(): void {
  }
}
