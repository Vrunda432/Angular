import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnInit{
//1 page to another by id inject 
  constructor(private ar:ActivatedRoute){

  }

  // data from parent.com.ts

@Input()GetDataFromParentUserName="";
@Output() PassDataToParent=new EventEmitter<any>();


//lifecycle hook
ngOnChanges(changes: SimpleChanges): void {
  // throw new Error('Method not implemented.');
  //debugger
  console.log(changes + "ngOnchanges called   ");
}
ngOnInit(): void {
  //by id 1 to another constructor inject
  //let id=this.ar,snapshot.params["id"];
  //db call>> data>> bind


//console.log("ngOninit called");  
  //debugger
  //throw new Error('Method not implemented.');
}

// swtich case example
@Input() role: string = ''; // Receives role input from the parent






PassDataToParentButton(){
  //debugger

  // var data=[
  //   {
  //     "username":"Vrunda"
  //   },
  //   {
  //     "lastname":"Patel"
  //   }
  // ]

  //you can only 1 parameter to pass in event emitter
  this.PassDataToParent.emit(this.GetDataFromParentUserName);
  // this.PassDataToParent.emit(data);
}

ngOnDestroy(){
  //debugger
}
}
