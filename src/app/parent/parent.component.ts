import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  // ref from parent.com.html(#myInput)
//@ViewChild("#myInput")myInput=undefined;


  @ViewChild("#myInput")myInput!: ElementRef;
  ParentUserName="Parent Data Variable";
  // parent.com.html nu button is active for hide n show
  isVisible=true;
  isClass=false;
  color = "green";

  //  *ngforEx
customerList:any=[];

// isClass: any;

// // switch case example
selectedRole: string = 'admin'; // default role



ngOnInit(): void {
  this.customerList=[
    {
     
      "Fname":"Vrunda",
      "Lname":"Patel",
    },
    {
     
      "Fname":"Khushal",
      "Lname":"Jasani",
    },{
     
      "Fname":"jigna",
      "Lname":"kakaani",
    },

    {
     
      "Fname":"Khushi",
      "Lname":"patel",
    }
  ]
  console.log(this.myInput);
  console.log("ngOnInit called");
 // debugger
  //throw new Error('Method not implemented.');
}

ngDoCheck(){
   //debugger
   console.log("ngDoCheck called"); 
 }

 ngAfterContentinit(){
  //debugger
  console.log("ngAfterContentinit  called");

 }
//frequenty uesed
 ngAfterContentChecked(){
  //debugger
  console.log("ngAfterContentChecked  called");
 }
 //imp  
 ngAfterVIewInit(){
  //debugger
  this.myInput.nativeElement.value="Jasani"
  //console.log(this.myInput);
  console.log("ngAfterviewinit  called");

 }

 ngAfterVIewChecked(){
//debugger
this.myInput.nativeElement.value="Jasani"
console.log("ngAfterviewchecked  called");
 }





GetDataFromChild(event:any){
//debugger
this.ParentUserName=event;
}
}

