import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  //inject value of butn[RedirectToparentPage]fun
constructor(public router:Router){

}
ngOnInit(): void {
    
}

// fun for button ->Go To ParentPage
//navigation with router
RedirectToparentPage(){
  //debugger

// this.router.navigate(['/parent']);
//by id goto 1 page to another
this.router.navigate(['/child/2'])
}
}
