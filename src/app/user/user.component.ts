import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-user',// as html tag behavior 
  standalone: false,
  
  templateUrl: './user.component.html',//wife
  styleUrl: './user.component.css'//child
})
export class UserComponent implements OnInit{ //hasband

  // /*variable declare in [ts] file like you can provide name of ur variable ,type n value*/

  userName:string="Vrunda";
  //isActive:boolean=true;
  // datatype na khbr hoy to --any-- use krvi
  isActive:any=true;




constructor(){} 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




onClick():void{
  //debugger
  // alert(1)
  //this.userName="Khushal";
}

onClickEvent(){
  alert(23);
}
}
 